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
        title: "Facturation Auto",
        description: "Vos factures PDF sont générées instantanément avec votre logo.",
    },
    {
        icon: PlusCircle,
        title: "Personnalisable",
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
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function AdminPreview() {
    return (
        <section className="py-32 bg-white border-y border-black/5">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
                    className="mb-24"
                >
                    <span className="text-zinc-400 font-bold tracking-widest text-xs uppercase mb-4 block">Votre Espace</span>
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-[#1D1D1F]">
                        Prenez le contrôle <br /> total.
                    </h2>
                    <p className="text-zinc-500 font-medium text-xl max-w-2xl leading-relaxed">
                        Une interface simple et puissante pour gérer l'intégralité de vos opérations quotidiennes sans effort.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                            }}
                            className="p-8 bg-[#F5F5F7] rounded-[32px] transition-all flex flex-col items-start hover:shadow-xl hover:bg-white"
                        >
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1D1D1F] mb-6 shadow-sm border border-black/5">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-lg mb-3 text-[#1D1D1F] tracking-tight">{feature.title}</h3>
                            <p className="text-[15px] text-zinc-500 leading-relaxed font-medium">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
