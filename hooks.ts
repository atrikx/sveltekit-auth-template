import type { Handle } from "@sveltejs/kit";
import * as cookie from 'cookie'
/** @type {import('@sveltejs/kit').Handle} */


export const handle: Handle = async ({ event, resolve }) => {

    const cookieHeader = event.request.headers.get('cookie')
    const cookies = cookie.parse(cookieHeader ?? '')
    event.locals.user = {token: cookies.token}
    console.log('teste');
    

    const response = await resolve(event);
    return response;
}