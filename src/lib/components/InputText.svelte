<script lang="ts">
	export let name: string = 'name';
	export let placeholder: string = 'Select your placeholder';
	export let type: string = 'text';
	export let inputWidth = '100%';

	const typeAction = (e: any) => {
		e.type = type;
	};

	export let bindValue: any = "" ?? null;
</script>

<div class="textField" style="--input-width: {inputWidth};">
	<input use:typeAction {placeholder} {name} bind:value={$bindValue} />
</div>

<style>
	.textField {
		display: flex;
		justify-content: center;
		width: 100%;
		align-items: center;
	}

	.textField > input::placeholder {
		color: #1d3153;
	}

	.textField > input {
		width: var(--input-width);
		border: 0px solid;
		border-color: rgba(20, 20, 20, 0.3);
		border-radius: 10px;
		padding: 20px;
		background: rgba(20, 20, 20, 0.1);
		color: #1d3153;
		box-shadow: 0px 0px 0px rgba(20, 20, 20, 0.5);
		outline: none;
		margin: 3% 0px;
	}
</style>
