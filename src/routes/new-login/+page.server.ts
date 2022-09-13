/** @type {import('./$types').Actions} */
import type { RequestEvent } from "@sveltejs/kit";
import { invalid } from '@sveltejs/kit';
import { redirect } from "@sveltejs/kit";



export const actions = {
  default: async ({ request, cookies }: RequestEvent) => {

    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');


    console.log(email, password, "from actions");

    if (email !== 'admin') {
			return invalid(400, { email, missing: true });
		}

    if (password !== '1234') {
      return invalid(400, { password, incorrect: true });
    }
    cookies.set('token', '');

    // If sucess goto MyAccount
    throw redirect(301, '/myaccount')
    
  }
};