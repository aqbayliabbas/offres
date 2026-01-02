"use client";

import { motion, Variants } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        }
    };

    return (
        <section className="py-24 sm:py-36 md:py-48 bg-white text-[#1D1D1F] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 sm:mb-24 md:mb-32"
                >
                    <span className="text-zinc-400 font-bold tracking-widest text-xs uppercase mb-4 sm:mb-6 block">Contact</span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-4 sm:mb-8 leading-[0.95] px-2 sm:px-0">
                        Prêt pour le <br className="sm:hidden" /> <span className="text-[#0071e3]">succès ?</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col items-center">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-zinc-400 mb-8 sm:mb-12">NOTRE ÉQUIPE</h3>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl"
                    >
                        {/* Membre 1: Louenes Abbas */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="p-6 sm:p-8 md:p-12 bg-[#F5F5F7] rounded-[24px] sm:rounded-[40px] border border-black/5 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="flex flex-col gap-6 sm:gap-10">
                                <div className="space-y-1">
                                    <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#1D1D1F]">Louenes Abbas</h4>
                                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Fondateur de Wingo</p>
                                </div>

                                <div className="space-y-4 sm:space-y-6">
                                    <a href="tel:+213799739969" className="flex items-center justify-between group py-2 border-b border-zinc-200">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#1D1D1F]">
                                                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                            </div>
                                            <span className="text-base sm:text-lg font-medium text-zinc-600 group-hover:text-[#0071e3] transition-colors">+213 799 739 969</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300 group-hover:text-[#0071e3] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                    </a>

                                    <a href="mailto:louenesabbas@win-go.space" className="flex items-center justify-between group py-2 border-b border-zinc-200">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#1D1D1F]">
                                                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                            </div>
                                            <span className="text-sm sm:text-base md:text-lg font-medium text-zinc-600 group-hover:text-[#0071e3] transition-colors truncate max-w-[160px] sm:max-w-[200px] md:max-w-none">louenesabbas@win-go.space</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300 group-hover:text-[#0071e3] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Membre 2: Amir BELKAHLA */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="p-6 sm:p-8 md:p-12 bg-[#F5F5F7] rounded-[24px] sm:rounded-[40px] border border-black/5 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="flex flex-col gap-6 sm:gap-10">
                                <div className="space-y-1">
                                    <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#1D1D1F]">Amir BELKAHLA</h4>
                                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Fondateur de Auren</p>
                                </div>

                                <div className="space-y-4 sm:space-y-6">
                                    <a href="tel:+213553509382" className="flex items-center justify-between group py-2 border-b border-zinc-200">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#1D1D1F]">
                                                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                            </div>
                                            <span className="text-base sm:text-lg font-medium text-zinc-600 group-hover:text-[#0071e3] transition-colors">+213 553 50 93 82</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300 group-hover:text-[#0071e3] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                    </a>

                                    <a href="mailto:amir.belkahla@auren.ai" className="flex items-center justify-between group py-2 border-b border-zinc-200">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#1D1D1F]">
                                                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                            </div>
                                            <span className="text-sm sm:text-base md:text-lg font-medium text-zinc-600 group-hover:text-[#0071e3] transition-colors truncate max-w-[160px] sm:max-w-[200px] md:max-w-none">amir.belkahla59016@gmail.com</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300 group-hover:text-[#0071e3] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
