import type { ServerLoadEvent } from '@sveltejs/kit';
import * as cookie from 'cookie'
import { API } from '$lib/api';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').Action} */




export async function POST({ request, setHeaders }: ServerLoadEvent) {

  const formData = await request.formData();
  const email = formData.get('email') ?? '';
  const password = formData.get('password') ?? '';

  const request_api = await new API().post('login', {"email": email, "password": password})
  if (!request_api.ok) throw error(400, 'Fail')


  const response_api = await request_api.json();
  
  setHeaders({
    'set-cookie': cookie.serialize('token', String(response_api.token), {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // one week
  }),
  });
  return JSON.stringify({
    token: response_api.token
  });
}