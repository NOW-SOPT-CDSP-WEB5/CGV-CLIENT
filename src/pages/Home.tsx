import Banner from '../components/home/Banner';
import MovieChart from '../components/home/MovieChart';
import NavBar from '../components/home/NavBar';
import PartitionBar from '../components/home/PartitionBar';
import SpecialCinema from '../components/home/SpecialCinema';
import TapBar from '../components/home/TapBar';
import TopBar from '../components/home/TopBar';

function Home() {
	return (
		<>
			<TopBar />
			<NavBar />
			<Banner />
			<MovieChart />
			<SpecialCinema />
			<PartitionBar />
			<TapBar />
		</>
	);
}

export default Home;
