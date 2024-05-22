import MovieInfo from '../components/movie/MovieInfo';
import MoviePoster from '../components/movie/MoviePoster';
import TopBar from '../components/movie/TopBar';
import BottomBar from '../components/movie/BottomBar';
import MovieDetail from '../components/movie/MovieDetail';
import Footer from '../components/common/Footer';

function Movie() {
	return (
		<>
			<TopBar />
			<MoviePoster />
			<MovieInfo />
			<MovieDetail />
			<Footer />
			<BottomBar />
		</>
	);
}

export default Movie;
