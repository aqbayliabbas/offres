"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "C'est compliqué à utiliser ?",
        a: "Non. Si vous savez utiliser Facebook, vous saurez utiliser le système. L'interface est conçue pour être intuitive et rapide.",
    },
    {
        q: "Et si j'ai un problème ?",
        a: "Vous m'appelez, je règle le problème. Le support est inclus et illimité pour assurer la continuité de votre service.",
    },
    {
        q: "Le chatbot va dire n'importe quoi ?",
        a: "Non. Il est programmé spécifiquement pour les réservations hôtelières et suit des directives strictes définies avec vous.",
    },
    {
        q: "Mes clients doivent créer un compte ?",
        a: "Non, c'est optionnel. Mais avec un compte, ils réservent en 30 secondes et accumulent des points de fidélité.",
    },
    {
        q: "Je n'ai pas de site web ?",
        a: "Ce n'est pas un problème. Le système fonctionne seul. Vous partagez simplement le lien sur vos réseaux sociaux.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-black text-white">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-black tracking-tight mb-16 text-center uppercase">Questions <span className="text-blue-500 italic">Fréquentes.</span></h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === idx ? "border-blue-500/50 bg-zinc-900/50" : "border-zinc-800 bg-zinc-950"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-8 text-left"
                            >
                                <span className="font-bold text-lg pr-8">{faq.q}</span>
                                {openIndex === idx ? (
                                    <Minus className="w-6 h-6 text-blue-500 shrink-0" />
                                ) : (
                                    <Plus className="w-6 h-6 text-zinc-600 shrink-0" />
                                )}
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === idx ? "auto" : 0, opacity: openIndex === idx ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-8 pt-0 text-zinc-400 font-medium leading-relaxed border-t border-zinc-800/30">
                                    {faq.a}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
