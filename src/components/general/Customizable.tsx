"use client";

import { motion } from "framer-motion";
import { Sliders, Palette, Workflow, Puzzle } from "lucide-react";

const features = [
    {
        icon: Palette,
        title: "Design & Branding",
        description: "Couleurs, logos, polices... L'interface s'aligne parfaitement avec votre identité visuelle existante."
    },
    {
        icon: Workflow,
        title: "Flux de Réservation",
        description: "Modifiez les étapes, ajoutez des options ou simplifiez le processus selon vos besoins spécifiques."
    },
    {
        icon: Sliders,
        title: "Règles de Gestion",
        description: "Tarifs dynamiques, conditions d'annulation, séjours minimums... Vous avez le contrôle total."
    },
    {
        icon: Puzzle,
        title: "Modules à la Carte",
        description: "Activez uniquement ce dont vous avez besoin. Restaurant, Spa, Parking ? Tout est connectable."
    }
];

export default function Customizable() {
    return (
        <section className="py-24 bg-white text-[#1D1D1F] border-t border-dashed border-zinc-200">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-[#d3af37]/10 text-[#d3af37] text-[10px] font-bold uppercase tracking-widest mb-6">
                        Flexibilité Totale
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        Conçu pour être <span className="text-[#d3af37]">unique.</span>
                    </h2>
                    <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Chaque établissement est différent. HOSTRA et son architecture modulaire permettent une personnalisation poussée sans compromettre la stabilité.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-[#F5F5F7] rounded-[24px] p-8 hover:bg-[#EBEBF0] transition-colors duration-300 group"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#d3af37] mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                            <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
