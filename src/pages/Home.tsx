import AdSection from '../components/home/AdSection';
import Banner from '../components/home/Banner';
import MovieChart from '../components/home/MovieChart';
import NavBar from '../components/home/NavBar';
import PartitionBar from '../components/home/PartitionBar';
import SubMenu from '../components/home/SubMenu';
import TapBar from '../components/home/TapBar';
import TopBar from '../components/home/TopBar';

function Home() {
	return (
		<>
			<TopBar />
			<NavBar />
			<Banner />
			<MovieChart />
			<PartitionBar />
			<SubMenu />
			<PartitionBar />
			<AdSection />
			<PartitionBar />
			<TapBar />
		</>
	);
}

export default Home;
