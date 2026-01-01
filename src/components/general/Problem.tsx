"use client";

import { motion, Variants } from "framer-motion";
import { PhoneMissed, Clock, MessageSquareOff } from "lucide-react";

const problems = [
    {
        icon: PhoneMissed,
        title: "Appels Manqués",
        description: "Un client appelle tard le soir, personne ne répond. Il réserve à l'hôtel voisin en un clic.",
    },
    {
        icon: MessageSquareOff,
        title: "Ventes Perdues",
        description: "Les messages sur Facebook/WhatsApp restent sans réponse pendant des heures. Le prospect abandonne.",
    },
    {
        icon: Clock,
        title: "Réception Débordée",
        description: "Trop de questions répétitives. Votre équipe perd du temps sur des tâches automatisables.",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function Problem() {
    return (
        <section id="problem" className="py-32 bg-white text-[#1D1D1F]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mb-24"
                >
                    <span className="text-[#FF3B30] font-bold tracking-wider text-xs uppercase mb-4 block">Le Problème</span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-[#1D1D1F]">
                        Votre hôtel perd de l'argent sans même le savoir.
                    </h2>
                    <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                        L'absence de réponse immédiate peut coûter à votre établissement entre <span className="text-[#1D1D1F] font-semibold">20% et 40%</span> de ses réservations potentielles.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-10 rounded-[32px] bg-[#F5F5F7] transition-all flex flex-col items-start group hover:bg-[#E8E8ED]"
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#FF3B30] mb-8 shadow-sm">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-[#1D1D1F]">{item.title}</h3>
                            <p className="text-zinc-500 leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
