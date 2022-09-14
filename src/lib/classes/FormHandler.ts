
/**
 * Class responsible to handler with forms.
 */
export class FormHandler {

    // 
/**
 * This function is built to work with Form Actions Feature;
 * It is supposed to run inside a enhance function.
 * Check on: https://kit.svelte.dev/docs/form-actions
 * 
 * @param param0: pass { form, data, cancel }
 * @param setShowErrorTrue: It takes a function that set a scope variable to true.
 * @param setShowErrorFalse: It takes a function that set a scope variable to false.
 * @param ArrayOfFields: Which input fields you want to check if its empty
 * @returns 
 */

public checkEmptyFieldsBeforeSend = (
    {form, data, cancel}: any, 
    formInputs: { name: string }[]) => {

    let foundEmptyValue = false;

    formInputs.forEach( (element) => {  
        if (data.get(element.name) === '') {
            cancel();
            foundEmptyValue = true;
        }
    });
    
    return foundEmptyValue ? true : false;
}

}

export default new FormHandler();

