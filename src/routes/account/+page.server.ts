import { redirect, type ServerLoadEvent } from "@sveltejs/kit";
import { Fetch } from "$lib/classes/Fetch";
import { apiMyAccount } from "$lib/configs";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: ServerLoadEvent) {
    try {
        
        // Define Constants        
        //const url: string = apiMyAccount;
        //const token = locals.user.token;
        console.log(locals);
        

        // Fetch     
        //const response = await new Fetch().get(url, token)
        // if (!response.ok) throw redirect(301, "/login");

        //const dataReceived = await response.json();
/*
        return {
            username: dataReceived.username,
            email: dataReceived.email
        };

        */
    } catch { throw redirect(301, "/login") }

}


export const logout = () => {
    return window.location.href = "/logout"
}