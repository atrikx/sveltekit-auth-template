<script lang="ts">
    // Components
    import ErrorParagraph from "$lib/components/ErrorParagraph.svelte";
    import CenterLayout from "$lib/components/CenterLayout.svelte";
    import FormEnhanced from "$lib/components/FormEnhanced.svelte";
    import InputText from "$lib/components/InputText.svelte";
    import Button from "$lib/components/Button.svelte";
    import Card from "$lib/components/Card.svelte";
    // Configs    
    import { buttonsWidth, formInputsSignUp, inputsWidth } from "$lib/configs";
    // Classes
    import { formHandler } from "$lib/classes/formHandler";
    // SvelteKit
	import { applyAction } from '$app/forms';


    let showEmptyFields = false;


    // This function should be imported from externall
    const enhanceFunction = ( { form, data, cancel }: { form: HTMLFormElement, data: FormData, cancel: VoidFunction },
                            ArrayFormInputsObject: { name: string }[] ) => {
    const formActions = { form, data, cancel };
    const findEmptyFields = new formHandler().checkEmptyFieldsBeforeSend(formActions, ArrayFormInputsObject);
    /**
     * If externally, var showEmptyFields will be out of range.
     * It could work if we add a param callback function like "setShowEmptyTrue()..."
     * example: <FormEnhanced enhanceFunction={enhanceFunction(setShowEmptyFieldsTrue, setShowEmptyFieldsFalse)}/>
     * but i'm pretty sure it won't work.
    */
    findEmptyFields ? showEmptyFields = true : showEmptyFields = false;
    return async ({ result }: any) => (result.type === 'redirect') ? applyAction(result) : console.log('login incorrect');
}
</script>

<svelte:head>
    <title>Sign up</title>
</svelte:head>

<CenterLayout>
    <Card title={"Sign up"}>
        <FormEnhanced enhanceFunction={enhanceFunction}>
            {#if showEmptyFields}
                <ErrorParagraph msg={"Found empty fields!!"}></ErrorParagraph>
            {/if}
            {#each formInputsSignUp as { name, placeholder, type } }
                <InputText inputWidth={inputsWidth} name={name} placeholder={placeholder} type={type} />
            {/each}
            <Button buttonWidth={buttonsWidth} text={"Register"}></Button>
           
        </FormEnhanced>
    </Card>
</CenterLayout>