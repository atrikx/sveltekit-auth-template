<script lang="ts">
    // Components
    import ErrorParagraph from "$lib/components/ErrorParagraph.svelte";
    import CenterLayout from "$lib/components/CenterLayout.svelte";
    import FormEnhanced from "$lib/components/FormCustomEnhanced.svelte";
    import InputText from "$lib/components/InputText.svelte";
    import Button from "$lib/components/Button.svelte";
    import Card from "$lib/components/Card.svelte";
    // Configs    
    import { buttonsWidth, formObjectSignUp, inputsWidth } from "$lib/configs";
    // Classes
    import { formHandler } from "$lib/classes/formHandler";

    // Reactive Components
    let showEmptyFields = false;


    // Scope Functions
    function setShowEmptyFieldsTrue () {showEmptyFields = true;}
    function setShowEmptyFieldsFalse () {showEmptyFields = false;}

    function enhanceCustom ( { form, data, cancel }: ActionParams ) {
    
        const formObject = formObjectSignUp;
        const formAction = { form, data, cancel };
        const enhance = new formHandler(formObject).enhanceFunction
        return enhance(formAction, setShowEmptyFieldsTrue, setShowEmptyFieldsFalse)
    }
    
</script>

<svelte:head>
    <title>Sign up</title>
</svelte:head>

<CenterLayout>
    <Card title={"Sign up"}>
        <FormEnhanced enhanceCustom={enhanceCustom}>
            {#if showEmptyFields}
                <ErrorParagraph msg={"Found empty fields!!"}></ErrorParagraph>
            {/if}
            {#each formObjectSignUp as { name, placeholder, type } }
                <InputText inputWidth={inputsWidth} name={name} placeholder={placeholder} type={type} />
            {/each}
            <Button buttonWidth={buttonsWidth} text={"Register"}></Button>
           
        </FormEnhanced>
    </Card>
</CenterLayout>