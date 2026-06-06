export const ssr = false;
import { getToken } from "$lib/api/users";
import { redirect } from "@sveltejs/kit";

export async function load() {
    const token = getToken()
    if(!token){
        redirect (307,'/login')
    }
    return  {token}
}
