export async function load({ fetch, params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${params.slug}?api_key=${
			import.meta.env.VITE_API
		}&language=en-US&page=1`
	);
	const response = await res.json();
	return { response };
}
