import { urlSignIn } from '$lib/configs';
import { redirect, type ServerLoadEvent } from '@sveltejs/kit';
/** @type {import('./$types').Action} */


export async function GET({ cookies }: ServerLoadEvent) {
    cookies.set('token', '')
    throw redirect(301, urlSignIn)
}