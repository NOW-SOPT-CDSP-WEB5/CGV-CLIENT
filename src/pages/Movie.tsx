import MovieInfo from '../components/movie/MovieInfo';
import MoviePoster from '../components/movie/MoviePoster';
import TopBar from '../components/movie/TopBar';
import BottomBar from '../components/movie/BottomBar';
import MovieDetail from '../components/movie/MovieDetail';

function Movie() {
	return (
		<>
			<TopBar />
			<MoviePoster />
			<MovieInfo />
			<MovieDetail />
			<BottomBar />
		</>
	);
}

export default Movie;
