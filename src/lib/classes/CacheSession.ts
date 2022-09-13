/* eslint-disable @typescript-eslint/no-explicit-any */
import { browser } from '$app/environment';


/**
 * Class responsible for store data in browser
 */
export class CacheSession {

    public async setSessionItem() {
        null
    }

    /**
     * This function is responsible for store specific a request.formData type
     * Params usage example (formData, 'email', 'username',)
     * It's like a "remember what user is writing" but just for his own browser
     * and just for session "tab", if he closes tab and open again will be deleted.
     * @param formData: Type request.formData
     * @param args: inputNames you want to cache
     */
    public async saveFormData(formData: any, ...args: any) {
        const times = await args.length;

        for (let i = 0; i < times; i++) {
            const inputName = await args[i]
            const value = String(await formData.get(inputName)) ?? "";
            (browser ? sessionStorage.setItem(inputName, value) : "");
        }
    };

    public checkSessionStorage = (inputField: string) => browser ? sessionStorage.getItem(inputField) ?? '' : null;

}

export default new CacheSession();






