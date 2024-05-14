import AdSection from '../components/home/AdSection';
import Banner from '../components/home/Banner';
import MovieChart from '../components/home/MovieChart';
import NavBar from '../components/home/NavBar';
import PartitionBar from '../components/home/PartitionBar';
import SpecialCinema from '../components/home/SpecialCinema';
import TapBar from '../components/home/TapBar';
import RecommendSection from '../components/home/RecommendSection';
import SubMenu from '../components/home/SubMenu';
import TopBar from '../components/home/TopBar';
import IceConSection from '../components/home/IceConSection';

function Home() {
	return (
		<>
			<TopBar />
			<NavBar />
			<Banner />
			<MovieChart />
			<SpecialCinema />
			<PartitionBar />
			<IceConSection />
			<PartitionBar />
			<RecommendSection />
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
