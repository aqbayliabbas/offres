import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-white text-[#1D1D1F] font-sans selection:bg-[#0071e3]/20 flex items-center justify-center p-6">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#0071e3]/5 blur-[120px] rounded-full" />
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-zinc-100 blur-[120px] rounded-full" />
            </div>

            <div className="w-full max-w-[440px] relative z-10">
                <div className="bg-[#F5F5F7] border border-black/5 rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                    <div className="text-center mb-12">

                        <h1 className="text-4xl font-semibold tracking-tighter mb-3 leading-tight">
                            Bienvenue sur votre <br /> <span className="text-[#0071e3]">Espace Gestion</span>
                        </h1>
                        <p className="text-zinc-500 text-sm font-medium">
                            Accédez à votre espace de gestion personnalisé.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="nom@exemple.com"
                                    className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 focus:border-[#0071e3] transition-all placeholder:text-zinc-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Mot de passe</label>
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 focus:border-[#0071e3] transition-all placeholder:text-zinc-300"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-1">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-[#0071e3] focus:ring-[#0071e3]/20" />
                                <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-800 transition-colors">Rester connecté</span>
                            </label>
                            <a href="#" className="text-xs font-semibold text-[#0071e3] hover:underline underline-offset-4">Oublié ?</a>
                        </div>

                        <div className="pt-4">
                            <button
                                formAction={login}
                                className="w-full py-4 bg-[#0071e3] text-white rounded-2xl font-semibold text-[15px] hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-lg shadow-[#0071e3]/20"
                            >
                                Se connecter
                            </button>
                        </div>
                    </form>
                </div>

                <p className="text-center mt-12 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                    Alliance Wingo x Auren
                </p>
            </div>
        </div>
    )
}
