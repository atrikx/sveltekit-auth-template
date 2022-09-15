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

    const testeEnhance = ( { form, data, cancel }: { form: HTMLFormElement, data: FormData, cancel: VoidFunction },
                            ArrayFormInputsObject: { name: string }[] ) => {

    const formData = { form, data, cancel };
    const findEmptyFields = new formHandler().checkEmptyFieldsBeforeSend(formData, ArrayFormInputsObject);

    findEmptyFields ? showEmptyFields = true : showEmptyFields = false;

    return async ({ result }: any) => {
        console.log(result);
        if (result.type === 'redirect') {
            applyAction(result)
            console.log('login redirect, approve!!');
            return
        }
        console.log('login failed');
    }
}

</script>

<svelte:head>
    <title>Sign up</title>
</svelte:head>

<CenterLayout>
    <Card title={"Sign up"}>
        <FormEnhanced enhanceFunction={testeEnhance}>
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