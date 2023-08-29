/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${
			import.meta.env.VITE_API
		}&language=en-US&page=1`
	);
	const data = await res.json();
	console.log('data there');
	if (res.ok) {
		return new Response(data.results);
	}
}
