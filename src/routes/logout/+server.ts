
import { redirect, type ServerLoadEvent } from '@sveltejs/kit';
import * as cookie from 'cookie'
/** @type {import('./$types').Action} */


export async function GET({ setHeaders }: ServerLoadEvent) {
    setHeaders({
        'set-cookie': cookie.serialize('token', '')
    });
    throw redirect(301, "/login")
}