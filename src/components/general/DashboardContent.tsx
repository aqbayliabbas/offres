"use client";

import { useState } from 'react';
import {
    Hotel,
    MessageSquare,
    LogOut,
    Sparkles,
    LayoutGrid,
    BarChart3,
    ArrowUpRight,
    Menu,
    X
} from 'lucide-react';
import FeedbackCard from './FeedbackCard';
import HotelCard from './HotelCard';
import DashboardCharts from './DashboardCharts';
import ConfirmationModal from './ConfirmationModal';
import { createClient } from '../../utils/supabase/client';

export default function DashboardContent({
    feedbacks: initialFeedbacks,
    hotels: initialHotels,
    hotelCount: initialHotelCount,
    feedbackCount: initialFeedbackCount
}: {
    feedbacks: any[],
    hotels: any[],
    hotelCount: number,
    feedbackCount: number
}) {
    const supabase = createClient();
    const [activeTab, setActiveTab] = useState<'stats' | 'leads' | 'hotels'>('stats');
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
    const [hotels, setHotels] = useState(initialHotels);
    const [hotelCount, setHotelCount] = useState(initialHotelCount);
    const [feedbackCount, setFeedbackCount] = useState(initialFeedbackCount);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<{ id: string, type: 'lead' | 'hotel', name: string } | null>(null);

    const handleToggle = (id: string) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    const triggerDelete = (id: string, type: 'lead' | 'hotel', name: string) => {
        setItemToDelete({ id, type, name });
        setIsModalOpen(true);
    };

    const executeDelete = async () => {
        if (!itemToDelete) return;

        const { id, type } = itemToDelete;
        const table = type === 'lead' ? 'offer_feedbacks' : 'basic_infos';

        const { error } = await supabase.from(table).delete().eq('id', id);

        if (!error) {
            if (type === 'lead') {
                setFeedbacks(prev => prev.filter(f => f.id !== id));
                setFeedbackCount(prev => prev - 1);
            } else {
                setHotels(prev => prev.filter(h => h.id !== id));
                setHotelCount(prev => prev - 1);
            }
        }

        setIsModalOpen(false);
        setItemToDelete(null);
    };

    return (
        <div className="flex min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans selection:bg-[#0071e3]/10">
            {/* Mobile Menu Toggle - Positioned to align with content padding */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden fixed top-6 left-6 z-[60] w-12 h-12 bg-white/80 backdrop-blur-xl text-black rounded-2xl flex items-center justify-center shadow-xl active:scale-90 transition-all border border-black/5"
            >
                {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Backdrop for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Ultra-Premium Minimalist Sidebar */}
            <aside className={`fixed inset-y-0 left-0 w-[280px] bg-white border-r border-black/5 z-50 flex flex-col p-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Logo Area - Adjusted for mobile toggle gap */}
                <div className="flex items-center gap-3 mb-12 mt-16 lg:mt-0 px-2">
                    <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-2xl shadow-black/20">
                        <LayoutGrid className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <span className="text-sm font-black tracking-tighter uppercase block">Intelligence</span>
                        <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest leading-none">Core Pro v3</span>
                    </div>
                </div>

                <nav className="flex-1 space-y-2">
                    <button
                        onClick={() => { setActiveTab('stats'); setExpandedId(null); setIsSidebarOpen(false); }}
                        className={`w-full group flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${activeTab === 'stats' ? 'bg-[#F2F2F7] text-[#0071e3]' : 'text-zinc-400 hover:text-black hover:bg-[#F2F2F7]/50'}`}
                    >
                        <BarChart3 className={`w-5 h-5 transition-transform group-hover:scale-110 ${activeTab === 'stats' ? 'text-[#0071e3]' : ''}`} />
                        <span className="text-xs font-black uppercase tracking-widest">Dashboard</span>
                        {activeTab === 'stats' && <div className="ml-auto w-1.5 h-1.5 bg-[#0071e3] rounded-full" />}
                    </button>
                    <button
                        onClick={() => { setActiveTab('leads'); setExpandedId(null); setIsSidebarOpen(false); }}
                        className={`w-full group flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${activeTab === 'leads' ? 'bg-[#F2F2F7] text-[#0071e3]' : 'text-zinc-400 hover:text-black hover:bg-[#F2F2F7]/50'}`}
                    >
                        <MessageSquare className={`w-5 h-5 transition-transform group-hover:scale-110 ${activeTab === 'leads' ? 'text-[#0071e3]' : ''}`} />
                        <span className="text-xs font-black uppercase tracking-widest">Leads</span>
                        {activeTab === 'leads' && <div className="ml-auto w-1.5 h-1.5 bg-[#0071e3] rounded-full" />}
                    </button>
                    <button
                        onClick={() => { setActiveTab('hotels'); setExpandedId(null); setIsSidebarOpen(false); }}
                        className={`w-full group flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${activeTab === 'hotels' ? 'bg-[#F2F2F7] text-[#0071e3]' : 'text-zinc-400 hover:text-black hover:bg-[#F2F2F7]/50'}`}
                    >
                        <Hotel className={`w-5 h-5 transition-transform group-hover:scale-110 ${activeTab === 'hotels' ? 'text-[#0071e3]' : ''}`} />
                        <span className="text-xs font-black uppercase tracking-widest">Annuaire</span>
                        {activeTab === 'hotels' && <div className="ml-auto w-1.5 h-1.5 bg-[#0071e3] rounded-full" />}
                    </button>
                </nav>

                <div className="mt-auto space-y-6">
                    <div className="p-6 bg-[#F2F2F7] rounded-xl">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#0071e3] mb-2">Sync Status</p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#34C759] rounded-full animate-pulse" />
                            <span className="text-[11px] font-bold">Base Cloud Active</span>
                        </div>
                    </div>

                    <form action="/auth/signout" method="post">
                        <button className="flex items-center gap-4 px-5 py-2 text-zinc-400 hover:text-red-500 transition-colors group">
                            <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Quitter</span>
                        </button>
                    </form>
                </div>
            </aside>

            {/* Content with Massive Negative Space */}
            <main className="flex-1 lg:ml-[280px] p-6 pt-24 sm:p-12 sm:pt-24 lg:p-32">
                {/* Header Section */}
                <header className="mb-12 md:mb-24">
                    <div className="w-full">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0071e3]/5 rounded-full mb-6">
                            <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
                            <span className="text-[9px] font-black text-[#0071e3] uppercase tracking-[0.3em]">
                                {activeTab === 'stats' ? 'Performance Overview' : 'Data Management'}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-6">
                            {activeTab === 'stats' && 'Dashboard'}
                            {activeTab === 'leads' && 'Leads Qualifiés'}
                            {activeTab === 'hotels' && 'Annuaire Prospection'}
                        </h1>
                    </div>
                </header>

                {activeTab === 'stats' ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        {/* BI KPI Section - Redesigned as Rounded Apple Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
                            <div className="bg-white p-6 sm:p-10 rounded-[32px] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-[#0071e3]/10 flex items-center justify-center">
                                        <MessageSquare className="w-4 h-4 text-[#0071e3]" />
                                    </div>
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Leads Qualifiés</p>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <h2 className="text-5xl font-bold tracking-tight">{feedbackCount}</h2>
                                    <span className="text-[#34C759] text-sm font-black">+12%</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 sm:p-10 rounded-[32px] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
                                        <Hotel className="w-4 h-4 text-black" />
                                    </div>
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Total Hôtels</p>
                                </div>
                                <h2 className="text-5xl font-bold tracking-tight">{hotelCount}</h2>
                            </div>

                            <div className="bg-white p-6 sm:p-10 rounded-[32px] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                                        <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                                    </div>
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Taux d'Engagement</p>
                                </div>
                                <h2 className="text-5xl font-bold tracking-tight">{Math.round((feedbackCount / hotelCount) * 100) || 0}%</h2>
                                <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest mt-3">Ratio de Conversion</p>
                            </div>
                        </div>

                        {/* BI Charts Component */}
                        <div className="mb-32">
                            <DashboardCharts feedbacks={feedbacks} />
                        </div>
                    </div>
                ) : (
                    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="space-y-4">
                            {activeTab === 'leads' ? (
                                <>
                                    {feedbacks.length > 0 ? (
                                        feedbacks.map((fb) => (
                                            <div key={fb.id} className="transition-all hover:scale-[1.01]">
                                                <FeedbackCard
                                                    fb={fb}
                                                    isOpen={expandedId === fb.id}
                                                    onToggle={() => handleToggle(fb.id)}
                                                    onDelete={() => triggerDelete(fb.id, 'lead', fb.hotel_name)}
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="py-40 text-center bg-white rounded-xl border border-dashed border-zinc-100 italic text-zinc-300">
                                            Aucun lead disponible pour le moment.
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    {hotels.length > 0 ? (
                                        hotels.map((hotel) => (
                                            <div key={hotel.id} className="transition-all hover:scale-[1.01]">
                                                <HotelCard
                                                    hotel={hotel}
                                                    isOpen={expandedId === hotel.id}
                                                    onToggle={() => handleToggle(hotel.id)}
                                                    onDelete={() => triggerDelete(hotel.id, 'hotel', hotel.hotel_name)}
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="py-40 text-center bg-white rounded-xl border border-dashed border-zinc-100 italic text-zinc-300">
                                            L'annuaire est encore vide.
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                )}
            </main>

            {/* Premium Confirmation Modal */}
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={executeDelete}
                title={itemToDelete?.type === 'lead' ? 'Supprimer ce Lead ?' : 'Supprimer cet Hôtel ?'}
                message={`Êtes-vous sûr de vouloir supprimer ${itemToDelete?.name} ? Cette action est irréversible.`}
                confirmText="Confirmer la Suppression"
                variant="danger"
            />
        </div>
    );
}
