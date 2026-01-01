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
        title: "Shooting & Film",
        description: "Capturer l'essence de votre établissement avec des visuels cinématographiques et une photographie de luxe.",
        features: ["Vidéos cinématographiques", "Photos d'Intérieur", "Vidéos Promotionnelles"]
    },
    {
        icon: Users,
        title: "Influence",
        description: "Connectez votre hôtel aux meilleurs créateurs de contenu pour exploser votre visibilité en Algérie.",
        features: ["Partenariats", "Stratégie Social", "Gestion de Campagne"]
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
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function AdditionalServices() {
    return (
        <section className="py-32 bg-white text-[#1D1D1F] relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-[#0071e3] font-bold tracking-wider text-xs uppercase mb-4 block">Expansion</span>
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">
                        Des services <span className="text-zinc-400">complémentaires.</span>
                    </h2>
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
                            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                            className="p-10 rounded-[32px] bg-[#F5F5F7] border border-black/5 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0071e3] mb-8 shadow-sm">
                                <service.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-semibold mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-zinc-500 font-medium text-[15px] leading-relaxed mb-10">
                                {service.description}
                            </p>

                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                        <div className="w-1 h-1 bg-[#0071e3] rounded-full" />
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
