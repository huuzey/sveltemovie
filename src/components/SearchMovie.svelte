<script>
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	let searchvalue = '';
</script>

<form action={`/search/${searchvalue}`}>
	<input type="text" bind:value={searchvalue} placeholder="search" />
	{#if searchvalue}
		<button out:fly={{ x: 0, duration: 500 }} in:fly={{ x: 20, duration: 500 }}>Search</button>
	{/if}
</form>

<style>
	button:hover {
		scale: 105%;
		background: rgb(222, 110, 215);
	}
	button {
		font-size: 0.8rem;
		padding: 10px 1rem;
		background: rgb(96, 110, 201);
		color: black;
		font-weight: bold;
		border: none;

		height: 100%;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		cursor: pointer;
		margin-left: 0%;
	}
	input {
		width: 25%;
		border: none;
		margin-right: 0%;
		font-size: 1rem;
		outline: none;
		color: rgb(255, 255, 255);
		padding: 0.5rem 0.1rem;
		background: rgb(63, 63, 63);
		transition: background 0.75s ease-out;
		font-weight: bold;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		padding: 0.5rem;
	}
</style>
