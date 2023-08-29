<script>
	export let data;
	import MovieCard from '../../../components/MovieCard.svelte';
</script>

{#if data.response.results.length > 0}
	<div class="searched">
		{#each data.response.results as movie}
			<MovieCard {movie} />
		{/each}
	</div>
{/if}
{#if data.response.success === false}
	<h1>{data.response.status_message}</h1>
{/if}

<style>
	.searched {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
		height: 100vh;
	}
	h1 {
		font-size: large;
		color: black;
		align-items: center;
		justify-content: center;
		font-weight: bold;
	}
</style>
