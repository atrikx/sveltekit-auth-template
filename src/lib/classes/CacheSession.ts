/* eslint-disable @typescript-eslint/no-explicit-any */
import { browser } from '$app/environment';


/**
 * Class responsible for store data in browser
 */
export class CacheSession {


    public setItem = (key: string, value: string) => {
        browser ? sessionStorage.setItem(key, value): null;
    }

    /**
     * For each element you pass in array, 
     * it will save in sessionStorage as example:
     * key: email, value: ickynho7@outlook.com
     * @param formData : request.formData()
     * @param arrayOfInputs : [ 'email', 'username' ]
     */
    public async saveFormData(formData: any, arrayOfInputs: any) {
        arrayOfInputs.forEach( (element: string) => {
            const key = element;
            const value = String(formData.get(key)) ?? "";
            browser ? sessionStorage.setItem(key, value) : "";


        });
    };

    /**
     * You should use this method in +page.svelte to get values stored
     * in sessionStorage client-side.
     * @param key : You should select which key you want to get values
     * @returns value from a key stored in sessionStorage
     */
    public getItem = (key: string) => browser ? sessionStorage.getItem(key) ?? '' : null;

}

export default new CacheSession();






