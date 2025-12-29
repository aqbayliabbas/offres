"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Plus } from "lucide-react";

const inclusions = [
    { text: "Chatbot Intelligent 24/7", icon: Check },
    { text: "Gestion des Comptes Clients", icon: Check },
    { text: "Réservation Express (30s)", icon: Check },
    { text: "Système de Fidélité Automatique", icon: Check },
    { text: "Panel de Gestion Complet", icon: Check },
    { text: "Génération de Factures PDF", icon: Check },
    { text: "Tableau de Bord Statistique", icon: Check },
    { text: "Génération de Contrats", icon: Check },
    { text: "Formation sur Site incluse", icon: Check },
    { text: "Système 100% Modifiable", icon: Plus },
];

export default function Offer() {
    return (
        <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -z-10 blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-800 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)]"
                >
                    <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                        <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center">
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full">
                                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">Offre Partenaire Pilote</span>
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">Exclusivité <br /> Hôtel Kyrline.</h2>
                            <p className="text-zinc-500 font-medium text-lg mb-12 max-w-sm">
                                Bénéficiez du statut de pionnier et de notre tarif de lancement exceptionnel.
                            </p>

                            <div className="flex flex-col gap-2 mb-12">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl md:text-7xl font-black tracking-tighter">400,000</span>
                                    <span className="text-xl font-bold text-zinc-600">DA</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-bold text-red-500 line-through">650,000 DA</span>
                                    <span className="text-xs font-black text-green-500 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded tracking-widest uppercase">Économisez 250,000 DA</span>
                                </div>
                            </div>
                            <div className="mt-12 p-6 rounded-3xl bg-red-500/5 border border-red-500/20 flex flex-col items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500">Offre Limitée dans le Temps</span>
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-black text-white">31</span>
                                        <span className="text-[8px] font-bold text-zinc-500 uppercase">Janvier</span>
                                    </div>
                                    <div className="text-2xl font-black text-zinc-800">/</div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-black text-white">2026</span>
                                        <span className="text-[8px] font-bold text-zinc-500 uppercase">Année</span>
                                    </div>
                                </div>
                                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest text-center">
                                    Passée cette date, le tarif standard de 650,000 DA sera appliqué.
                                </p>
                            </div>
                        </div>

                        <div className="p-12 md:p-16 bg-black/40">
                            <h3 className="text-xs font-black uppercase text-zinc-500 tracking-[0.3em] mb-12">Ce qui est inclus :</h3>
                            <ul className="grid grid-cols-1 gap-6">
                                {inclusions.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-4 text-sm font-bold text-zinc-300"
                                    >
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${item.icon === Plus
                                                ? "bg-green-500/20 border-green-500/40 shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                                                : "bg-blue-500/20 border-blue-500/40"
                                            }`}>
                                            <item.icon className={
                                                item.icon === Plus
                                                    ? "w-4 h-4 text-green-500"
                                                    : "w-3 h-3 text-blue-500"
                                            } />
                                        </div>
                                        {item.text}
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="mt-16 pt-10 border-t border-zinc-800 space-y-6">
                                <div className="p-8 rounded-[2rem] bg-zinc-950/80 border border-zinc-800 shadow-2xl space-y-6 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] -z-10 group-hover:bg-blue-500/10 transition-colors" />

                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="h-[1px] w-4 bg-blue-500" />
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500/80">Frais Supplémentaires</h4>
                                    </div>

                                    <div className="space-y-5">
                                        <div className="flex justify-between items-center group/item">
                                            <div className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 ring-4 ring-blue-500/10" />
                                                <span className="text-xs font-bold text-zinc-400 uppercase tracking-tight group-hover/item:text-zinc-200 transition-colors">Maintenance & Suivi</span>
                                            </div>
                                            <span className="text-sm font-black text-white">~5,000 DA<span className="text-[10px] text-zinc-600 font-bold ml-1">/INTERVENTIONS</span></span>
                                        </div>

                                        <div className="flex justify-between items-center group/item">
                                            <div className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 ring-4 ring-purple-500/10" />
                                                <span className="text-xs font-bold text-zinc-400 uppercase tracking-tight group-hover/item:text-zinc-200 transition-colors">Hébergement Cloud</span>
                                            </div>
                                            <span className="text-sm font-black text-white">70,000 DA<span className="text-[10px] text-zinc-600 font-bold ml-1">/2 ANS</span></span>
                                        </div>

                                        <div className="flex justify-between items-start group/item">
                                            <div className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 ring-4 ring-amber-500/10 mt-1.5" />
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-tight group-hover/item:text-zinc-200 transition-colors">Services Google AI</span>
                                                    <span className="text-[9px] text-zinc-500 font-medium">Frais API (selon volume)</span>
                                                </div>
                                            </div>
                                            <span className="text-sm font-black text-white">~4,000 DA<span className="text-[10px] text-zinc-600 font-bold ml-1">/MOIS</span></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 px-2">


                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
