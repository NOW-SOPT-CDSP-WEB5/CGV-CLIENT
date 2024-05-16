import MovieInfo from '../components/movie/MovieInfo';
import MoviePoster from '../components/movie/MoviePoster';
import TopBar from '../components/movie/TopBar';
import BottomBar from '../components/movie/BottomBar';

function Movie() {
	return (
		<>
			<TopBar />
			<MoviePoster />
			<MovieInfo />
			<BottomBar />
		</>
	);
}

export default Movie;
