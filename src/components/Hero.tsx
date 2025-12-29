"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hotel_facade_luxury_4_1767018874326.png"
                    alt="Luxury Hotel Exterior"
                    className="w-full h-full object-cover opacity-40 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
                <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay" />
            </div>

            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                className="z-10 text-center max-w-4xl mx-auto space-y-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-[.25em] uppercase mb-8 text-zinc-400">
                        Hôtel Kyrline • Offre Exclusive
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                        Le Futur de <br /> l'Hôtellerie.
                    </h1>
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto font-medium"
                >
                    Récupérez 40% de vos clients perdus avec une solution de réservation autonome, intelligente et ultra-rapide.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="h-16 px-10 rounded-full bg-white text-black font-black text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-3 cursor-pointer"
                    >
                        Découvrir l'offre
                        <ArrowRight className="w-6 h-6" />
                    </motion.button>
                    <div className="flex flex-col items-center sm:items-start text-xs font-bold uppercase tracking-widest text-zinc-500">
                        <span>Valable jusqu'au</span>
                        <span className="text-zinc-300">31 Janvier 2026</span>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-800 to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-4 bg-white/50"
                    />
                </div>
            </motion.div>
        </section>
    );
}
