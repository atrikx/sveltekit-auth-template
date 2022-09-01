<script lang="ts">

	const submitForm = async (data: any) => {

		const formData = new FormData(data.currentTarget);
		const request = await fetch('/new-account', {
			method: 'POST',
			body: formData
		})
		const response = await request
		if (!response.ok) return alert("Error")
		alert("Created")
	};
</script>
<svelte:head>
	<title>Create Account</title>
</svelte:head>
<div class="mainLogin">
		<div class="cardLogin">
			<h1>Create account</h1>
			<form on:submit|preventDefault={submitForm} class="formStyle">
				<div class="textfield">
					<input type="text" placeholder="Full name" name="username" />
				</div>
				<div class="textfield">
					<input type="text" placeholder="Email/Phone" name="email" />
				</div>
				<div class="textfield">
					<input type="password" placeholder="Password" name="password" />
				</div>
				<a href="/login"> 
					<p>Already have an account?</p>
				</a>
				<div class="buttonPos">
					<input type="submit" class="btnRegister" value="Continue"/>
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
