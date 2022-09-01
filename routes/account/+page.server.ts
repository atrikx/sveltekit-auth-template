import { redirect, type ServerLoadEvent } from "@sveltejs/kit";
/** @type {import('./$types').PageServerLoad} */
import { API } from "$lib/api";


export async function load({ locals }: ServerLoadEvent) {
    
    console.log(locals.user.token, "from load /account");
    
    const request_api = await new API().get('minha-conta', locals.user.token)
    const response = await request_api
    if (!response.ok) throw redirect(301, "/login");

    const received_data = await response.json();

    return {
        username: received_data.username,
        email: received_data.email
    };
}


export const logout = () => {
    return window.location.href = "/logout"
}