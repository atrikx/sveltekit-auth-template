/** @type {import('./$types').Actions} */
import type { RequestEvent } from "@sveltejs/kit";
import { invalid } from '@sveltejs/kit';
import { redirect } from "@sveltejs/kit";
import { urlMyAccount } from "$lib/configs";
import { apiLogin } from "$lib/configs";
import { Fetch } from "$lib/classes/fetchHandler";

export const actions = {
  default: async ({ request, cookies }: RequestEvent) => {

    const formData = await request.formData();
    const json = Object.fromEntries(formData); 
    
    
    // fetch data
    const responseApi = await new Fetch().post(apiLogin, json, '').catch(() => {console.log('API offline');
    });
    if (!responseApi?.ok) return invalid(400, { missing: true });
    const responseData = await responseApi.json();
  
    // send token
    cookies.set('token', responseData?.token || '');

    // allow login
    throw redirect(301, urlMyAccount)
    
  }
};