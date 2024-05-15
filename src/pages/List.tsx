import styled from 'styled-components';
import listImages from '../assets/list/images';
import MainTopBar from '../components/common/MainTopBar';

import ListControlBar from '../components/list/ListControlBar';
import ListMovie from '../components/list/movie/ListMovie';

function List() {
	return (
		<>
			<ListAdImg src={listImages.listAd} />
			<MainTopBar location="list" />
			<ListControlBar />
			<ListMovieContainer>
				<ListMovie />
				<ListMovie />
				<ListMovie />
				<ListMovie />
				<ListMovie />
				<ListMovie />
			</ListMovieContainer>
		</>
	);
}

const ListAdImg = styled.img`
	width: 100%;
`;
const ListMovieContainer = styled.section`
	display: flex;
	flex-direction: column;
`;
export default List;
