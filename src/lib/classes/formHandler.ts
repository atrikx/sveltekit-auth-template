import { applyAction } from "$app/forms";

/**
 * Class responsible to handler with forms.
 */
export class formHandler {
    formObject

    constructor ( formInputsObjects: { name: string }[]  ) {
        this.formObject = formInputsObjects;
        
    }

    public enhanceFunction = ( { form, data, cancel }: ActionParams,
                                showEmptyFieldsTrue: VoidFunction,
                                showEmptyFieldsFalse: VoidFunction,
    ) => {
        const formActions = { form, data, cancel };

        // Validation EmptyFields
        const findEmptyFields = this.checkEmptyFieldsBeforeSend(formActions);
        findEmptyFields ? showEmptyFieldsTrue() : showEmptyFieldsFalse() ;

        // TODO Validation findPasswordMatch
        // TODO Validation findInvalidCharactersInLogin?
        return async ({ result }: any) => (result.type === 'redirect') ? applyAction(result) : null;
    }

        // 
    /**
     * This method function's is to handle a validation for enhance in forms,
     * that was built to work within FormActions Feature;
     * It is supposed to run inside a enhance function.
     * Check on: https://kit.svelte.dev/docs/form-actions
     * 
     * @param param0: pass { form, data, cancel }
     * @param formInputsObjects: Which input fields you want to check if its empty
     * @returns true if foundEmptyValue false if not
     */

    // TODO converts to private method
    public checkEmptyFieldsBeforeSend = ( { form, data, cancel }: ActionParams ) => {

        let foundEmptyValue = false;

        this.formObject.forEach( (element) => {  
            if (data.get(element.name) === '') {
                cancel();
                foundEmptyValue = true;
            }
        });
        
        return foundEmptyValue ? true : false;
}}
