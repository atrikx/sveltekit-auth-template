<script lang="ts">
	export let submitForm: any;
</script>

<form 
on:submit|preventDefault={submitForm} 
class="formStyle"
>
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
