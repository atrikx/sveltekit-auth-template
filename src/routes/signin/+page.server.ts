// SvelteKit
import type { ServerLoadEvent } from "@sveltejs/kit";
import type { RequestEvent } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import { invalid } from '@sveltejs/kit';

// Lib
import { Fetch } from "$lib/classes/fetchHandler";
import { urlMyAccount } from "$lib/configs";
import { apiLogin } from "$lib/configs";


/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }: RequestEvent) => {

    const formData = await request.formData();
    const json = Object.fromEntries(formData); 
    
    
    // fetch data
    const responseApi = await new Fetch().post(apiLogin, json, '');
    if (!responseApi.ok) return invalid(400, { missing: true });
    const responseData = await responseApi.json();
  
    // send token
    cookies.set('token', responseData?.token || '');

    // allow login
    throw redirect(301, urlMyAccount)
    
  }
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: ServerLoadEvent) {

  // Define Constants        
  const token = locals.user.token;

  // isLoggedIn?  
  if (token) throw redirect(301, urlMyAccount);

}