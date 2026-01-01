'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Star,
    Building2,
    Eye,
    X,
    Wifi,
    Utensils,
    Car,
    Waves,
    Shield,
    ArrowRight,
    Info
} from 'lucide-react'

const SERVICE_ICONS: Record<string, any> = {
    'Wifi Gratuit': Wifi,
    'Restaurant': Utensils,
    'Parking': Car,
    'Piscine': Waves,
    'Service de sécurité': Shield,
}

export default function HotelCard({ hotel }: { hotel: any }) {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <>
            <div className="bg-white rounded-[32px] p-6 border border-black/5 hover:border-[#0071e3]/30 transition-all group flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#F5F5F7] rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-[#0071e3] transition-colors">
                        <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold tracking-tight leading-tight">{hotel.hotel_name}</h4>
                        <div className="flex gap-1 mt-1">
                            {Array.from({ length: hotel.stars_count }).map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setShowDetails(true)}
                    className="p-3 bg-[#F5F5F7] hover:bg-[#0071e3] hover:text-white rounded-2xl transition-all flex items-center gap-2 group/btn"
                >
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 hidden md:block">Détails</span>
                    <Eye className="w-5 h-5" />
                </button>
            </div>

            {/* Details Modal */}
            <AnimatePresence>
                {showDetails && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowDetails(false)}
                            className="absolute inset-0 bg-white/60 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-[40px] border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden"
                        >
                            <div className="p-8 md:p-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0071e3]">Fiche Établissement</span>
                                        <h3 className="text-3xl font-semibold tracking-tighter">{hotel.hotel_name}</h3>
                                        <div className="flex gap-1">
                                            {Array.from({ length: hotel.stars_count }).map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setShowDetails(false)}
                                        className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6 text-zinc-400" />
                                    </button>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <Info className="w-4 h-4 text-[#0071e3]" />
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#1D1D1F]">Services Proposés</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {hotel.services?.map((s: string) => {
                                                const Icon = SERVICE_ICONS[s] || ArrowRight;
                                                return (
                                                    <span key={s} className="px-4 py-2.5 bg-[#F5F5F7] rounded-2xl text-xs font-bold border border-black/5 flex items-center gap-3">
                                                        <Icon className="w-4 h-4 text-[#0071e3]" />
                                                        {s}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    {hotel.description && (
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <Info className="w-4 h-4 text-[#0071e3]" />
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1D1D1F]">Description / Message</p>
                                            </div>
                                            <p className="text-sm text-zinc-600 leading-relaxed bg-[#F5F5F7] p-4 rounded-2xl border border-black/5">
                                                {hotel.description}
                                            </p>
                                        </div>
                                    )}

                                    <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Identifiant Propriétaire</p>
                                            <p className="text-xs font-medium text-zinc-600 font-mono">{hotel.user_id || 'Anonyme'}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Date Inscription</p>
                                            <p className="text-xs font-medium text-zinc-600">{new Date(hotel.created_at).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setShowDetails(false)}
                                    className="w-full mt-10 py-5 bg-[#1D1D1F] text-white rounded-2xl font-bold text-sm hover:bg-black transition-all active:scale-[0.98]"
                                >
                                    Fermer la vue
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
