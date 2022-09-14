<script lang="ts">
	import CenterLayout from '$lib/components/CenterLayout.svelte';
	import Button from '$lib/components/Button.svelte';
	import InputText from '$lib/components/InputText.svelte';
	import Form from '$lib/components/Form.svelte';
	import Card from '$lib/components/Card.svelte';
	import { CacheSession } from '../../lib/classes/CacheSession';
	import { writable } from 'svelte/store';
	import { urlSignUp, apiNewAccount } from '$lib/configs';
	import { Fetch } from '$lib/classes/Fetch';
	import { error } from '@sveltejs/kit';

	const submitForm = async (data: any) => {
		try {
			const endpointNewAccount = apiNewAccount;
			const token = 'none';
			const formData = new FormData(data.currentTarget);

			const username = formData.get('username');
			const email = formData.get('email');
			const password = formData.get('password');

			const jsonData = {
				username,
				email,
				password
			};

			// Save email field on SessionStorage
			await new CacheSession().saveFormData(formData, 'username', 'email');

			// Send values through POST Request
			const request_api = await new Fetch().post(endpointNewAccount, jsonData, token);
			const response_api = await request_api;
			if (!response_api.ok) throw error(400, 'fail');

			// Redirect to login sucessful
			window.location.href = '/login';
		} catch {
			alert('Login failed');
		}
	};

	const password = writable('');
	const checkSessionStorage = new CacheSession().checkSessionStorage;
	const restoreData = {
		username: checkSessionStorage('username'),
		email: checkSessionStorage('email')
	};

	const storedData = {
		username: writable(restoreData.username),
		email: writable(restoreData.email)
	};
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<CenterLayout>
	<Card title="Sign-in">
		<Form {submitForm}>
			<InputText
				bindValue={storedData.username}
				placeholder="Username"
				inputWidth="60%"
				name="username"
			/>

			<InputText bindValue={storedData.email} placeholder="Email" inputWidth="60%" name="email" />

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

			<Button text="CONTINUE" buttonWidth="50%" />
		</Form>
	</Card>
</CenterLayout>
