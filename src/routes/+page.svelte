<script lang="ts">
	import CenterLayout from '$lib/components/CenterLayout.svelte';
	import Button from '$lib/components/Button.svelte';
	import InputText from '$lib/components/InputText.svelte';
	import Form from '$lib/components/Form.svelte';
	import Card from '$lib/components/Card.svelte';
	import { CacheSession } from '$lib/classes/CacheSession';
	import { urlSignUp, urlSignIn, urlMyAccount } from '$lib/configs';
	import { Fetch } from '$lib/classes/Fetch';
	import { error } from '@sveltejs/kit';
	import { writable } from 'svelte/store';
	const password = writable('');

	const submitForm = async (data: HTMLFormElement) => {
		try {
			const fetchDataUrl = urlSignIn;
			const getFormData = new FormData(data.currentTarget);

			const jsonData = {
				email: getFormData.get('email'),
				password: getFormData.get('password')
			};

			// Save email field on SessionStorage
			await new CacheSession().saveFormData(getFormData, 'email');

			// Send values through POST Request
			const request = await new Fetch().post(fetchDataUrl, jsonData);
			const response_api = await request;
			if (!response_api.ok) throw error(400, 'fail');

			// Redirect to login sucessful
			window.location.href = urlMyAccount;
		} catch {
			alert('Login failed');
		}
	};

	// Session Storage
	const checkSessionStorage = new CacheSession().checkSessionStorage;
	const restoreData = {
		email: checkSessionStorage('email')
	};
	const storedData = {
		email: writable(restoreData.email)
	};

</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>

<CenterLayout>
	<Card title="Sign-in">
		<Form {submitForm}>

			<InputText 
				bindValue={storedData.email} 
				placeholder="Email" 
				inputWidth="60%" 
				name="email" 
			/>

			<InputText
				bindValue={password}
				placeholder="Password"
				type="password"
				inputWidth="60%"
				name="password"
			/>

			<a href={urlSignUp}>
				<p>Don't have an account?</p>
			</a>

			<Button 
				text="CONTINUE" 
				buttonWidth="50%" 
			/>
		</Form>
	</Card>
</CenterLayout>
