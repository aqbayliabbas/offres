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
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function Solution() {
    return (
        <section className="py-32 bg-[#F5F5F7] text-[#1D1D1F] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textReveal}
                    className="text-center mb-32"
                >
                    <span className="text-[#0071e3] font-bold tracking-wider text-xs uppercase mb-4 block">La Solution</span>
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
                        Une Technologie qui<span className="text-[#0071e3]"> change tout.</span>
                    </h2>
                </motion.div>

                {/* Feature 1: Chatbot */}
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 mb-40">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textReveal}
                        className="flex-1 space-y-6"
                    >
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0071e3] shadow-sm">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Chatbot Intelligent</h3>
                        <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                            Imaginez un employé qui connaît parfaitement vos tarifs, ne dort jamais, et parle à des dizaines de clients simultanément.
                        </p>
                        <ul className="space-y-4 pt-2">
                            {[
                                "Disponible à 3h du matin",
                                "Conversation naturelle et humaine",
                                "Notification instantanée"
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-4 text-[#1D1D1F] font-medium text-sm">
                                    <div className="w-1.5 h-1.5 bg-[#0071e3] rounded-full" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex-1 w-full flex justify-center"
                    >
                        <ChatbotDemo />
                    </motion.div>
                </div>

                {/* Feature 2: Reservation Express */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24 mb-40">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textReveal}
                        className="flex-1 space-y-6"
                    >
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#AF52DE] shadow-sm">
                            <UserCheck className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Réservation Express</h3>
                        <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                            Une fois le compte créé, le client réserve en un clic. Plus de formulaires interminables.
                        </p>
                        <div className="space-y-6 pt-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                                    <span>Expérience Classique</span>
                                    <span>5 Minutes</span>
                                </div>
                                <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 2 }}
                                        viewport={{ once: true }}
                                        className="h-full bg-[#FF3B30]"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[11px] font-bold text-[#0071e3] uppercase tracking-wider">
                                    <span>Solution Kyrline</span>
                                    <span>30 Secondes</span>
                                </div>
                                <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "10%" }}
                                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                                        viewport={{ once: true }}
                                        className="h-full bg-[#0071e3]"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex-1 w-full bg-white rounded-[40px] aspect-square flex items-center justify-center p-10 md:p-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)]"
                    >
                        <div className="text-center">
                            <span className="text-8xl font-semibold text-[#1D1D1F] tracking-tighter">
                                <AnimatedCounter from={0} to={30} duration={0.8} />s
                            </span>
                            <p className="text-xs font-bold text-zinc-400 mt-2 uppercase tracking-widest">Rapidité Ultime</p>
                        </div>
                    </motion.div>
                </div>

                {/* Feature 3: Loyalty */}
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textReveal}
                        className="flex-1 space-y-6"
                    >
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#FF9500] shadow-sm">
                            <Star className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Fidélisation Automatique</h3>
                        <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                            Récompensez automatiquement vos clients les plus fidèles sans lever le petit doigt.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex-1 flex justify-center w-full"
                    >
                        <div className="w-full max-w-[400px] bg-gradient-to-br from-[#1D1D1F] to-[#2C2C2E] p-10 rounded-[40px] shadow-2xl relative overflow-hidden text-white group">

                            <div className="relative z-10">
                                <h4 className="text-lg font-semibold text-[#FF9500] mb-0.5 uppercase tracking-wide">Carte Club</h4>
                                <p className="text-xs text-zinc-400 font-medium mb-16 tracking-wider uppercase">Membre Privilège</p>

                                <div className="space-y-5">
                                    <div className="flex justify-between items-end">
                                        <span className="text-5xl font-semibold">450 <span className="text-sm font-medium text-zinc-500">Pts</span></span>
                                        <span className="text-[10px] font-bold text-zinc-500 uppercase">90% du Palier</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "90%" }}
                                            transition={{ duration: 2, delay: 0.5 }}
                                            viewport={{ once: true }}
                                            className="h-full bg-[#FF9500] shadow-[0_0_15px_rgba(255,149,0,0.5)]"
                                        />
                                    </div>
                                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500">+50 points avant offre</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
