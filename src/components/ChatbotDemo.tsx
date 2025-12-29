"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        if (visibleMessages < conversation.length) {
            if (conversation[visibleMessages].role === "bot") {
                setIsTyping(true);
                const timer = setTimeout(() => {
                    setIsTyping(false);
                    setVisibleMessages((prev) => prev + 1);
                }, 1500);
                return () => clearTimeout(timer);
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
    }, [visibleMessages]);

    return (
        <div className="w-full max-w-[360px] mx-auto bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 overflow-hidden">
            <div className="bg-zinc-800 p-4 flex items-center gap-3 border-b border-zinc-700">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs">
                    AI
                </div>
                <div>
                    <h3 className="text-white font-bold text-sm">Assistant Kyrline</h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">En ligne 24h/24</p>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-4 h-[400px] overflow-y-auto bg-black/50 flex flex-col scrollbar-hide">
                <AnimatePresence initial={false}>
                    {conversation.slice(0, visibleMessages).map((msg, idx) => (
                        <motion.div
                            key={`${idx}-${visibleMessages}`}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className={`flex ${msg.role === "client" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[85%] p-3.5 rounded-2xl text-sm font-medium leading-relaxed ${msg.role === "client"
                                        ? "bg-blue-600 text-white rounded-br-none"
                                        : "bg-zinc-800 text-zinc-200 rounded-bl-none"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                    >
                        <div className="bg-zinc-800 p-3.5 rounded-2xl rounded-bl-none flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-75" />
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-150" />
                        </div>
                    </motion.div>
                )}
            </div>
            <div className="p-3 bg-zinc-900 border-t border-zinc-800">
                <div className="h-10 bg-black/30 rounded-xl px-4 flex items-center text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                    Tapez un message...
                </div>
            </div>
        </div>
    );
}
