import { createClient } from '../../../utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const supabase = await createClient()

    // Check if a user's logged in
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (user) {
        await supabase.auth.signOut()
    }

    const url = req.nextUrl.clone()
    url.pathname = '/login'

    // Clear cookies or whatever if needed, but supabase.auth.signOut() handles it mostly
    // However, revalidatePath is good.
    revalidatePath('/', 'layout')

    return NextResponse.redirect(url, {
        status: 302,
    })
}
