import { browser } from '$app/environment';

/**
 * This class is responsible to cache data inside client Browser.
 */
export class CacheSession {

    public async setSessionItem() {
        null
    }

    public async FromFormData(formData: any, ...args: any) {
        const times = await args.length;

        for (let i = 0; i < times; i++) {
            const inputName = await args[i]
            const value = String(await formData.get(inputName)) ?? "";
            (browser ? sessionStorage.setItem(inputName, value) : "");
        }
    };
}