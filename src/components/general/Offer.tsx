"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Plus } from "lucide-react";

const inclusions = [
    { text: "Chatbot Intelligent 24/7", icon: Check },
    { text: "Gestion des Comptes Clients", icon: Check },
    { text: "Réservation Express (30s)", icon: Check },
    { text: "Espaces partenaire, superviseur et réceptioniste", icon: Check },
    { text: "Panel de Gestion Complet", icon: Check },
    { text: "Génération Factures & Contrats", icon: Check },
    { text: "Tableau de Bord Statistique", icon: Check },
    { text: "Formation sur Site incluse", icon: Check },
    { text: "HOSTRA 100% Modifiable", icon: Plus },
];

export default function Offer() {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-[#F5F5F7] text-[#1D1D1F] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[24px] sm:rounded-[48px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-black/5"
                >
                    <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                        <div className="p-6 sm:p-10 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-100 flex flex-col justify-center relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-[#d3af37]/5 -z-10" />

                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#d3af37]/10 border border-[#d3af37]/20 rounded-full">
                                    <ShieldCheck className="w-4 h-4 text-[#d3af37]" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#d3af37]">Offre Partenaire Pilote</span>
                                </div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 tracking-tight text-[#1D1D1F]">Exclusivité <br className="hidden sm:block" /><span className="sm:hidden"> </span>Partenaires.</h2>
                            <p className="text-zinc-500 font-medium text-base sm:text-lg mb-8 sm:mb-12 max-w-sm leading-relaxed">
                                Bénéficiez du statut de pionnier et de notre tarif de lancement exceptionnel.
                            </p>

                            <div className="flex flex-col gap-2 mb-8 sm:mb-12">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#1D1D1F]">400,000</span>
                                    <span className="text-lg sm:text-xl font-medium text-zinc-500">DA</span>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                                    <span className="text-lg font-medium text-[#FF3B30] line-through opacity-60">650,000 DA</span>
                                    <span className="text-[10px] font-bold text-[#34C759] bg-[#34C759]/10 border border-[#34C759]/20 px-3 py-1 rounded-full tracking-wider uppercase">Économisez 250,000 DA</span>
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-red-100 shadow-lg shadow-red-500/5 flex flex-col items-center gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF3B30]">Offre Limitée</span>
                                <div className="flex items-center gap-3 text-[#1D1D1F]">
                                    <span className="text-xl sm:text-2xl font-bold">31 Janvier 2026</span>
                                </div>
                                <p className="text-[10px] text-zinc-400 font-medium text-center">
                                    Tarif standard applicable ensuite.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 sm:p-10 md:p-12 lg:p-16 bg-white">
                            <h3 className="text-[10px] sm:text-xs font-bold uppercase text-zinc-400 tracking-widest mb-6 sm:mb-10">Ce qui est inclus</h3>
                            <ul className="grid grid-cols-1 gap-3 sm:gap-5 mb-10 sm:mb-16">
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
                                            : "bg-[#d3af37] text-white"
                                            }`}>
                                            <item.icon className="w-3.5 h-3.5" />
                                        </div>
                                        {item.text}
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="pt-6 sm:pt-10 border-t border-zinc-100">
                                <div className="p-4 sm:p-6 md:p-8 rounded-[20px] sm:rounded-[32px] bg-[#F5F5F7] border border-zinc-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-4 w-[3px] bg-[#d3af37] rounded-full" />
                                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#d3af37]">Frais Optionnels</h4>
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
