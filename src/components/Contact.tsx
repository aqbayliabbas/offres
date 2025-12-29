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
                        Prêt pour le <br /> <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">succès ?</span>
                    </h2>
                    <p className="text-zinc-400 font-medium text-xl max-w-2xl mx-auto leading-relaxed italic">
                        Une étude personnalisée et gratuite de vos besoins opérationnels est disponible. Contactez-nous dès maintenant.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {contacts.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                backgroundColor: "rgba(12, 12, 12, 1)",
                                borderColor: "rgba(255, 255, 255, 0.1)"
                            }}
                            className="group p-10 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-500 relative overflow-hidden shadow-2xl"
                        >
                            {/* Inner Glow */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 ${item.glow} rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className={`w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl relative z-10`}>
                                <item.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-[10px] font-black uppercase tracking-[.3em] text-zinc-500 mb-6 group-hover:text-zinc-300 transition-colors">{item.label}</h3>

                            <div className="flex flex-col gap-3 w-full relative z-10">
                                {item.links && item.links.map((sub, j) => (
                                    <a
                                        key={j}
                                        href={sub.href}
                                        target={sub.href.startsWith('http') ? "_blank" : undefined}
                                        rel={sub.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                        className="inline-flex items-center justify-center gap-2 text-lg font-black text-white hover:text-blue-500 transition-all duration-300 transform group/link"
                                    >
                                        {sub.text}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                                    </a>
                                ))}
                                {item.link && (
                                    <a
                                        href={item.link.href}
                                        className="text-[14px] md:text-[15px] font-black text-white hover:text-purple-500 transition-all duration-300 break-all leading-tight group/link inline-flex items-center justify-center gap-2"
                                    >
                                        {item.link.text}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                                    </a>
                                )}
                                {item.value && (
                                    <div className="flex flex-col items-center">
                                        <p className="text-2xl font-black text-white tracking-tighter">{item.value.split(' • ')[0]}</p>
                                        <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mt-1">{item.value.split(' • ')[1]}</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
