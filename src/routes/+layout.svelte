<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
</script>

<svelte:head>
	<title>Movie DB</title>
</svelte:head>

<div class="layout">
	<Nav />
	<slot />
</div>

<style>
</style>
