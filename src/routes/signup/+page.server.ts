// SvelteKit
import type { RequestEvent } from "@sveltejs/kit";
import { invalid } from '@sveltejs/kit';
import { redirect } from "@sveltejs/kit";
// Configs
import { apiNewAccount, urlSignIn } from "$lib/configs";
// Classes
import { Fetch } from "$lib/classes/fetchHandler";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }: RequestEvent) => {

    // Getting FormData and convert to an Object...
    const formData = await request.formData();
    const json = Object.fromEntries(formData); 

    // Feting data...
    const responseApi = await new Fetch().post(apiNewAccount, json, '').catch(() => {console.log('API offline');
    });
    if (!responseApi?.ok) return invalid(400, { missing: true });

    // User created
    throw redirect(301, urlSignIn)
    
  }
};