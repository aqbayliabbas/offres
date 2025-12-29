"use client";

import Hero from "../../../components/Hero";
import GallerySlider from "../../../components/GallerySlider";
import Problem from "../../../components/Problem";
import Solution from "../../../components/Solution";
import AdminPreview from "../../../components/AdminPreview";
import ROI from "../../../components/ROI";
import Offer from "../../../components/Offer";
import AdditionalServices from "../../../components/AdditionalServices";
import FAQ from "../../../components/FAQ";
import Contact from "../../../components/Contact";
import Image from "next/image";

export default function KyrlineOffer() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
            <Hero />
            <GallerySlider />
            <Problem />
            <Solution />
            <AdminPreview />
            <ROI />
            <Offer />
            <AdditionalServices />
            <FAQ />
            <Contact />

            <footer className="py-16 bg-black border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                    <div className="flex items-center gap-12 mb-10 opacity-40 hover:opacity-100 transition-opacity duration-700">
                        <Image src="/wingo.svg" alt="Wingo Logo" width={100} height={24} className="h-5 md:h-6 w-auto brightness-200" />
                        <div className="h-5 w-[1px] bg-zinc-800" />
                        <Image src="/auren.svg" alt="Auren Logo" width={100} height={24} className="h-5 md:h-6 w-auto brightness-200" />
                    </div>

                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                        Une Solution Conçue & Développée par l'Alliance Wingo x Auren
                    </p>

                    <p className="text-zinc-800 text-[10px] font-medium uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} Système de Réservation Hôtelière • Tous droits réservés
                    </p>
                </div>
            </footer>
        </main>
    );
}
