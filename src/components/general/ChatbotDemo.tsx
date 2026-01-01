"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const conversation = [
    { role: "client", text: "Bonjour, vous avez des chambres ce weekend ?" },
    { role: "bot", text: "Bonsoir. Oui, nous avons de la disponibilité. Pour combien de personnes ?" },
    { role: "client", text: "2 personnes, vendredi au dimanche." },
    { role: "bot", text: "Parfait. Chambre double à 9,500 DA la nuit. Avec ou sans petit-déjeuner ?" },
    { role: "client", text: "Avec petit-déjeuner. Et j'aimerais un gâteau d'anniversaire pour ma femme." },
    { role: "bot", text: "Je note la demande. Votre réservation est enregistrée. Notre équipe vous contactera." },
];

export default function ChatbotDemo() {
    const [visibleMessages, setVisibleMessages] = useState<number>(0);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const containerRef = useRef(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleMessages, isTyping]);

    useEffect(() => {
        if (!isInView) return;

        if (visibleMessages < conversation.length) {
            if (conversation[visibleMessages].role === "bot") {
                const typingTimer = setTimeout(() => {
                    setIsTyping(true);
                    const appearTimer = setTimeout(() => {
                        setIsTyping(false);
                        setVisibleMessages((prev) => prev + 1);
                    }, 1800);
                    return () => clearTimeout(appearTimer);
                }, 600);
                return () => clearTimeout(typingTimer);
            } else {
                const timer = setTimeout(() => {
                    setVisibleMessages((prev) => prev + 1);
                }, 1200);
                return () => clearTimeout(timer);
            }
        } else {
            const timer = setTimeout(() => setVisibleMessages(0), 10000);
            return () => clearTimeout(timer);
        }
    }, [visibleMessages, isInView]);

    const springConfig = {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.8
    } as const;

    return (
        <div ref={containerRef} className="w-full max-w-[380px] mx-auto bg-white rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-black/5 overflow-hidden">
            {/* Header style Apple */}
            <div className="bg-[#F5F5F7]/80 backdrop-blur-md p-5 flex items-center gap-4 border-b border-black/5">
                <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0071e3] to-[#0077ED] flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <span className="text-white font-heavy text-xs tracking-tighter">AI</span>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#34C759] border-4 border-[#F5F5F7] rounded-full" />
                </div>
                <div>
                    <h3 className="text-[#1D1D1F] font-bold text-[13px] tracking-tight">Assistant Hôtel</h3>
                    <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-widest mt-0.5">Actif maintenant</p>
                </div>
            </div>

            {/* Zone de messages */}
            <div
                ref={scrollRef}
                className="p-6 space-y-4 h-[420px] overflow-y-auto bg-white flex flex-col scroll-smooth scrollbar-hide"
            >
                <AnimatePresence mode="popLayout">
                    {conversation.slice(0, visibleMessages).map((msg, idx) => (
                        <motion.div
                            key={`${idx}-${msg.text}`}
                            layout
                            initial={{ opacity: 0, scale: 0.8, y: 20, originX: msg.role === "client" ? 1 : 0 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={springConfig}
                            className={`flex ${msg.role === "client" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[85%] px-5 py-3 rounded-[1.2rem] text-[15px] leading-relaxed shadow-sm ${msg.role === "client"
                                    ? "bg-[#0071e3] text-white rounded-br-sm"
                                    : "bg-[#E9E9EB] text-[#1D1D1F] rounded-bl-sm"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isTyping && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.8, y: 10, originX: 0 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={springConfig}
                        className="flex justify-start pt-2"
                    >
                        <div className="bg-[#E9E9EB] px-5 py-4 rounded-[1.5rem] rounded-bl-none flex items-center gap-1.5">
                            {[0, 1, 2].map((i) => (
                                <motion.span
                                    key={i}
                                    animate={{
                                        opacity: [0.4, 1, 0.4],
                                        y: [0, -4, 0]
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        repeat: Infinity,
                                        delay: i * 0.15,
                                        ease: "easeInOut"
                                    }}
                                    className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Input style Apple */}
            <div className="p-5 bg-[#F5F5F7] border-t border-black/5">
                <div className="h-12 bg-white rounded-full px-5 flex items-center justify-between group cursor-text border border-black/5 shadow-sm">
                    <span className="text-zinc-400 text-[13px] font-medium">Message...</span>
                    <div className="w-8 h-8 rounded-full bg-[#0071e3] flex items-center justify-center">
                        <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-white rotate-[-45deg] translate-y-0.5 ml-[-2px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
