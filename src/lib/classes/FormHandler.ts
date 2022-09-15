

/**
 * Class responsible to handler with forms.
 */
export class formHandler {


    // 
/**
 * This function is built to work with Form Actions Feature;
 * It is supposed to run inside a enhance function.
 * Check on: https://kit.svelte.dev/docs/form-actions
 * 
 * @param param0: pass { form, data, cancel }
 * @param formInputsObjects: Which input fields you want to check if its empty
 * @returns true if foundEmptyValue false if not
 */

public checkEmptyFieldsBeforeSend = ( {form, data, cancel}: any, 
                                        formInputsObjects: { name: string }[]) => {

    let foundEmptyValue = false;

    formInputsObjects.forEach( (element) => {  
        if (data.get(element.name) === '') {
            cancel();
            foundEmptyValue = true;
        }
    });
    
    return foundEmptyValue ? true : false;
}}



export default new formHandler();

