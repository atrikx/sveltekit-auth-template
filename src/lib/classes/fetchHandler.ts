/* eslint-disable @typescript-eslint/no-explicit-any */


/** 
 * This is function is closed for modifications.
 * The second principle of SOLID: read more on https://en.wikipedia.org/wiki/SOLID
 * Changes are made on .env file 
*/


/** 
 * This class refeers to your "custom" API.
 * 
 */


export class Fetch {

    private url: string = import.meta.env.VITE_MYAPI;

    async headers (token?:string) {
        return {
            'Authorization': "Bearer " + token,
            'Content-Type': "application/json",
            'accept': "application/json"
        }
    }

    // function method post
    async post(endpoint: string, data: any, token?: string,) {

        const headers = await this.headers(token);
        const request = await fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });
        const response = await request;
        return response;
    }

    // function method get
    async get(endpoint: string, token: string) {

        const request = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + token,
                "Content-Type": "application/json"
            }
        });
        const response = await request;
        return response;
    }

}
