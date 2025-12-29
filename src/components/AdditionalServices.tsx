"use client";

import { motion, Variants } from "framer-motion";
import { Palette, Camera, Users, ArrowUpRight } from "lucide-react";

const services = [
    {
        icon: Palette,
        title: "Identité Visuelle",
        description: "Création ou refonte complète de votre logo et charte graphique pour une image de marque premium.",
        features: ["Design de Logo", "Charte Graphique", "Supports Print"]
    },
    {
        icon: Camera,
        title: "Shooting & Film Making",
        description: "Capturer l'essence de l'Hôtel Kyrline avec des visuels cinématographiques et une photographie de luxe.",
        features: ["Drone 4K", "Photos d'Intérieur", "Vidéo Promotionnelle"]
    },
    {
        icon: Users,
        title: "Campagnes d'Influence",
        description: "Connectez votre hôtel aux meilleurs créateurs de contenu pour exploser votre visibilité en Algérie.",
        features: ["Partenariats", "Stratégie Social Media", "Gestion de Campagne"]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.21, 0.45, 0.32, 0.9] }
    }
};

export default function AdditionalServices() {
    return (
        <section className="py-32 bg-black text-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-blue-500 font-black tracking-[.25em] text-[10px] uppercase mb-6 block">Expansion & Branding</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                        Des services qui pourraient <br /> <span className="text-zinc-500 italic">vous intéresser.</span>
                    </h2>
                    <p className="text-zinc-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                        Au-delà de la technologie, nous vous accompagnons dans la création d'une image de marque forte et une visibilité maximale.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/50 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <ArrowUpRight className="w-5 h-5 text-zinc-600" />
                            </div>

                            <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                <service.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
                            <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-10">
                                {service.description}
                            </p>

                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                                        <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
