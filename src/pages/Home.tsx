import Banner from '../components/home/Banner';
import MovieChart from '../components/home/MovieChart';
import NavBar from '../components/home/NavBar';
import TapBar from '../components/home/TapBar';
import TopBar from '../components/home/TopBar';

function Home() {
	return (
		<>
			<TopBar />
			<NavBar />
			<Banner />
			<MovieChart />
			<TapBar />
		</>
	);
}

export default Home;
