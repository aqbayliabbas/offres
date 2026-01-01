import { createClient } from '../../utils/supabase/server'
import { redirect } from 'next/navigation'
import { ArrowRight, Bell, Search, ShieldCheck, LayoutDashboard } from 'lucide-react'

export default async function Dashboard() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

    const isAdmin = profile?.role === 'admin'

    return (
        <div className="min-h-screen bg-white text-[#1D1D1F] font-sans selection:bg-[#0071e3]/20">
            {/* Navigation */}
            <nav className="fixed top-0 inset-x-0 h-20 bg-white/80 backdrop-blur-xl border-b border-black/5 z-50 px-6">
                <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <span className="text-xl font-semibold tracking-tighter">Gestion Hôtelière</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-zinc-400 hover:text-[#1D1D1F] transition-colors relative">
                            <Bell className="w-5 h-5" />
                        </button>
                        <div className="h-8 w-px bg-black/5 mx-2"></div>
                        <form action="/auth/signout" method="post">
                            <button className="px-5 py-2.5 bg-[#F5F5F7] hover:bg-zinc-200 border border-black/5 rounded-full text-xs font-bold tracking-tight text-zinc-600 transition-all active:scale-[0.98]">
                                Déconnexion
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto pt-40 pb-24 px-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-8 max-w-2xl mx-auto py-20">
                    <div className="w-24 h-24 bg-[#F5F5F7] rounded-[32px] flex items-center justify-center border border-black/5 mb-4">
                        <LayoutDashboard className="w-10 h-10 text-zinc-300" />
                    </div>

                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0071e3]/10 text-[#0071e3] text-[10px] font-black uppercase tracking-widest rounded-md mx-auto">
                            Espace Personnel
                        </div>
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight">
                            Votre tableau de bord <br /> sera bientôt <span className="text-zinc-400">disponible.</span>
                        </h1>
                        <p className="text-zinc-500 text-lg font-medium leading-relaxed">
                            Nous finalisons la configuration de votre espace de gestion hôtelière. Vous serez notifié dès que vos premières analyses seront prêtes.
                        </p>
                    </div>

                    <div className="pt-8">
                        <div className="p-10 bg-black rounded-[40px] text-white w-full">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <ShieldCheck className="w-5 h-5 text-[#0071e3]" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#0071e3]">Accès Sécurisé</span>
                            </div>
                            <p className="text-zinc-400 text-sm mb-0">Connecté en tant que</p>
                            <p className="text-lg font-semibold tracking-tight">{user.email}</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="fixed bottom-0 inset-x-0 py-10 border-t border-black/5 px-6 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} SYSTÈME DE RÉSERVATION • ALLIANCE WINGO X AUREN
                    </p>
                    <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
                        Configuration initiale en cours
                    </p>
                </div>
            </footer>
        </div>
    )
}
