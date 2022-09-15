import type { ServerLoadEvent } from "@sveltejs/kit";
import { Fetch } from "$lib/classes/fetchHandler";
import { apiMyAccount, urlSignIn } from "$lib/configs";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }: ServerLoadEvent) {

    // Define Constants        
    const url: string = apiMyAccount;
    const token = locals.user?.token;

    // isLoggedIn?
    if (!token) {
        throw redirect(301, urlSignIn);
    }
    
    // Fetch     
    const response = await new Fetch().get(url, token).catch(() => {throw redirect(301, "/APIisOffline")});
    if (!response?.ok) {
        cookies.set('token', '');
        throw redirect(301, urlSignIn);
    }    

    const dataReceived = await response.json();
    
    return {
        username: dataReceived.username,
        email: dataReceived.email
    };


}


export const logout = () => {
    return window.location.href = "/logout"
}