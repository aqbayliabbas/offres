"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    Building2,
    Calendar,
    Star,
    Wifi,
    Utensils,
    Car,
    Waves,
    Shield,
    ArrowRight,
    MapPin,
    ArrowUpRight,
    Trash2
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const SERVICE_ICONS: Record<string, any> = {
    'Wifi Gratuit': Wifi,
    'Restaurant': Utensils,
    'Parking': Car,
    'Piscine': Waves,
    'Service de sécurité': Shield,
}

export default function HotelCard({ hotel, isOpen, onToggle, onDelete }: { hotel: any, isOpen: boolean, onToggle: () => void, onDelete: () => void }) {
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
                    <div className="relative">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-black text-white scale-110 rotate-[10deg]' : 'bg-[#F5F5F7] text-zinc-400 group-hover:bg-[#0071e3]/10 group-hover:text-[#0071e3]'}`}>
                            <Building2 className={`w-7 h-7 transition-transform duration-500 ${isOpen ? 'scale-110' : ''}`} />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h4 className="text-xl font-bold tracking-tight text-black leading-none">
                                {hotel.hotel_name}
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
                                <div className="flex gap-0.5">
                                    {Array.from({ length: hotel.stars_count }).map((_, i) => (
                                        <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-4 text-zinc-400">
                            <div className="flex items-center gap-1.5 font-medium text-xs">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{format(new Date(hotel.created_at), 'dd MMMM yyyy', { locale: fr })}</span>
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-100" />
                            <div className="flex items-center gap-1.5 font-medium text-xs uppercase tracking-widest text-[9px] font-black">
                                {hotel.services?.length || 0} Services
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 border border-red-100 z-20"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>

                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-black text-white rotate-180' : 'bg-white border border-black/5 text-zinc-400 shadow-sm group-hover:shadow-md'}`}>
                        <ChevronDown className="w-5 h-5" />
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

                            <div className="grid gap-8">
                                {/* Services Grid */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-4 bg-[#0071e3] rounded-full" />
                                        <h5 className="text-[10px] font-black uppercase tracking-[0.2em]">Équipements & Services</h5>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                        {hotel.services?.map((s: string) => {
                                            const Icon = SERVICE_ICONS[s] || ArrowRight;
                                            return (
                                                <div key={s} className="px-4 py-3 bg-[#F5F5F7] rounded-lg text-[10px] font-bold border border-black/5 flex items-center gap-3 transition-colors hover:bg-[#0071e3]/5 hover:border-[#0071e3]/10 group/item">
                                                    <Icon className="w-4 h-4 text-[#0071e3] transition-transform group-hover/item:scale-110" />
                                                    <span className="text-zinc-700 truncate">{s}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Presentation Text */}
                                {hotel.description && (
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-4 bg-black rounded-full" />
                                            <h5 className="text-[10px] font-black uppercase tracking-[0.2em]">À propos de l'établissement</h5>
                                        </div>
                                        <div className="relative p-6 bg-[#F5F5F7] rounded-xl border border-black/5 italic text-sm text-zinc-600 leading-relaxed">
                                            "{hotel.description}"
                                            <div className="absolute top-4 right-6 opacity-10">
                                                <Star className="w-10 h-10 text-black" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Bottom Meta Section */}
                                <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Classement</span>
                                            <div className="flex gap-0.5 mt-1">
                                                {Array.from({ length: hotel.stars_count }).map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="w-px h-8 bg-black/5" />
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Référence</span>
                                            <span className="text-[10px] font-bold text-black mt-1">HTL-{hotel.id.slice(0, 8).toUpperCase()}</span>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block mb-1">Propriétaire</span>
                                        <span className="text-xs font-bold text-black">{hotel.user_id ? "Client Enregistré" : "Prospect Anonyme"}</span>
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
