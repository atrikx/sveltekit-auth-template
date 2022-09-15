import { Fetch } from "$lib/classes/fetchHandler";
import { apiMyAccount, urlSignIn } from "$lib/configs";
import { redirect } from "@sveltejs/kit";

import type { ServerLoadEvent, RequestEvent } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
/**
 * This will load all informations from user...
 * 
 */
export async function load({ locals, cookies }: ServerLoadEvent) {

    // Define Constants        
    const url: string = apiMyAccount;
    const token = locals.user?.token;

    // If user isn't logged in, redirect.
    if (!token) {throw redirect(301, urlSignIn);}

    // TODO add security layer (if token !== type token throw redirect)
    
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

/** @type {import('./$types').Actions} */
export const actions = {
  logout: async ({ cookies }: RequestEvent) => {
    
    // reset token
    cookies.set('token', '');

    // loggedOut
    throw redirect(301, urlSignIn)
    
  }
};