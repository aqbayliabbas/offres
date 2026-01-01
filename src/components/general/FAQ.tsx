"use client";

import { motion, AnimatePresence } from "framer-motion";
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
        q: "J'ai déjà un système local, pouvez-vous l'intégrer ?",
        a: "Absolument. Nous pouvons synchroniser notre solution avec vos outils actuels ou importer vos données pour assurer une transition fluide sans perte d'historique.",
    },
    {
        q: "Pouvez-vous ajouter d'autres modules (cafétéria, etc.) ?",
        a: "Oui, notre système est évolutif. Nous pouvons développer et intégrer des modules sur mesure pour la gestion de votre cafétéria, buanderie ou tout autre service spécifique.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-[#F5F5F7] text-[#1D1D1F]">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-semibold tracking-tight mb-16 text-center">Questions <span className="text-[#0071e3]">Fréquentes.</span></h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-3xl transition-all duration-300 bg-white ${openIndex === idx ? "shadow-lg border-blue-100" : "shadow-sm border-zinc-100"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-8 text-left"
                            >
                                <span className="font-semibold text-lg pr-8 text-[#1D1D1F]">{faq.q}</span>
                                {openIndex === idx ? (
                                    <Minus className="w-5 h-5 text-[#0071e3] shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-zinc-400 shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 text-zinc-500 font-medium leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
