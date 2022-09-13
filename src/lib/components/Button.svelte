<script lang="ts">
	import { themeBgButton, themeBgButtonHover, themeButtonInnerTextColor, themeButtonBoxShadow } from './theme';

	let ColorBgButton = themeBgButton;
	let ColorButtonInnerText = themeButtonInnerTextColor;
    let ColorButtonBoxShadow = themeButtonBoxShadow;
	export let buttonWidth = '100%'

	const hoverButton = () => (ColorBgButton = themeBgButtonHover);
	const mouseLeave = () => (ColorBgButton = themeBgButton);

	export let onClick = () => {};
	export let text = "text='anything'";

</script>

<button
	class="button"
	style="
    --color-bg-button: {ColorBgButton}; 
    --color-text-button: {ColorButtonInnerText};
    --color-button-box-shadow: {ColorButtonBoxShadow};
	--button-width: {buttonWidth}
    "
	on:mouseleave={mouseLeave}
	on:mouseenter={hoverButton}
	on:click={onClick}
>
	{text}
</button>

<style>
	.button {
		background-color: var(--color-bg-button);
		color: var(--color-text-button);
		border-radius: 5px;
        width: var(--button-width);
		padding: 2vh 1vw;
		margin: 25px;
		border: none;
		border-radius: 10px;
		outline: none;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: 700;
		cursor: pointer;
		box-shadow: 0px 8px 3px var(--color-button-box-shadow);
	}
</style>
