/** 
 * This is function is closed for modifications.
 * The second principle of SOLID: read more on https://en.wikipedia.org/wiki/SOLID
 * Changes are made on .env file 
*/


/** 
 * This class refeers to your "custom" API.
 * 
 */
export class API {

    public readonly url: string = import.meta.env.VITE_MYAPI;

    async post(endpoint: string, data: Record<string, unknown>) {
        const request = await fetch(this.url + endpoint, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        const response = await request
        return response
    }

    async get(endpoint: string, token: string) {
        console.log("Classe API methodo get foi executado: ", endpoint);
        
        const request = await fetch(this.url + endpoint, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
              }
        })
        const response = await request
        return response
    }

}
