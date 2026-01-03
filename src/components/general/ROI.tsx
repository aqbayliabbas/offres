"use client";

import { motion, Variants } from "framer-motion";
import { TrendingDown, TrendingUp, DollarSign } from "lucide-react";

export default function ROI() {
    return (
        <section className="py-32 bg-[#F5F5F7] text-[#1D1D1F] relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
                    className="text-center mb-24"
                >
                    <span className="text-zinc-400 font-bold tracking-wider text-xs uppercase mb-4 block">Rentabilité</span>
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                        Un investissement <br /> <span className="text-[#d3af37]">autofinancé.</span>
                    </h2>
                    <p className="text-zinc-500 font-medium text-xl max-w-2xl mx-auto leading-relaxed">
                        Le système se paye tout seul en quelques mois grâce à la récupération de votre manque à gagner actuel.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Loss */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="p-12 rounded-[40px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-black/5"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-full bg-[#FF3B30]/10 text-[#FF3B30] flex items-center justify-center">
                                <TrendingDown className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1D1D1F]">Statut Actuel</h3>
                                <p className="text-xs font-bold text-zinc-400 tracking-widest uppercase">Perte</p>
                            </div>
                        </div>

                        <ul className="space-y-8 mb-12">
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-[#FF3B30] rounded-full mt-2 shrink-0" />
                                <p className="text-zinc-500 font-medium text-lg">10 appels manqués = <span className="text-[#1D1D1F] font-semibold">1,080,000 DA</span> de perte estimée par an.</p>
                            </li>
                            <li className="flex gap-4 items-start pb-8 border-b border-zinc-100">
                                <div className="w-2 h-2 bg-[#FF3B30] rounded-full mt-2 shrink-0" />
                                <p className="text-zinc-500 font-medium text-lg">40% de prospects ne finalisent jamais sans réponse immédiate.</p>
                            </li>
                        </ul>

                        <div className="pt-2">
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Manque à gagner mensuel</p>
                            <p className="text-5xl font-semibold text-[#1D1D1F] tracking-tight">90,000 <span className="text-lg text-zinc-500">DA</span></p>
                        </div>
                    </motion.div>

                    {/* Gain */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="p-12 rounded-[40px] bg-white shadow-[0_40px_80px_-20px_rgba(211,175,55,0.15)] border border-[#d3af37]/20 relative overflow-hidden"
                    >
                        <div className="absolute inset-x-0 bottom-0 top-0 bg-[#d3af37]/5 -z-10" />
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-full bg-[#d3af37] text-white flex items-center justify-center shadow-lg shadow-[#d3af37]/20">
                                <TrendingUp className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#1D1D1F]">Avec Système</h3>
                                <p className="text-xs font-bold text-[#d3af37] tracking-widest uppercase">Profit</p>
                            </div>
                        </div>

                        <ul className="space-y-8 mb-12">
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-[#d3af37] rounded-full mt-2 shrink-0" />
                                <p className="text-zinc-600 font-medium text-lg">Réponses instantanées <span className="text-[#1D1D1F] font-semibold">24h/24</span> : Aucun client ne s'échappe.</p>
                            </li>
                            <li className="flex gap-4 items-start pb-8 border-b border-[#d3af37]/10">
                                <div className="w-2 h-2 bg-[#d3af37] rounded-full mt-2 shrink-0" />
                                <p className="text-zinc-600 font-medium text-lg">Conversion client multipliée par <span className="text-[#1D1D1F] font-semibold">x2</span> dès le 1er mois.</p>
                            </li>
                        </ul>

                        <div className="pt-2">
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Période de Remboursement</p>
                            <p className="text-5xl font-semibold text-[#d3af37] tracking-tight">4 - 5 MOIS</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
