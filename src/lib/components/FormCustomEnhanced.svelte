<script lang="ts">
	import { enhance } from '$app/forms';
	export let enhanceCustom: any;
</script>

<form 
	use:enhance={enhanceCustom}
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
