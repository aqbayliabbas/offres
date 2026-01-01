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

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#0071e3]/20">
      {/* Always show the onboarding modal on every page load */}
      <OnboardingModal />

      <Hero />
      <Problem />
      <Solution />
      <Offer />
      <AdminPreview />
      <GallerySlider />
      <AdditionalServices />
      <FAQ />
      <Contact />

      <footer className="py-24 bg-[#F5F5F7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            Une Solution Conçue & Développée par l'Alliance Wingo x Auren
          </p>

          <p className="text-zinc-400 text-[10px] font-medium uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Système de Réservation Intelligent • Tous droits réservés
          </p>
        </div>
      </footer>
    </main>
  );
}
