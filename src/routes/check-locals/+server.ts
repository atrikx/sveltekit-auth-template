import type { RequestEvent } from "@sveltejs/kit";


export async function GET( { locals }: RequestEvent ) {
  
  console.log('request locals: ', locals);
  
  return new Response('ok');
  }