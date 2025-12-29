"use client";

import { motion, Variants } from "framer-motion";
import { TrendingDown, TrendingUp, DollarSign } from "lucide-react";

const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
};

export default function ROI() {
    return (
        <section className="py-32 bg-black text-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-zinc-500 font-black tracking-[.25em] text-[10px] uppercase mb-6 block">Rentabilité</span>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1] mb-8">
                        Un investissement <br /> <span className="text-blue-500">autofinancé.</span>
                    </h2>
                    <p className="text-zinc-400 font-medium text-xl max-w-2xl mx-auto leading-relaxed">
                        Le système se paye tout seul en quelques mois grâce à la récupération de votre manque à gagner actuel.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Loss */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-[2.5rem] bg-zinc-950 border border-zinc-900 group"
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center">
                                <TrendingDown className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">Statut Actuel</h3>
                                <p className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">Perte de Clients</p>
                            </div>
                        </div>

                        <ul className="space-y-8 mb-12">
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                <p className="text-zinc-400 font-bold text-lg">10 appels manqués = <span className="text-white">1,080,000 DA</span> de perte estimée par an.</p>
                            </li>
                            <li className="flex gap-4 items-start pb-8 border-b border-zinc-900">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                <p className="text-zinc-400 font-bold text-lg">40% de prospects ne finalisent jamais sans réponse immédiate.</p>
                            </li>
                        </ul>

                        <div className="pt-4">
                            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-4">Manque à gagner mensuel</p>
                            <p className="text-5xl font-black text-zinc-300 tracking-tighter">90,000 <span className="text-lg text-zinc-600">DA</span></p>
                        </div>
                    </motion.div>

                    {/* Gain */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-[2.5rem] bg-zinc-900 border border-white/5 relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute inset-x-0 bottom-0 top-0 bg-blue-600/5 -z-10" />
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-500 flex items-center justify-center">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">Avec Système</h3>
                                <p className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">Profit Récupéré</p>
                            </div>
                        </div>

                        <ul className="space-y-8 mb-12">
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                                <p className="text-zinc-400 font-bold text-lg">Réponses instantanées <span className="text-white">24h/24</span> : Aucun client ne s'échappe.</p>
                            </li>
                            <li className="flex gap-4 items-start pb-8 border-b border-zinc-950/20">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                                <p className="text-zinc-400 font-bold text-lg">Conversion client multipliée par <span className="text-white">x2</span> dès le 1er mois.</p>
                            </li>
                        </ul>

                        <div className="pt-4">
                            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-4">Période de Remboursement</p>
                            <p className="text-5xl font-black text-white tracking-tighter italic">4 - 5 MOIS</p>
                            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                                <DollarSign className="w-3 h-3 text-blue-500" />
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Profit Pur Ensuite</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
