"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts';
import { motion } from 'framer-motion';
import { format, subDays, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function DashboardCharts({ feedbacks }: { feedbacks: any[] }) {
    // Process data for AreaChart (Daily Submissions - Last 14 days)
    const dailyData = Array.from({ length: 14 }).map((_, i) => {
        const date = subDays(new Date(), 13 - i);
        const count = feedbacks.filter(fb => isSameDay(new Date(fb.created_at), date)).length;
        return {
            date: format(date, 'dd MMM', { locale: fr }),
            count
        };
    });

    // Process data for BarChart (Interests Distribution)
    const interestCounts: Record<string, number> = {};
    feedbacks.forEach(fb => {
        fb.interests?.forEach((interest: string) => {
            interestCounts[interest] = (interestCounts[interest] || 0) + 1;
        });
    });

    const interestData = Object.entries(interestCounts)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

    const COLORS = ['#d3af37', '#000000', '#6366f1', '#a855f7', '#ec4899'];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Momentum Chart */}
            <div className="bg-white p-6 sm:p-10 rounded-[32px] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(211,175,55,0.08)] hover:-translate-y-2 hover:scale-[1.01]">
                <div className="mb-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d3af37] mb-2">Acquisition</p>
                    <h3 className="text-2xl font-bold tracking-tight text-black">Momentum des Leads</h3>
                </div>
                <div className="h-[280px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={dailyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#d3af37" stopOpacity={0.15} />
                                    <stop offset="95%" stopColor="#d3af37" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 9, fill: '#A1A1AA', fontWeight: 600 }}
                                dy={15}
                            />
                            <YAxis
                                hide
                            />
                            <Tooltip
                                cursor={{ stroke: '#d3af37', strokeWidth: 1 }}
                                contentStyle={{
                                    borderRadius: '12px',
                                    border: '1px solid rgba(211,175,55,0.05)',
                                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                                    fontSize: '11px',
                                    fontWeight: 'bold'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="count"
                                stroke="#d3af37"
                                strokeWidth={2.5}
                                fillOpacity={1}
                                fill="url(#colorCount)"
                                animationDuration={2000}
                                strokeLinecap="round"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Interest Distribution - Redesigned as Premium List */}
            <div className="bg-white p-6 sm:p-10 rounded-[32px] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:scale-[1.01]">
                <div className="mb-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Préférences</p>
                    <h3 className="text-2xl font-bold tracking-tight text-black">Top Fonctionnalités</h3>
                </div>

                <div className="space-y-8">
                    {interestData.map((item, index) => {
                        const percentage = (item.value / feedbacks.length) * 100;
                        const color = COLORS[index % COLORS.length];

                        return (
                            <div key={item.name} className="group/item">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[11px] font-bold text-black uppercase tracking-wider">{item.name}</span>
                                    <span className="text-[10px] font-black text-zinc-400">{item.value}</span>
                                </div>
                                <div className="h-2 w-full bg-[#F5F5F7] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${percentage}%` }}
                                        transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        className="h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                                        style={{ backgroundColor: color }}
                                    />
                                </div>
                            </div>
                        );
                    })}

                    {interestData.length === 0 && (
                        <div className="py-10 text-center text-zinc-300 italic text-sm">
                            Données en cours de collecte...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
