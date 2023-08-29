<script>
	import { fly } from 'svelte/transition';
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovie from '../components/SearchMovie.svelte';
	export let data;
</script>

<section out:fly={{ duration: 500 }} in:fly={{ x: 50, duration: 500 }}>
	<SearchMovie />
	<PopularMovies movies={data.response} />
</section>
