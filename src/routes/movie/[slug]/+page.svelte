<script>
	export let data;
	const moviedetail = data.response;
</script>

<div class="movie-details">
	<div class="img-container">
		<img
			src={`https://image.tmdb.org/t/p/original${moviedetail.backdrop_path}`}
			alt={moviedetail.title}
		/>
	</div>
	<div class="txt-container">
		<h1>{moviedetail.title}</h1>
		<p class="overview">{moviedetail.overview}</p>
		<p>
			<span>Release date:</span>
			{moviedetail.release_date} <br />
			<span>Budget:</span>{moviedetail.budget} <br />
			<span>Rating:</span>{moviedetail.vote_average} <br />
			<span>Runtime:</span>{moviedetail.runtime} mins <br />
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0rem;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	img:hover {
		scale: 105%;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
