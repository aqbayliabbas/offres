"use client";

import { motion, Variants } from "framer-motion";
import { Phone, Mail, MessageCircle, Clock, ArrowUpRight } from "lucide-react";

export default function Contact() {
    const contacts = [
        {
            icon: Phone,
            label: "Appel Direct",
            links: [
                { text: "+213 799 739 969", href: "tel:+213799739969" },
                { text: "+213 553 50 93 82", href: "tel:+213553509382" },
                { text: "+213 675 962 470", href: "tel:+213675962470" }
            ],
            color: "blue",
            glow: "bg-blue-500/20"
        },
        {
            icon: MessageCircle,
            label: "WhatsApp Business",
            links: [
                { text: "+213 799 739 969", href: "https://wa.me/213799739969" },
                { text: "+213 553 50 93 82", href: "https://wa.me/213553509382" }
            ],
            color: "green",
            glow: "bg-green-500/20"
        },
        {
            icon: Mail,
            label: "Contact Email",
            link: { text: "louenesabbas@win-go.space", href: "mailto:louenesabbas@win-go.space" },
            color: "purple",
            glow: "bg-purple-500/20"
        },
        {
            icon: Clock,
            label: "Disponibilité",
            value: "24h/24 • 7j/7",
            color: "orange",
            glow: "bg-orange-500/20"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as any }
        }
    };

    return (
        <section className="py-48 bg-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32"
                >
                    <span className="text-zinc-500 font-black tracking-[.3em] text-[10px] uppercase mb-8 block">Prochaine Étape</span>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                        Prêt pour le <br /> <span className="text-blue-500">succès ?</span>
                    </h2>
                    <p className="text-zinc-400 font-medium text-xl max-w-2xl mx-auto leading-relaxed italic">
                        Une étude personnalisée et gratuite de vos besoins opérationnels est disponible. Contactez-nous dès maintenant.
                    </p>
                </motion.div>

                <div className="flex flex-col items-center">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 mb-12">NOTRE ÉQUIPE :</h3>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-8 w-full max-w-5xl"
                    >
                        {/* Membre 1: Louenes Abbas */}
                        <motion.div
                            variants={cardVariants}
                            className="group p-10 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-[2.5rem] hover:border-zinc-700 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="flex flex-col gap-8">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black tracking-tight text-white">Louenes Abbas</h4>
                                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Fondateur de Wingo | Auto-entrepreneur</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center border border-white">
                                            <Phone className="w-4 h-4 text-black" />
                                        </div>
                                        <a href="tel:+213799739969" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors">+213 799 739 969</a>
                                    </div>

                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center border border-white">
                                            <Mail className="w-4 h-4 text-black" />
                                        </div>
                                        <a href="mailto:louenesabbas@win-go.space" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors truncate">louenesabbas@win-go.space</a>
                                    </div>

                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center border border-white">
                                            <Clock className="w-4 h-4 text-black" />
                                        </div>
                                        <span className="text-sm font-bold text-zinc-300">Disponible 24/7 • WhatsApp</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Membre 2: Amir BELKAHLA */}
                        <motion.div
                            variants={cardVariants}
                            className="group p-10 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-[2.5rem] hover:border-zinc-700 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="flex flex-col gap-8">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black tracking-tight text-white">Amir BELKAHLA</h4>
                                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Fondateur de Auren | Lead AI</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center border border-white">
                                            <Phone className="w-4 h-4 text-black" />
                                        </div>
                                        <a href="tel:+213553509382" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors">+213 553 50 93 82</a>
                                    </div>

                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center border border-white">
                                            <Mail className="w-4 h-4 text-black" />
                                        </div>
                                        <a href="mailto:amir.belkahla@auren.ai" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors truncate">amir.belkahla59016@gmail.com</a>
                                    </div>

                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center border border-white">
                                            <Clock className="w-4 h-4 text-black" />
                                        </div>
                                        <span className="text-sm font-bold text-zinc-300">Disponible 24/7 • WhatsApp</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
