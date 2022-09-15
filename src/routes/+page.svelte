<script>
	// Components
	import Button from "$lib/components/Button.svelte";
	// Configs
	import { urlSignIn, urlSignUp } from '$lib/configs';
	// Sveltekit
	import { goto } from "$app/navigation";
	

	const signIn = () => goto(urlSignIn);
	const signUp = () => goto(urlSignUp);

	/**
	 * Todo Add Nagivation Components
	 * Add an array of config so can iterate and create dinamically
	*/
	
</script>

<h1>Welcome to Auth Template!</h1>
<Button text={"Login"} onClick={signIn}></Button>
<Button text={"Register"} onClick={signUp}></Button>
