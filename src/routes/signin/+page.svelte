<script lang="ts">
	// Components
	import ErrorParagraph from '$lib/components/ErrorParagraph.svelte';
	import CenterLayout from '$lib/components/CenterLayout.svelte';
	import FormEnhanced from '$lib/components/FormCustomEnhanced.svelte';
	import InputText from '$lib/components/InputText.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	// Classes
	import { cacheSession } from '$lib/classes/cacheSession';
	import { formHandler } from '$lib/classes/formHandler';
	// Configs
	import { urlSignUp, formObjectSignIn } from '$lib/configs';
	// SvelteKit
	import { writable } from 'svelte/store';


	// Reactive Components
	let showEmptyFields: boolean = false;
	let showIncorrectEmailOrPassword: boolean = false;

	// Session Storage
	const checkSessionStorage = new cacheSession().getItem;
	const restore = { email: checkSessionStorage('email') };
	const store = {
		email: writable(restore.email),
		password: writable('')
	};

    // Scope Functions
    function setShowEmptyFieldsTrue () {showEmptyFields = true;}
    function setShowEmptyFieldsFalse () {showEmptyFields = false;}
	
    function enhanceCustom ( { form, data, cancel }: ActionParams ) {
    
        const formObject = formObjectSignIn;
        const formAction = { form, data, cancel };
        const enhance = new formHandler(formObject).enhanceFunction
        return enhance(formAction, setShowEmptyFieldsTrue, setShowEmptyFieldsFalse)
    }

</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>

<CenterLayout>

	<Card title="Sign-in">

		<FormEnhanced enhanceCustom={enhanceCustom}
		>
			{#if showIncorrectEmailOrPassword}
				<ErrorParagraph msg="Incorrect password or email doesn't exist."/>
			{/if}
			
			{#if showEmptyFields}
				<ErrorParagraph msg="There are empty fields."/>
			{/if}

			{#each formObjectSignIn as { name, placeholder, type } }
				<InputText placeholder={placeholder} type={type} inputWidth="60%" name={name}
				/>
			{/each}

			<a href={urlSignUp}> <p>Don't have an account?</p> </a>

			<Button text="CONTINUE" buttonWidth="50%" />

		</FormEnhanced>
	</Card>
</CenterLayout>
