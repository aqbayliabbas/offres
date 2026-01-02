"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    AlertCircle,
    Calendar,
    Wallet,
    TrendingUp,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    Star,
    Trash2
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function FeedbackCard({ fb, isOpen, onToggle, onDelete }: { fb: any, isOpen: boolean, onToggle: () => void, onDelete: () => void }) {

    return (
        <div className={`group relative bg-white rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'border-black/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]' : 'border-black/5 hover:border-black/10 hover:shadow-xl hover:-translate-y-1'}`}>
            {/* Background Glow Effect */}
            <div className={`absolute inset-0 rounded-xl transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 ${isOpen ? 'opacity-30' : ''}`}
                style={{ background: 'radial-gradient(1200px circle at var(--x) var(--y), rgba(0,113,227,0.03), transparent 40%)' }}
            />

            {/* Header Area */}
            <div
                onClick={onToggle}
                className="w-full relative z-10 p-6 md:p-8 flex items-center justify-between text-left cursor-pointer select-none"
            >
                <div className="flex items-center gap-6">
                    {/* Dynamic Icon Box */}
                    <div className="relative shrink-0">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-black text-white scale-110 rotate-[10deg]' : 'bg-[#F5F5F7] text-zinc-400 group-hover:bg-[#0071e3]/10 group-hover:text-[#0071e3]'}`}>
                            <TrendingUp className={`w-6 h-6 md:w-7 md:h-7 transition-transform duration-500 ${isOpen ? 'scale-110' : ''}`} />
                        </div>
                        {fb.lost_bookings?.includes('Plus') && (
                            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                                <AlertCircle className="w-3 h-3 text-white" />
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1">
                            <h4 className="text-lg md:text-xl font-bold tracking-tight text-black leading-none truncate max-w-[140px] sm:max-w-none">
                                {fb.hotel_name}
                            </h4>
                            {isOpen ? (
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-[9px] font-black text-[#0071e3] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#0071e3]/5 rounded-full border border-[#0071e3]/10"
                                >
                                    Vue Active
                                </motion.span>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <span className="text-[9px] font-black text-zinc-300 uppercase tracking-[0.2em]">Lead #{fb.id.slice(0, 4)}</span>
                                    {fb.custom_budget && (
                                        <span className="text-[8px] font-black bg-red-500 text-white px-1.5 py-0.5 rounded-full uppercase tracking-widest animate-pulse">Offre Perso</span>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-400">
                            <div className="flex items-center gap-1.5 font-medium text-[10px] md:text-xs">
                                <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                <span>{format(new Date(fb.created_at), 'dd MMM yyyy', { locale: fr })}</span>
                            </div>
                            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-zinc-100" />
                            <div className="flex items-center gap-1.5 font-medium text-[10px] md:text-xs">
                                <Phone className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                <span>{fb.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <div className={`hidden lg:flex flex-col items-end transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                        <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest leading-none mb-1">Budget</span>
                        <span className="text-xs font-bold text-black">{fb.budget_fit?.split(',')[0]}</span>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 border border-red-100 z-20 shrink-0"
                    >
                        <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                    </button>

                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${isOpen ? 'bg-black text-white rotate-180' : 'bg-white border border-black/5 text-zinc-400 shadow-sm group-hover:shadow-md'}`}>
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                </div>
            </div>

            {/* Expandable Details Section */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="px-8 pb-10">
                            {/* Visual Divider */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-black/5 to-transparent mb-10" />

                            <div className="grid gap-6">
                                {/* Condensed Header Info Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="group/item p-5 bg-[#F5F5F7] rounded-lg border border-black/5 transition-all hover:bg-white hover:shadow-lg">
                                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[#0071e3] shadow-sm mb-3">
                                            <AlertCircle className="w-4 h-4" />
                                        </div>
                                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">Défi</p>
                                        <p className="text-xs font-bold text-black leading-tight italic">"{fb.challenge}"</p>
                                    </div>

                                    <div className="group/item p-5 bg-[#F5F5F7] rounded-lg border border-black/5 transition-all hover:bg-white hover:shadow-lg">
                                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-red-500 shadow-sm mb-3">
                                            <TrendingUp className="w-4 h-4" />
                                        </div>
                                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">Impact</p>
                                        <p className="text-xs font-bold text-black leading-tight">Estimation: <span className="text-red-500">{fb.lost_bookings}</span>/mois</p>
                                    </div>

                                    <div className="group/item p-5 bg-[#F5F5F7] rounded-lg border border-black/5 transition-all hover:bg-white hover:shadow-lg">
                                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-amber-500 shadow-sm mb-3">
                                            <Calendar className="w-4 h-4" />
                                        </div>
                                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">Plan</p>
                                        <p className="text-xs font-bold text-black leading-tight">{fb.timeline}</p>
                                    </div>

                                    {fb.custom_budget && (
                                        <div className="col-span-1 sm:col-span-3 group/item p-5 bg-red-50 rounded-lg border border-red-100 transition-all hover:bg-white hover:shadow-lg">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-red-500 shadow-sm">
                                                    <Wallet className="w-4 h-4" />
                                                </div>
                                                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">Contre-Proposition Budget</p>
                                            </div>
                                            <p className="text-sm font-bold text-black italic leading-tight">"{fb.custom_budget}"</p>
                                        </div>
                                    )}
                                </div>

                                {/* Feature & Contact Section Condensed */}
                                <div className="grid lg:grid-cols-2 gap-6 pt-2">
                                    {/* Features Interests */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-4 bg-black rounded-full" />
                                            <h5 className="text-[10px] font-black uppercase tracking-[0.2em]">Attentes</h5>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {fb.interests?.map((interest: string, idx: number) => (
                                                <div
                                                    key={idx}
                                                    className="inline-flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-xl shadow-sm hover:scale-105 transition-transform"
                                                >
                                                    <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                                                    <span className="text-[9px] font-black uppercase tracking-widest">{interest}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Direct Contact Card Condensed */}
                                    <div className="relative p-6 bg-zinc-900 rounded-xl overflow-hidden text-white group/contact shadow-xl">
                                        <div className="relative z-10 space-y-4">
                                            <h5 className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">CONTACT</h5>
                                            <div className="grid gap-2">
                                                <a href={`tel:${fb.phone}`} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group/btn">
                                                    <div className="flex items-center gap-3">
                                                        <Phone className="w-4 h-4 text-zinc-400" />
                                                        <span className="text-xs font-bold tracking-tight">{fb.phone}</span>
                                                    </div>
                                                    <ArrowUpRight className="w-4 h-4 text-zinc-600 transition-transform group-hover/btn:text-white" />
                                                </a>
                                                {fb.email && (
                                                    <a href={`mailto:${fb.email}`} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group/btn">
                                                        <div className="flex items-center gap-3">
                                                            <Mail className="w-4 h-4 text-zinc-400" />
                                                            <span className="text-xs font-bold tracking-tight truncate max-w-[150px]">{fb.email}</span>
                                                        </div>
                                                        <ArrowUpRight className="w-4 h-4 text-zinc-600 transition-transform group-hover/btn:text-white" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
