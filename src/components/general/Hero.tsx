"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } // Apple-like ease
        },
    };

    return (
        <section className="relative min-h-[80vh] sm:min-h-[90vh] flex flex-col items-center justify-between overflow-hidden bg-[#F5F5F7] text-[#1D1D1F] pt-20 sm:pt-32">
            <motion.div
                className="z-10 text-center max-w-4xl mx-auto space-y-5 sm:space-y-8 px-4 sm:px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-black/5 shadow-sm text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mb-4 sm:mb-6 text-zinc-500">
                        Offre Exclusive
                    </span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-[1.05] bg-gradient-to-b from-black to-zinc-500 bg-clip-text text-transparent pb-2">
                        Le Futur de <br className="hidden sm:block" /><span className="sm:hidden"> </span>l'Hôtellerie.
                    </h1>
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-0"
                >
                    Récupérez 40% de vos clients perdus avec une solution de réservation autonome, intelligente et ultra-rapide.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2 sm:pt-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="h-14 px-8 rounded-full bg-[#0071e3] text-white font-medium text-lg shadow-lg shadow-blue-500/20 hover:bg-[#0077ED] transition-all flex items-center gap-2 cursor-pointer"
                    >
                        Découvrir l'offre
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                    <div className="flex flex-col items-center sm:items-start text-xs font-semibold text-zinc-500">
                        <span>Valable jusqu'au</span>
                        <span className="text-zinc-800">31 Janvier 2026</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Image at the bottom */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-6xl h-[30vh] sm:h-[40vh] md:h-[600px] mt-8 sm:mt-16 relative z-0"
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/Background.png"
                        alt="App Screen"
                        fill
                        className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F7] via-transparent to-transparent opacity-50" />
                </div>
            </motion.div>
        </section>
    );
}
