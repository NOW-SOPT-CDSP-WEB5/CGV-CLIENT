import AdSection from '../components/home/AdSection';
import Banner from '../components/home/Banner';
import MovieChart from '../components/home/MovieChart';
import NavBar from '../components/home/NavBar';
import PartitionBar from '../components/home/PartitionBar';
import SpecialCinema from '../components/home/SpecialCinema';
import TapBar from '../components/home/TapBar';
import RecommendSection from '../components/home/RecommendSection';
import SubMenu from '../components/home/SubMenu';
import MainTopBar from '../components/common/MainTopBar';

function Home() {
	return (
		<>
			<MainTopBar location="home" />
			<NavBar />
			<Banner />
			<MovieChart />
			<SpecialCinema />
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
