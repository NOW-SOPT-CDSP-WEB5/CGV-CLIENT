import MovieInfo from '../components/movie/MovieInfo';
import MoviePoster from '../components/movie/MoviePoster';
import TopBar from '../components/movie/TopBar';

function Movie() {
	return (
		<>
			<TopBar />
			<MoviePoster />
			<MovieInfo />
		</>
	);
}

export default Movie;
