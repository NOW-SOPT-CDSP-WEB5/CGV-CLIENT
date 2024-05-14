import styled from 'styled-components';
import listImages from '../assets/list/images';
import MainTopBar from '../components/common/MainTopBar';

import ListControlBar from '../components/list/ListControlBar';

function List() {
	return (
		<>
			<ListAdImg src={listImages.listAd} />
			<MainTopBar location="list" />
			<ListControlBar />
		</>
	);
}

const ListAdImg = styled.img`
	width: 100%;
`;

export default List;
