"use client";

import { motion, Variants } from "framer-motion";
import { LayoutDashboard, Bell, FileText, PlusCircle } from "lucide-react";

const features = [
    {
        icon: LayoutDashboard,
        title: "Tableau de Bord",
        description: "Visualisez vos revenus, vos réservations et vos clients fidèles en temps réel.",
    },
    {
        icon: Bell,
        title: "Notifications Push",
        description: "Soyez alerté au moindre mouvement. Confirmez les demandes en un clic.",
    },
    {
        icon: FileText,
        title: "Facturation Automatique",
        description: "Vos factures PDF sont générées instantanément avec votre logo.",
    },
    {
        icon: PlusCircle,
        title: "Ultra Personnalisable",
        description: "Ménage, équipements, services... Le système s'adapte à vos besoins.",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

export default function AdminPreview() {
    return (
        <section className="py-32 bg-zinc-950 border-y border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <span className="text-zinc-500 font-black tracking-[.25em] text-[10px] uppercase mb-6 block">Votre Espace</span>
                    <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-8">
                        Prenez le contrôle <br /> total.
                    </h2>
                    <p className="text-zinc-400 font-medium text-xl max-w-2xl leading-relaxed">
                        Une interface simple et puissante pour gérer l'intégralité de vos opérations quotidiennes sans effort.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: "rgba(39, 39, 42, 1)",
                                borderColor: "rgba(63, 63, 70, 1)"
                            }}
                            className="p-10 bg-zinc-900 border border-zinc-800 rounded-3xl transition-all shadow-xl flex flex-col items-start"
                        >
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black mb-8">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-black text-lg mb-4 text-white uppercase tracking-tight leading-none">{feature.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed font-bold">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
