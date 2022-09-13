<script lang="ts">
	import CenterLayout from '$lib/components/CenterLayout.svelte';
	import Button from '$lib/components/Button.svelte';
	import InputText from '$lib/components/InputText.svelte';
	import FormEnhanced from '$lib/components/FormEnhanced.svelte';
	import Card from '$lib/components/Card.svelte';
	import { CacheSession } from '$lib/classes/CacheSession';
	import { urlSignUp, urlSignIn, urlMyAccount } from '$lib/configs';
	import { Fetch } from '$lib/classes/Fetch';
	import { error } from '@sveltejs/kit';
	import { writable } from 'svelte/store';
	import { checkFormBeforeSend } from './handleForm';
	import { applyAction } from '$app/forms';
	/** @type {import('./$types').ActionData} */


	const password = writable('');

	export let login = false;

	$: if (login) {
		window.location.href = '/account';
	}

	// Session Storage
	const checkSessionStorage = new CacheSession().checkSessionStorage;
	const restoreData = {
		email: checkSessionStorage('email')
	};
	const storedData = {
		email: writable(restoreData.email)
	};

	let displayInvalidEmail: boolean = false;

	const setDisplayInvalidEmailTrue = () => {
		displayInvalidEmail = true;
	}

	const setDisplayInvalidEmailFalse = () => {
		displayInvalidEmail = false;
	}

	

</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>

<CenterLayout>
	<Card title="Sign-in">
		<FormEnhanced enhanceFunction={({ form, data, cancel }) => {
			
			checkFormBeforeSend({form, data, cancel}, setDisplayInvalidEmailTrue, setDisplayInvalidEmailFalse)

			return async ( {result} ) => {
				if (await result.type === 'invalid') {
                await applyAction(result);
            }
			}
		}
			}
		>
		{#if displayInvalidEmail}
			<!-- Create a error component-->
			<p>incorrect</p>
			
		{/if}
		<InputText 
				bindValue={storedData.email} placeholder="Email" inputWidth="60%" name="email" />

		<InputText
				bindValue={password}
				placeholder="Password"
				type="password"
				inputWidth="60%"
				name="password"/>

		<a href={urlSignUp}>
				<p>Don't have an account?</p></a>


			
		<Button 
				text="CONTINUE" buttonWidth="50%" />
		</FormEnhanced>
	</Card>
</CenterLayout>
