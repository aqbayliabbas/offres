"use client";

import { motion, Variants, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import ChatbotDemo from "./ChatbotDemo";
import { UserCheck, Zap, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [display, setDisplay] = useState(from);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            const controls = animate(count, to, { duration });
            return controls.stop;
        }
    }, [inView, to, count, duration]);

    useEffect(() => {
        return rounded.on("change", (latest) => setDisplay(latest));
    }, [rounded]);

    return <span ref={ref}>{display}</span>;
};

const textReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }
    }
};

export default function Solution() {
    return (
        <section className="py-32 bg-black text-white overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textReveal}
                    className="text-center mb-32"
                >
                    <span className="text-blue-500 font-black tracking-[.25em] text-[10px] uppercase mb-6 block">La Solution</span>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1] mb-8">
                        Une Technologie qui<span className="text-blue-500 italic"> change tout !</span>
                    </h2>
                </motion.div>

                {/* Feature 1: Chatbot */}
                <div className="flex flex-col md:flex-row items-center gap-24 mb-48">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textReveal}
                        className="flex-1 space-y-8"
                    >
                        <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase">1. Chatbot Intelligent</h3>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
                            Imaginez un employé qui connaît parfaitement vos tarifs, ne dort jamais, et parle à des dizaines de clients simultanément.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Disponible à 3h du matin",
                                "Conversation naturelle et humaine",
                                "Notification instantanée lors d'une réservation"
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-4 text-zinc-300 font-bold text-sm">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full flex justify-center"
                    >
                        <ChatbotDemo />
                    </motion.div>
                </div>

                {/* Feature 2: Reservation Express */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-24 mb-48">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textReveal}
                        className="flex-1 space-y-8"
                    >
                        <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-500 border border-purple-500/20">
                            <UserCheck className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase">2. Réservation Express</h3>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
                            Une fois le compte créé, le client réserve en un clic. Plus de formulaires interminables.
                        </p>
                        <div className="space-y-8 pt-4">
                            <div className="space-y-3">
                                <div className="flex justify-between text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                                    <span>Expérience Classique</span>
                                    <span>5 Minutes</span>
                                </div>
                                <div className="h-2 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 2 }}
                                        viewport={{ once: true }}
                                        className="h-full bg-red-600"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-[10px] font-black text-blue-500 uppercase tracking-widest">
                                    <span>Solution Kyrline</span>
                                    <span>30 Secondes</span>
                                </div>
                                <div className="h-2 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "10%" }}
                                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                                        viewport={{ once: true }}
                                        className="h-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full bg-zinc-900 border border-zinc-800 rounded-[3rem] aspect-square flex items-center justify-center p-10 md:p-20 shadow-inner"
                    >
                        <div className="text-center">
                            <span className="text-8xl font-black text-white tracking-tighter">
                                <AnimatedCounter from={0} to={30} duration={0.8} />s
                            </span>
                            <p className="text-xs font-black text-zinc-500 mt-4 uppercase tracking-[0.4em]">Rapidité Ultime</p>
                        </div>
                    </motion.div>
                </div>

                {/* Feature 3: Loyalty */}
                <div className="flex flex-col md:flex-row items-center gap-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textReveal}
                        className="flex-1 space-y-8"
                    >
                        <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center text-yellow-500 border border-yellow-500/20">
                            <Star className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase">3. Fidélisation par Points</h3>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
                            Récompensez automatiquement vos clients les plus fidèles sans lever le petit doigt.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 flex justify-center w-full"
                    >
                        <div className="w-full max-w-[400px] bg-gradient-to-br from-zinc-800 to-zinc-900 p-10 rounded-[2.5rem] border border-zinc-700 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:scale-125 duration-700">
                                <Star className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-lg font-black text-yellow-500 mb-1 leading-none uppercase">Carte Club Kyrline</h4>
                                <p className="text-xs text-zinc-400 font-bold mb-16 tracking-widest uppercase">Membre Privilège</p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="text-4xl font-black text-white">450 <span className="text-sm font-medium text-zinc-500">Pts</span></span>
                                        <span className="text-xs font-bold text-zinc-500 uppercase">90% du Palier</span>
                                    </div>
                                    <div className="h-1.5 bg-zinc-950 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "90%" }}
                                            transition={{ duration: 2, delay: 0.5 }}
                                            viewport={{ once: true }}
                                            className="h-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]"
                                        />
                                    </div>
                                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight">+50 points avant votre nuit offerte</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
