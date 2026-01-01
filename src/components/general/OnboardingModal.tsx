'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Plus, X, Building2, Utensils, Wifi, Car, Waves, Shield, Save, MessageSquare } from 'lucide-react'
import { createClient } from '../../utils/supabase/client'

const SUGGESTED_SERVICES = [
    { name: 'Wifi Gratuit', icon: Wifi },
    { name: 'Restaurant', icon: Utensils },
    { name: 'Parking', icon: Car },
    { name: 'Piscine', icon: Waves },
    { name: 'Service de sécurité', icon: Shield },
]

export default function OnboardingModal() {
    const [isOpen, setIsOpen] = useState(true)
    const [loading, setLoading] = useState(false)
    const [hotelName, setHotelName] = useState('')
    const [stars, setStars] = useState(3)
    const [services, setServices] = useState<string[]>([])
    const [customService, setCustomService] = useState('')
    const [description, setDescription] = useState('')

    const supabase = createClient()

    const toggleService = (service: string) => {
        setServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        )
    }

    const addCustomService = (e: React.FormEvent) => {
        e.preventDefault()
        if (customService.trim() && !services.includes(customService.trim())) {
            setServices([...services, customService.trim()])
            setCustomService('')
        }
    }

    const handleSubmit = async () => {
        if (!hotelName) return
        setLoading(true)

        const { error } = await supabase
            .from('basic_infos')
            .insert({
                hotel_name: hotelName,
                stars_count: stars,
                services: services,
                description: description
            })

        if (!error) {
            setIsOpen(false)
        } else {
            console.error(error)
            alert("Une erreur est survenue lors de l'enregistrement.")
        }
        setLoading(false)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-white/80 backdrop-blur-xl cursor-pointer"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative w-full max-w-2xl bg-white rounded-[40px] border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] p-8 md:p-12 overflow-hidden"
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 p-2 hover:bg-zinc-100 rounded-full transition-colors z-10"
                >
                    <X className="w-6 h-6 text-zinc-400" />
                </button>

                <div className="space-y-10">
                    <div className="text-center space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0071e3]">Configuration</span>
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter">Parlez-nous de <br /> votre <span className="text-[#0071e3]">Établissement</span></h2>
                    </div>

                    <div className="space-y-8">
                        {/* Hotel Name */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Nom de l'Hôtel</label>
                            <div className="relative">
                                <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />
                                <input
                                    value={hotelName}
                                    onChange={(e) => setHotelName(e.target.value)}
                                    placeholder="Ex: Grand Hôtel Palace"
                                    className="w-full pl-14 pr-6 py-4 bg-[#F5F5F7] border border-zinc-200 rounded-2xl text-[15px] text-[#1D1D1F] placeholder:text-zinc-400 focus:ring-2 focus:ring-[#0071e3]/20 focus:border-[#0071e3] transition-all font-medium"
                                />
                            </div>
                        </div>

                        {/* Stars Selection */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Nombre d'Étoiles</label>
                            <div className="flex gap-3">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <button
                                        key={num}
                                        type="button"
                                        onClick={() => setStars(num)}
                                        className={`flex-1 py-3 rounded-xl border transition-all flex items-center justify-center gap-2 ${stars === num
                                            ? 'bg-black text-white border-black shadow-lg shadow-black/10'
                                            : 'bg-white text-zinc-400 border-zinc-100 hover:border-zinc-200'
                                            }`}
                                    >
                                        <span className="text-sm font-bold">{num}</span>
                                        <Star className={`w-3.5 h-3.5 ${stars >= num && stars === num ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Services Proposés</label>

                            <div className="flex flex-wrap gap-2">
                                {SUGGESTED_SERVICES.map((item) => (
                                    <button
                                        key={item.name}
                                        type="button"
                                        onClick={() => toggleService(item.name)}
                                        className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all border flex items-center gap-2 ${services.includes(item.name)
                                            ? 'bg-[#0071e3] text-white border-[#0071e3]'
                                            : 'bg-white text-zinc-500 border-zinc-100 hover:border-zinc-200'
                                            }`}
                                    >
                                        <item.icon className="w-3.5 h-3.5" />
                                        {item.name}
                                    </button>
                                ))}
                            </div>

                            {/* Custom Service Input */}
                            <div className="flex gap-2">
                                <input
                                    value={customService}
                                    onChange={(e) => setCustomService(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && addCustomService(e as any)}
                                    placeholder="Ajouter un service (Ex: Spa, Gym...)"
                                    className="flex-1 px-5 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-[#1D1D1F] placeholder:text-zinc-400 focus:ring-1 focus:ring-[#0071e3] focus:border-[#0071e3] outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={addCustomService}
                                    className="p-3 bg-white border border-zinc-100 rounded-xl hover:bg-zinc-50 text-zinc-400"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Selected Custom Services Tags */}
                            <div className="flex flex-wrap gap-2">
                                {services.filter(s => !SUGGESTED_SERVICES.find(ss => ss.name === s)).map(service => (
                                    <span key={service} className="px-3 py-1.5 bg-zinc-100 rounded-lg text-[10px] font-bold text-zinc-600 flex items-center gap-2">
                                        {service}
                                        <X className="w-3 h-3 cursor-pointer hover:text-red-500" onClick={() => toggleService(service)} />
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Description Textarea */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Description / Message</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-5 top-4 w-5 h-5 text-zinc-300" />
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Décrivez votre établissement, vos besoins ou laissez un message..."
                                    rows={4}
                                    className="w-full pl-14 pr-6 py-4 bg-[#F5F5F7] border border-zinc-200 rounded-2xl text-[15px] text-[#1D1D1F] placeholder:text-zinc-400 focus:ring-2 focus:ring-[#0071e3]/20 focus:border-[#0071e3] transition-all font-medium resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading || !hotelName}
                        className="w-full py-5 bg-[#1D1D1F] text-white rounded-2xl font-bold text-[15px] hover:bg-black active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        {loading ? 'Enregistrement...' : (
                            <>
                                Finaliser la Configuration
                                <Save className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
