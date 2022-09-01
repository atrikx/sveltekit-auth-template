import { API } from '$lib/api';
import type { ServerLoadEvent } from '@sveltejs/kit';
/** @type {import('./$types').Action} */
import { error } from '@sveltejs/kit';


/**
 * This goes to talk directly to your custom API
 */

export async function POST({ request }: ServerLoadEvent) {

  const formData = await request.formData();

  const username =   formData.get('username');
  const email = (formData.get('email'));
  const password = (formData.get('password'));

  const request_api = await new API().post('criar-conta', {"username": username, "email": email, "password": password})
  if (!request_api.ok) throw error(400, 'fail')

  const response_api = await request_api.json();

  return await response_api
}