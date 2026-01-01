"use client";

import Hero from "../../../components/general/Hero";
import GallerySlider from "../../../components/general/GallerySlider";
import Problem from "../../../components/general/Problem";
import Solution from "../../../components/general/Solution";
import AdminPreview from "../../../components/general/AdminPreview";
import ROI from "../../../components/general/ROI";
import Offer from "../../../components/general/Offer";
import AdditionalServices from "../../../components/general/AdditionalServices";
import FAQ from "../../../components/general/FAQ";
import Contact from "../../../components/general/Contact";
import Image from "next/image";

export default function GeneralOffer() {
    return (
        <main className="min-h-screen bg-white text-[#1D1D1F] selection:bg-blue-500/30 overflow-x-hidden font-sans">
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

            <footer className="py-24 bg-[#F5F5F7] border-t border-black/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                    <div className="flex items-center gap-12 mb-10 opacity-100 hover:opacity-100 transition-opacity duration-700">
                        <Image src="/wingo.svg" alt="Wingo Logo" width={100} height={24} className="h-5 md:h-6 w-auto brightness-0" />
                        <div className="h-5 w-[1px] bg-zinc-300" />
                        <Image src="/auren.svg" alt="Auren Logo" width={100} height={24} className="h-5 md:h-6 w-auto brightness-0" />
                    </div>

                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                        Une Solution Conçue & Développée par l'Alliance Wingo x Auren
                    </p>

                    <p className="text-zinc-400 text-[10px] font-medium uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} Système de Réservation Hôtelière • Tous droits réservés
                    </p>
                </div>
            </footer>
        </main>
    );
}
