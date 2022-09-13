<script lang="ts">
	import { enhance } from '$app/forms';
	export let enhanceFunction: any;
</script>

<form 
	use:enhance={enhanceFunction}
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
