import { createClient } from '../../utils/supabase/server'
import { redirect } from 'next/navigation'
import {
    Bell,
    Hotel,
    Plus,
    LogOut,
    LayoutDashboard
} from 'lucide-react'
import HotelCard from '../../components/general/HotelCard'

export default async function Dashboard() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    // Fetch all hotels
    const { data: hotels, count } = await supabase
        .from('basic_infos')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })

    return (
        <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans">
            {/* Navigation */}
            <nav className="fixed top-0 inset-x-0 h-20 bg-white/80 backdrop-blur-xl border-b border-black/5 z-50 px-6">
                <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <LayoutDashboard className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xl font-semibold tracking-tighter">Espace Gestion</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full border border-black/5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#34C759]"></div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Live View</span>
                        </div>
                        <form action="/auth/signout" method="post">
                            <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
                                <LogOut className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto pt-32 pb-24 px-6">
                {/* Header KPI Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-[#0071e3]/10 rounded-2xl flex items-center justify-center text-[#0071e3]">
                                <Hotel className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#34C759]">Actif en réel</span>
                        </div>
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">Nombre d'Hôtels</p>
                        <h2 className="text-4xl font-semibold tracking-tighter leading-none">{count || 0}</h2>
                    </div>
                </div>

                {/* List of Hotel Cards */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                        <h3 className="text-2xl font-semibold tracking-tight">Liste des Établissements</h3>
                        <span className="px-3 py-1 bg-white border border-black/5 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-400">
                            {count} Total
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {hotels?.map((hotel) => (
                            <HotelCard key={hotel.id} hotel={hotel} />
                        ))}

                        {(!hotels || hotels.length === 0) && (
                            <div className="py-20 bg-white/50 rounded-[40px] border border-dashed border-zinc-200 flex flex-col items-center justify-center text-center">
                                <Hotel className="w-12 h-12 text-zinc-200 mb-4" />
                                <p className="text-zinc-400 font-medium">Aucun établissement enregistré.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t border-black/5 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} SYSTÈME DE RÉSERVATION • ALLIANCE WINGO X AUREN
                    </p>
                </div>
            </footer>
        </div>
    )
}
