import { redirect, type ServerLoadEvent } from "@sveltejs/kit";
/** @type {import('./$types').PageServerLoad} */
import { Fetch } from "$lib/classes/Fetch";
import { apiMyAccount } from "$lib/configs";


export async function load({ locals }: ServerLoadEvent) {
    try {
        
        // Define Constants        
        const fetchUrlMyAccount: string = apiMyAccount;
        const token = locals.user.token;

        // Fetch        
        const requestData = await new Fetch().get(fetchUrlMyAccount, token)
        const response = await requestData
        if (!response.ok) throw redirect(301, "/login");

        const dataReceived = await response.json();

        return {
            username: dataReceived.username,
            email: dataReceived.email
        };

    } catch { throw redirect(301, "/login") }

}


export const logout = () => {
    return window.location.href = "/logout"
}