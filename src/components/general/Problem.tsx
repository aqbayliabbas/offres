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
        <section id="problem" className="py-16 sm:py-24 md:py-32 bg-white text-[#1D1D1F]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mb-12 sm:mb-16 md:mb-24"
                >
                    <span className="text-[#FF3B30] font-bold tracking-wider text-xs uppercase mb-2 sm:mb-4 block">Le Problème</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6 text-[#1D1D1F]">
                        Votre hôtel perd de l'argent sans même le savoir.
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-zinc-500 leading-relaxed font-medium">
                        L'absence de réponse immédiate peut coûter à votre établissement entre <span className="text-[#1D1D1F] font-semibold">20% et 40%</span> de ses réservations potentielles.
                    </p>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-6 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[32px] bg-[#F5F5F7] transition-all flex flex-col items-start group hover:bg-[#E8E8ED]"
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-[#FF3B30] mb-4 sm:mb-6 md:mb-8 shadow-sm">
                                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#1D1D1F]">{item.title}</h3>
                            <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
