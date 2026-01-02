import { createClient } from '../../utils/supabase/server'
import { redirect } from 'next/navigation'
import DashboardContent from '../../components/general/DashboardContent'

export default async function Dashboard() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    // Parallel fetching on the server
    const [hotelsRes, feedbacksRes] = await Promise.all([
        supabase.from('basic_infos').select('*', { count: 'exact' }).order('created_at', { ascending: false }),
        supabase.from('offer_feedbacks').select('*', { count: 'exact' }).order('created_at', { ascending: false })
    ])

    const hotelCount = hotelsRes.count || 0
    const feedbackCount = feedbacksRes.count || 0
    const feedbacks = feedbacksRes.data || []
    const hotels = hotelsRes.data || []

    return (
        <DashboardContent
            feedbacks={feedbacks}
            hotels={hotels}
            hotelCount={hotelCount}
            feedbackCount={feedbackCount}
        />
    )
}
