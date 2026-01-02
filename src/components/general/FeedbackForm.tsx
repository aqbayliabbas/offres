"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Send, CheckCircle2 } from "lucide-react";
import { createClient } from "../../utils/supabase/client";

const QUESTIONS = [
    {
        id: 1,
        question: "Quel est le principal défi que rencontre actuellement votre hôtel en matière de réservations ?",
        type: "texte_libre",
        placeholder: "Ex: Appels manqués la nuit, messages WhatsApp sans réponse, réception débordée...",
        field: "challenge",
        obligatoire: true,
    },
    {
        id: 2,
        question: "Combien estimez-vous perdre de réservations potentielles par mois à cause de ces problèmes ?",
        type: "choix_multiple",
        options: [
            "Moins de 10 réservations",
            "10 à 30 réservations",
            "30 à 50 réservations",
            "Plus de 50 réservations",
            "Je ne sais pas"
        ],
        field: "lost_bookings",
        obligatoire: true,
    },
    {
        id: 3,
        question: "Quelles fonctionnalités de notre solution vous intéressent le plus ?",
        type: "cases_a_cocher",
        options: [
            "Chatbot intelligent 24/7",
            "Réservation express en 30 secondes",
            "Système de fidélité automatique",
            "Tableau de bord et statistiques",
            "Génération automatique de factures",
            "Personnalisation complète"
        ],
        field: "interests",
        obligatoire: true,
        minimum_selections: 1,
    },
    {
        id: 4,
        question: "Dans quel délai souhaiteriez-vous mettre en place une telle solution ?",
        type: "choix_unique",
        options: [
            "Le plus rapidement possible (moins d'un mois)",
            "D'ici 1 à 3 mois",
            "D'ici 3 à 6 mois",
            "Pas de calendrier précis, je m'informe"
        ],
        field: "timeline",
        obligatoire: true,
    },
    {
        id: 5,
        question: "L'offre partenaire pilote à 400 000 DA (au lieu de 650 000 DA) correspond-elle à votre budget ?",
        type: "choix_unique",
        options: [
            "Oui, tout à fait",
            "Oui, mais j'aimerais discuter des modalités de paiement",
            "C'est au-dessus de mon budget actuel",
            "Je dois en discuter avec mon équipe/partenaires"
        ],
        field: "budget_fit",
        obligatoire: true,
    }
];

export default function FeedbackForm() {
    const [step, setStep] = useState(0); // 0 to QUESTIONS.length is questions, QUESTIONS.length is contact info, +1 is success
    const [formData, setFormData] = useState<any>({
        interests: [],
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const supabase = createClient();

    const currentQuestion = QUESTIONS[step];
    const isLastQuestion = step === QUESTIONS.length - 1;
    const isContactStep = step === QUESTIONS.length;

    const handleNext = () => {
        if (step < QUESTIONS.length) {
            // Validation
            if (step < QUESTIONS.length) {
                const q = QUESTIONS[step];
                const value = formData[q.field];
                if (q.obligatoire) {
                    if (q.type === "cases_a_cocher") {
                        if (!value || value.length < (q.minimum_selections || 1)) return;
                    } else {
                        if (!value) return;
                    }
                }
            }
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 0) setStep(step - 1);
    };

    const toggleCheckbox = (option: string) => {
        const field = currentQuestion.field;
        const currentValues = formData[field] || [];
        if (currentValues.includes(option)) {
            setFormData({ ...formData, [field]: currentValues.filter((v: string) => v !== option) });
        } else {
            setFormData({ ...formData, [field]: [...currentValues, option] });
        }
    };

    const handleSubmit = async () => {
        if (!formData.hotel_name || !formData.phone) return;

        setLoading(true);
        setError("");

        try {
            const { error: submitError } = await supabase
                .from('offer_feedbacks')
                .insert([formData]);

            if (submitError) throw submitError;
            setSubmitted(true);
        } catch (err: any) {
            console.error("Error submitting feedback:", err);
            setError("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <section className="py-24 bg-white">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="p-10 md:p-14 bg-[#F5F5F7] rounded-[48px] border border-black/5 flex flex-col items-center shadow-sm"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                            className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-green-500 mb-8 shadow-xl"
                        >
                            <CheckCircle2 className="w-12 h-12" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-black">Merci pour votre retour !</h2>
                        <p className="text-zinc-500 font-medium text-lg leading-relaxed">
                            Nous vous recontacterons très prochainement pour transformer votre activité.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="feedback" className="py-24 sm:py-32 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#0071e3] font-black tracking-[0.3em] text-[10px] uppercase mb-4 block"
                    >
                        QUESTIONNAIRE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-black"
                    >
                        Prêt à passer à <span className="text-zinc-300">l'étape suivante ?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-zinc-500 font-medium text-lg max-w-2xl mx-auto"
                    >
                        Aidez-nous à mieux comprendre votre établissement.
                    </motion.p>
                </div>

                <div className="relative bg-[#F5F5F7] rounded-[48px] p-8 md:p-16 border border-black/5 shadow-2xl">
                    {/* Progress Bar - Sleek Capsule Design */}
                    <div className="flex justify-center mb-10">
                        <div className="w-32 h-1.5 bg-black/5 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-[#0071e3] rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${(step / (QUESTIONS.length)) * 100}%` }}
                                transition={{ type: "spring", damping: 25, stiffness: 100 }}
                            />
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {!isContactStep ? (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                                className="space-y-10"
                            >
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-black/5 shadow-sm">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#0071e3]">
                                            Étape {step + 1} / {QUESTIONS.length}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-black leading-tight">
                                        {currentQuestion.question}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {currentQuestion.type === "texte_libre" && (
                                        <div className="relative group">
                                            <textarea
                                                value={formData[currentQuestion.field] || ""}
                                                onChange={(e) => setFormData({ ...formData, [currentQuestion.field]: e.target.value })}
                                                placeholder={currentQuestion.placeholder}
                                                rows={5}
                                                className="w-full px-8 py-6 bg-white border border-transparent rounded-[32px] text-lg text-black focus:border-[#0071e3] transition-all outline-none resize-none font-medium shadow-sm group-hover:shadow-md"
                                            />
                                        </div>
                                    )}

                                    {(currentQuestion.type === "choix_multiple" || currentQuestion.type === "choix_unique") && (
                                        <div className="grid gap-4">
                                            {currentQuestion.options?.map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => setFormData({ ...formData, [currentQuestion.field]: option })}
                                                    className={`w-full px-8 py-6 rounded-[28px] border text-left transition-all flex items-center justify-between group shadow-sm ${formData[currentQuestion.field] === option
                                                        ? "bg-black text-white border-black scale-[1.02]"
                                                        : "bg-white text-zinc-800 border-transparent hover:border-[#0071e3]/30 hover:shadow-md"
                                                        }`}
                                                >
                                                    <span className="font-bold text-lg">{option}</span>
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${formData[currentQuestion.field] === option
                                                        ? "bg-[#0071e3]"
                                                        : "bg-zinc-100 group-hover:bg-zinc-200"
                                                        }`}>
                                                        <Check className={`w-4 h-4 transition-all ${formData[currentQuestion.field] === option ? "text-white opacity-100" : "text-transparent"
                                                            }`} />
                                                    </div>
                                                </button>
                                            ))}

                                            {/* Custom Budget Input for Question 5 */}
                                            {currentQuestion.id === 5 && formData.budget_fit === "C'est au-dessus de mon budget actuel" && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    className="mt-4 space-y-4"
                                                >
                                                    <label className="text-[10px] font-black text-[#0071e3] uppercase tracking-[0.2em] ml-1">Quel budget aviez-vous en tête ?</label>
                                                    <textarea
                                                        value={formData.custom_budget || ""}
                                                        onChange={(e) => setFormData({ ...formData, custom_budget: e.target.value })}
                                                        placeholder="Ex: 250 000 DA avec paiement échelonné..."
                                                        rows={2}
                                                        className="w-full px-8 py-6 bg-white border border-[#0071e3]/20 rounded-[28px] text-lg text-black focus:border-[#0071e3] transition-all outline-none resize-none font-bold shadow-inner"
                                                    />
                                                </motion.div>
                                            )}
                                        </div>
                                    )}

                                    {currentQuestion.type === "cases_a_cocher" && (
                                        <div className="grid gap-4">
                                            {currentQuestion.options?.map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => toggleCheckbox(option)}
                                                    className={`w-full px-8 py-6 rounded-[28px] border text-left transition-all flex items-center justify-between group shadow-sm ${formData[currentQuestion.field]?.includes(option)
                                                        ? "bg-black text-white border-black scale-[1.02]"
                                                        : "bg-white text-zinc-800 border-transparent hover:border-[#0071e3]/30 hover:shadow-md"
                                                        }`}
                                                >
                                                    <span className="font-bold text-lg">{option}</span>
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${formData[currentQuestion.field]?.includes(option)
                                                        ? "bg-[#0071e3]"
                                                        : "bg-zinc-100 group-hover:bg-zinc-200"
                                                        }`}>
                                                        <Check className={`w-4 h-4 transition-all ${formData[currentQuestion.field]?.includes(option) ? "text-white opacity-100" : "text-transparent"
                                                            }`} />
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-between pt-6">
                                    <button
                                        onClick={handleBack}
                                        disabled={step === 0}
                                        className="flex items-center gap-3 text-zinc-400 hover:text-black disabled:opacity-0 transition-all font-bold text-xs uppercase tracking-[0.2em]"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <ChevronLeft className="w-5 h-5" />
                                        </div>
                                        Retour
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={currentQuestion.obligatoire && (
                                            currentQuestion.type === "cases_a_cocher"
                                                ? (formData[currentQuestion.field]?.length || 0) < (currentQuestion.minimum_selections || 1)
                                                : !formData[currentQuestion.field]
                                        )}
                                        className="bg-[#0071e3] text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-black hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-xl shadow-blue-500/20"
                                    >
                                        Suivant
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="contact"
                                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                                className="space-y-10"
                            >
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-black/5 shadow-sm">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#0071e3]">DERNIÈRE ÉTAPE</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-black leading-tight">
                                        Où pouvons-nous vous <span className="text-zinc-300">contacter ?</span>
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-[#0071e3] uppercase tracking-[0.2em] ml-1">Nom de l'Établissement</label>
                                        <input
                                            value={formData.hotel_name || ""}
                                            onChange={(e) => setFormData({ ...formData, hotel_name: e.target.value })}
                                            placeholder="Ex: Grand Hôtel Palace"
                                            className="w-full px-8 py-6 bg-white border border-transparent rounded-[28px] text-lg text-black focus:border-[#0071e3] transition-all outline-none font-bold shadow-sm"
                                        />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-[#0071e3] uppercase tracking-[0.2em] ml-1">Téléphone</label>
                                            <input
                                                value={formData.phone || ""}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="+213..."
                                                type="tel"
                                                className="w-full px-8 py-6 bg-white border border-transparent rounded-[28px] text-lg text-black focus:border-[#0071e3] transition-all outline-none font-bold shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-[#0071e3] uppercase tracking-[0.2em] ml-1">Email (Optionnel)</label>
                                            <input
                                                value={formData.email || ""}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="contact@hotel.com"
                                                type="email"
                                                className="w-full px-8 py-6 bg-white border border-transparent rounded-[28px] text-lg text-black focus:border-[#0071e3] transition-all outline-none font-bold shadow-sm"
                                            />
                                        </div>
                                    </div>
                                    {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-black uppercase tracking-widest mt-2 ml-1">{error}</motion.p>}
                                </div>

                                <div className="flex items-center justify-between pt-6">
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-3 text-zinc-400 hover:text-black transition-all font-bold text-xs uppercase tracking-[0.2em]"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <ChevronLeft className="w-5 h-5" />
                                        </div>
                                        Retour
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={loading || !formData.hotel_name || !formData.phone}
                                        className="bg-black text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-xl"
                                    >
                                        {loading ? "Traitement..." : "Finaliser l'envoi"}
                                        {!loading && <Send className="w-5 h-5" />}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
