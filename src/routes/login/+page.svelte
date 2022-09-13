<script lang="ts">
	import { writable } from 'svelte/store';
	import { CacheSession } from '../../lib/classes/CacheSession';
	import { browser } from '$app/environment';


	const submitForm = async (data: any) => {
		try {
			// Get values the user send in login-form.
			const formData = new FormData(data.currentTarget);

			// Remember user input
			await new CacheSession().saveFormData(formData, 'email');

			// Send values through POST Request
			const res = await fetch(
				'/login', 
				{method: 'POST',
				body: formData}
				);
			await res;
			if (!res.ok) {
				return alert('Invalid');
			}
			window.location.href = '/account';
		} catch {
			console.log('');
		}
	};

	const cache = browser ? sessionStorage.getItem('email') ?? '' : '';
	export const cacheEmail = writable(cache);
</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>

<div class="mainLogin">
	<div class="cardLogin">
		<h1>Sign-in</h1>
		<form on:submit|preventDefault={submitForm} class="formStyle">
			<div class="textfield">
				<input type="text" placeholder="Email/Phone" name="email" bind:value={$cacheEmail} />
			</div>
			<div class="textfield">
				<input type="password" placeholder="Password" name="password" />
			</div>
			<a href="/new-account">
				<p>Don't have an account?</p>
			</a>
			<div class="buttonPos">
				<input type="submit" class="btnRegister" value="Continue" />
			</div>
		</form>
	</div>
</div>

<style>
	:global(body) {
		background-color: #f3f3f9;
		margin: 0%;
	}
	.mainLogin {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cardLogin {
		background: #ffffff;
		width: 30em;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 3vh 3vw;
		border-radius: 15px;
		box-shadow: 0px 30px 30px #f3f3f9;
	}

	.cardLogin > h1 {
		color: #1d3153;
		font-weight: 800;
		font-size: 2.5em;
		padding: 5px;
		padding-bottom: 1em;
		margin: 0px;
	}

	.textfield {
		display: flex;
		width: 80%;
	}

	.textfield > input::placeholder {
		color: #1d3153;
	}

	.textfield > input {
		width: 100%;
		border: 0px solid;
		border-color: rgba(20, 20, 20, 0.3);
		border-radius: 10px;
		padding: 20px;
		background: rgba(20, 20, 20, 0.1);
		color: #1d3153;
		box-shadow: 0px 0px 0px rgba(20, 20, 20, 0.5);
		outline: none;
		margin: 5% 0px;
	}

	.buttonPos {
		display: flex;
		width: 80%;
	}

	.btnRegister {
		width: 100%;
		background-color: #132b50;
		color: #f6f7f8;
		padding: 2vh 1vw;
		margin: 25px;
		border: none;
		border-radius: 10px;
		outline: none;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: 700;
		cursor: pointer;
		box-shadow: 0px 8px 8px #132b50;
	}

	.formStyle {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 85%;
	}

	.btnRegister:hover {
		background: rgb(77, 77, 77);
	}

	@media (max-width: 800px) {
		.mainLogin {
			width: 100vw;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.cardLogin {
			width: 80vw;
			height: 50vh;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-bottom: 50px;
		}
	}
</style>
