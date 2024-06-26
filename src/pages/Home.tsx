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
import IceConSection from '../components/home/IceConSection';
import Footer from '../components/common/Footer';

function Home() {
	return (
		<>
			<MainTopBar location="home" />
			<NavBar />
			<Banner />
			<MovieChart />
			<PartitionBar />
			<SubMenu />
			<PartitionBar />
			<AdSection />
			<PartitionBar />
			<IceConSection />
			<PartitionBar />
			<RecommendSection />
			<PartitionBar />
			<SpecialCinema />
			<PartitionBar />
			<Footer />
			<TapBar />
		</>
	);
}

export default Home;
