
import { browser } from "$app/environment"
import { redirect } from "@sveltejs/kit"
import type { LayoutLoad } from "../$types"

export const load: LayoutLoad = async () => {
    if (browser) {
        const token = localStorage.getItem('token')
        
        if (!token) {
            throw redirect(302, '/login')
        }
        
        return { token }
    }
    
    return {}
}