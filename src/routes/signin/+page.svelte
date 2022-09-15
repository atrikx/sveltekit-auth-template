<script lang="ts">
	// Components
	import ErrorParagraph from '$lib/components/ErrorParagraph.svelte';
	import CenterLayout from '$lib/components/CenterLayout.svelte';
	import FormEnhanced from '$lib/components/FormEnhanced.svelte';
	import InputText from '$lib/components/InputText.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';

	// Classes
	import { cacheSession } from '$lib/classes/cacheSession';
	import { formHandler } from '$lib/classes/formHandler';

	// Configs
	import { urlSignUp, formInputsSignIn } from '$lib/configs';

	// SvelteKit
	import { writable } from 'svelte/store';
	import { applyAction } from '$app/forms';
	/** @type {import('./$types').ActionData} */

	// Reactive Components
	let showEmptyFields: boolean = false;
	let showIncorrectEmailOrPassword = false;

	// Session Storage
	const checkSessionStorage = new cacheSession().getItem;
	const restore = { email: checkSessionStorage('email') };
	const store = {
		email: writable(restore.email),
		password: writable('')
	};

</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>

<CenterLayout>

	<Card title="Sign-in">

		<FormEnhanced enhanceFunction={ ( { form, data, cancel } ) => {

			// check for empty fields
			const enhanceData = { form, data, cancel };
			const check = new formHandler().checkEmptyFieldsBeforeSend(enhanceData, formInputsSignIn);
			check ? showEmptyFields = true : showEmptyFields = false;
			console.log(check, 'check');
			

			// check for user exists or password match
			return async ({ result }) => await result.type === 'redirect' ? applyAction(result) : showIncorrectEmailOrPassword = true;
			}
		}
		>
			{#if showIncorrectEmailOrPassword}
				<ErrorParagraph msg="Incorrect password or email doesn't exist."/>
			{/if}
			
			{#if showEmptyFields}
				<ErrorParagraph msg="There are empty fields."/>
			{/if}

			{#each formInputsSignIn as { name, placeholder, type } }
				<InputText placeholder={placeholder} type={type} inputWidth="60%" name={name}
				/>
			{/each}

			<a href={urlSignUp}> <p>Don't have an account?</p> </a>

			<Button text="CONTINUE" buttonWidth="50%" />

		</FormEnhanced>
	</Card>
</CenterLayout>
