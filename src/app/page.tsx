import Hero from "@/components/general/Hero";
import Problem from "@/components/general/Problem";
import Solution from "@/components/general/Solution";
import Offer from "@/components/general/Offer";
import AdminPreview from "@/components/general/AdminPreview";
import GallerySlider from "@/components/general/GallerySlider";
import AdditionalServices from "@/components/general/AdditionalServices";
import FAQ from "@/components/general/FAQ";
import Contact from "@/components/general/Contact";
import OnboardingModal from "@/components/general/OnboardingModal";
import Customizable from "@/components/general/Customizable";
import FeedbackForm from "@/components/general/FeedbackForm";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#0071e3]/20">
      {/* Always show the onboarding modal on every page load */}
      <OnboardingModal />

      <Hero />
      <Problem />
      <Solution />
      <AdminPreview />
      <Offer />
      <Customizable />
      <GallerySlider />
      <AdditionalServices />
      <FAQ />
      <FeedbackForm />
      <Contact />

      <footer className="py-12 sm:py-16 md:py-24 bg-[#F5F5F7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="flex items-center gap-8 mb-8">
            <Image src="/wingo.svg" alt="Wingo Logo" width={100} height={40} className="h-6 w-auto grayscale" />
            <div className="w-[1px] h-6 bg-black/10" />
            <Image src="/auren.svg" alt="Auren Logo" width={100} height={40} className="h-6 w-auto grayscale" />
          </div>

          <p className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 text-center px-2">
            Une Solution Conçue &amp; Développée par l'Alliance Wingo x Auren
          </p>

          <p className="text-zinc-400 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center px-2">
            &copy; {new Date().getFullYear()} Système de Réservation Intelligent • Tous droits réservés
          </p>
        </div>
      </footer>
    </main>
  );
}
