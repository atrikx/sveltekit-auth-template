<script lang="ts">
	import { devalue } from 'devalue';
	import { logout } from './+page.server';

	export let data;

	const user_ = devalue(data?.username || '');
	const email_ = devalue(data?.email || '')

</script>

<svelte:head>
	<title>My Account</title>
</svelte:head>

<div class="mainLogin">
	<div class="cardLogin">
		<h1>My Account</h1>
		<form on:submit|preventDefault={logout} class="formStyle">
			<div class="textfield">
				<h2>Name: {user_}</h2>
			</div>
			<div class="textfield">
				<h2>Email: {email_}</h2>
			</div>
			<div class="buttonPos">
				<input type="submit" class="btnRegister" value="Logout" />
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

	.buttonPos {
		display: flex;
		width: 80%;
	}

	.btnRegister {
		width: 100%;
		background-color: #132b50;
		color: #f6f7f8;
		padding: 1vh 1vw;
		margin: 25px;
		border: none;
		border-radius: 10px;
		outline: none;
		text-transform: uppercase;
		letter-spacing: 1px;
		text-align: center;
		text-justify: auto;
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
