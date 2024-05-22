import styled from 'styled-components';
import FadeLoader from 'react-spinners/FadeLoader';
import { Suspense, useEffect, useState } from 'react';
import listImages from '../assets/list/images';
import MainTopBar from '../components/common/MainTopBar';
import ListControlBar from '../components/list/ListControlBar';
import ListMovie from '../components/list/movie/ListMovie';
import Footer from '../components/common/Footer';
import PartitionBar from '../components/home/PartitionBar';
import getMovieList from '../apis/getMovieList';
import { MovieListType } from '../types/home/types';

function List() {
	const [movieList, setMovieList] = useState<MovieListType[]>([]);
	const handleGetMovieList = async () => {
		const res = await getMovieList();
		setMovieList(res);
	};
	useEffect(() => {
		handleGetMovieList();
	}, []);
	return (
		<ListLayout>
			<ListAdImg src={listImages.listAd} />
			<MainTopBar location="list" />
			<ListControlBar />
			<ListMovieContainer>
				<Suspense fallback={<FadeLoader color="grey" loading aria-label="Loading Spinner" data-testid="loader" />}>
					{movieList.map((movie) => (
						<ListMovie key={movie.name} movie={movie} />
					))}
				</Suspense>
			</ListMovieContainer>
			<Partition />
			<Footer />
		</ListLayout>
	);
}
const ListLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
const ListAdImg = styled.img`
	width: 100%;
`;
const ListMovieContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

const Partition = styled(PartitionBar)`
	height: 3.2rem;
`;
export default List;
