import type { Handle } from "@sveltejs/kit";
import * as cookie from 'cookie'
/** @type {import('@sveltejs/kit').Handle} */


export const handle: Handle = async ({ event, resolve }) => {
    
    // Wraps request
    const getCookiesFromRequest = event.request.headers.get('cookie')
    const cookies = cookie.parse(getCookiesFromRequest ?? '')
    event.locals.user = {token: cookies.token}

    const response = await resolve(event);
    return response;
}