import type { ServerLoadEvent } from '@sveltejs/kit';
import * as cookie from 'cookie'
import { Fetch } from '$lib/classes/Fetch';
import { error } from '@sveltejs/kit';
import { apiLogin } from '$lib/configs';
/** @type {import('./$types').Action} */




export async function POST({ request, setHeaders }: ServerLoadEvent) {

  //const formData = await request.formData();
  const getBodyValues = await request.json();

  const request_api = await new Fetch().post(apiLogin, getBodyValues, '');
  if (!request_api.ok) throw error(400, 'Fail');
  const response_api = await request_api.json(); 

  setHeaders({
    'set-cookie': cookie.serialize('token', String(response_api.token), {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // one week
  })});
  
}
