import { Fetch } from '$lib/classes/Fetch';
import { error } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';
/** @type {import('./$types').Action} */



/**
 * This goes to talk directly to your custom API
 */

export async function POST({ request }: ServerLoadEvent) {

  const formData = await request.formData();

  const username =   formData.get('username');
  const email = (formData.get('email'));
  const password = (formData.get('password'));

  const token = 'none';


  const request_api = await new Fetch().post('criar-conta', {username, email, password}, token)
  if (!request_api.ok) throw error(400, 'fail')

  const response_api = await request_api.json();

  return await response_api
}