<script lang="ts">
	import { enhance } from '$app/forms';
	export let action: string;
</script>

<form 
	method="POST"
	action={action}
	use:enhance
	class="formStyle">
	<slot />
</form>

<style>
	.formStyle {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
</style>
