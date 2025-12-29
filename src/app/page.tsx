"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Hotel } from "lucide-react";

const hotels = [
  {
    name: "Hôtel Kyrline",
    location: "Bouira",
    status: "Offre Disponible",
    slug: "kyrline",
  }
];

export default function Home() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Louenes2026") {
      setIsAuthorized(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6 selection:bg-blue-500/30">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-12">
            <Image src="/wingo.svg" alt="Wingo Logo" width={120} height={28} className="brightness-200 mx-auto mb-10" />
            <h1 className="text-3xl font-black tracking-tighter mb-4">Accès Protégé</h1>
            <p className="text-zinc-500 font-medium text-sm">Veuillez saisir le mot de passe pour accéder aux offres.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                className={`w-full h-14 bg-zinc-900/50 border ${error ? 'border-red-500/50' : 'border-zinc-800'} rounded-2xl px-6 text-white font-bold outline-none focus:border-blue-500/50 transition-all placeholder:text-zinc-700`}
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-2 ml-2">Mot de passe incorrect</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-14 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group"
            >
              Débloquer l'accès
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center mt-12 text-zinc-800 text-[10px] font-bold uppercase tracking-[0.4em]">
            Wingo x Auren • Secure Gateway
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-6 mb-12 opacity-80">
            <Image src="/wingo.svg" alt="Wingo Logo" width={120} height={28} className="brightness-200" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
            Offres de Services <br />
            <span className="text-zinc-500">Hôteliers</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Sélectionnez un établissement pour consulter la proposition commerciale <br /> personnalisée et l'étude d'impact digital.
          </p>
        </motion.div>

        <div className="w-full max-w-4xl grid gap-6">
          {hotels.map((hotel, i) => (
            <motion.div
              key={hotel.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
            >
              <Link
                href={`/offre/${hotel.slug}`}
                className="group relative flex items-center justify-between p-8 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-[2.5rem] hover:bg-zinc-800/60 hover:border-blue-500/30 transition-all duration-500 shadow-2xl overflow-hidden"
              >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-full bg-blue-600/5 blur-[40px] translate-x-16 group-hover:translate-x-0 transition-transform duration-1000" />

                <div className="flex items-center gap-8 relative z-10">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border border-zinc-700 group-hover:border-blue-500/40 transition-all duration-500 shrink-0">
                    <Image
                      src="/hotel_facade_luxury_4_1767018874326.png"
                      alt="Kyrline Facade"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-left">
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-1 group-hover:text-blue-500 transition-colors">
                      {hotel.name}
                    </h2>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{hotel.location}</span>
                      <div className="w-1 h-1 rounded-full bg-zinc-800" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-500 animate-pulse">{hotel.status}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-white transition-colors">
                    Voir l'offre
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:rotate-[-45deg] transition-all duration-500">
                    <ArrowRight className="w-6 h-6 text-zinc-400 group-hover:text-white" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Placeholder for future expansion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="p-8 border-2 border-dashed border-zinc-900 rounded-[2.5rem] flex items-center justify-center"
          >
            <p className="text-zinc-700 font-bold uppercase tracking-[.4em] text-[10px]">Espace réservé pour futurs partenaires</p>
          </motion.div>
        </div>

        <footer className="mt-auto py-12 opacity-30">
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            Wingo x Auren • Plateforme d'Offres Services
          </p>
        </footer>
      </div>
    </main>
  );
}
