"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Plus } from "lucide-react";

const inclusions = [
    { text: "Chatbot Intelligent 24/7", icon: Check },
    { text: "Gestion des Comptes Clients", icon: Check },
    { text: "Réservation Express (30s)", icon: Check },
    { text: "Système de Fidélité", icon: Check },
    { text: "Panel de Gestion Complet", icon: Check },
    { text: "Génération Factures & Contrats", icon: Check },
    { text: "Tableau de Bord Statistique", icon: Check },
    { text: "Formation sur Site incluse", icon: Check },
    { text: "Système 100% Modifiable", icon: Plus },
];

export default function Offer() {
    return (
        <section className="py-32 bg-[#F5F5F7] text-[#1D1D1F] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[48px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-black/5"
                >
                    <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                        <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-zinc-100 flex flex-col justify-center relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-blue-50/50 -z-10" />

                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100/50 border border-blue-200 rounded-full">
                                    <ShieldCheck className="w-4 h-4 text-[#0071e3]" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0071e3]">Offre Partenaire Pilote</span>
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-[#1D1D1F]">Exclusivité <br /> Hôtel Kyrline.</h2>
                            <p className="text-zinc-500 font-medium text-lg mb-12 max-w-sm leading-relaxed">
                                Bénéficiez du statut de pionnier et de notre tarif de lancement exceptionnel.
                            </p>

                            <div className="flex flex-col gap-2 mb-12">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl md:text-7xl font-semibold tracking-tighter text-[#1D1D1F]">400,000</span>
                                    <span className="text-xl font-medium text-zinc-500">DA</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-medium text-[#FF3B30] line-through opacity-60">650,000 DA</span>
                                    <span className="text-[10px] font-bold text-[#34C759] bg-[#34C759]/10 border border-[#34C759]/20 px-3 py-1 rounded-full tracking-wider uppercase">Économisez 250,000 DA</span>
                                </div>
                            </div>

                            <div className="mt-8 p-6 rounded-3xl bg-white border border-red-100 shadow-lg shadow-red-500/5 flex flex-col items-center gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF3B30]">Offre Limitée</span>
                                <div className="flex items-center gap-3 text-[#1D1D1F]">
                                    <span className="text-2xl font-bold">31 Janvier 2026</span>
                                </div>
                                <p className="text-[10px] text-zinc-400 font-medium text-center">
                                    Tarif standard applicable ensuite.
                                </p>
                            </div>
                        </div>

                        <div className="p-12 md:p-16 bg-white">
                            <h3 className="text-xs font-bold uppercase text-zinc-400 tracking-widest mb-10">Ce qui est inclus</h3>
                            <ul className="grid grid-cols-1 gap-5 mb-16">
                                {inclusions.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-4 text-[15px] font-medium text-zinc-600"
                                    >
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${item.icon === Plus
                                            ? "bg-[#34C759] text-white"
                                            : "bg-[#0071e3] text-white"
                                            }`}>
                                            <item.icon className="w-3.5 h-3.5" />
                                        </div>
                                        {item.text}
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="pt-10 border-t border-zinc-100">
                                <div className="p-8 rounded-[32px] bg-[#F5F5F7] border border-zinc-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-4 w-[3px] bg-[#0071e3] rounded-full" />
                                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#0071e3]">Frais Optionnels</h4>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center group cursor-default">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-[#1D1D1F] mb-0.5">Maintenance & Suivi</span>
                                                <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wide">Sur demande</span>
                                            </div>
                                            <span className="text-sm font-bold text-[#1D1D1F]">~5,000 DA</span>
                                        </div>

                                        <div className="w-full h-[1px] bg-zinc-200/50" />

                                        <div className="flex justify-between items-center group">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-[#1D1D1F] mb-0.5">Hébergement Cloud</span>
                                                <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wide">Renouvellement 2 ans</span>
                                            </div>
                                            <span className="text-sm font-bold text-[#1D1D1F]">70,000 DA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
