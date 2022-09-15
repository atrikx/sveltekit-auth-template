import type { ServerLoadEvent } from "@sveltejs/kit";
import { Fetch } from "$lib/classes/fetchHandler";
import { apiMyAccount } from "$lib/configs";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: ServerLoadEvent) {

    // Define Constants        
    const url: string = apiMyAccount;
    const token = locals.user.token;
    console.log(token);

    // Fetch     
    const response = await new Fetch().get(url, token).catch(() => {throw redirect(301, "/APIisOffline")});
    if (!response?.ok) throw redirect(301, "/login");

    const dataReceived = await response.json();
    console.log(dataReceived);
    
    return {
        username: dataReceived.username,
        email: dataReceived.email
    };


}


export const logout = () => {
    return window.location.href = "/logout"
}