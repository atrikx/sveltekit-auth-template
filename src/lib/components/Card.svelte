<script lang="ts">
    export let title: string = "Title";
</script>


<div class="card">
    <h1> {title} </h1>
<slot />
</div>

<style>
    	.card {
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

	.card > h1 {
		color: #1d3153;
		font-weight: 800;
		font-size: 2.5em;
		padding: 5px;
		padding-bottom: 1em;
		margin: 0px;
	}

</style>