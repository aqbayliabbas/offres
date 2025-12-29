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
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }
    }
};

export default function Problem() {
    return (
        <section id="problem" className="py-32 bg-zinc-950 text-white border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mb-24"
                >
                    <span className="text-red-500 font-black tracking-[0.25em] text-[10px] uppercase mb-6 block">Le Problème</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
                        Votre hôtel perd de l'argent <br /> sans même le savoir.
                    </h2>
                    <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                        L'absence de réponse immédiate coûte actuellement à l'Hôtel Kyrline entre <span className="text-white font-bold">20% et 40%</span> de ses réservations potentielles.
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
                            whileHover={{ y: -10, borderColor: "rgba(239, 68, 68, 0.3)" }}
                            className="p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-colors flex flex-col items-start group shadow-2xl"
                        >
                            <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-red-500 mb-8 border border-zinc-700 transition-transform group-hover:rotate-6">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{item.title}</h3>
                            <p className="text-zinc-500 font-medium leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
