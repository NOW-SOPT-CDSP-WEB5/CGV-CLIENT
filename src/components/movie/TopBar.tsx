import styled from 'styled-components';
import Typo from '../../styles/typo/typo';
import movieIcons from '../../assets/movie/icon';

function TopBar() {
	return (
		<TopBarWapper>
			<TopIcon src={movieIcons.tapBar.icMovieArrow} alt="top left arrow" />
			<Typo.Head.Head1SB17>범죄도시4</Typo.Head.Head1SB17>
		</TopBarWapper>
	);
}

const TopBarWapper = styled.div`
	display: flex;
	align-items: center;
	height: 4.4rem;
`;

const TopIcon = styled.img`
	width: 3.2rem;
`;

export default TopBar;
