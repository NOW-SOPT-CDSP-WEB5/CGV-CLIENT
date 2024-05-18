import styled from 'styled-components';
import homeImages from '../../assets/home/images';
import homeIcons from '../../assets/home/icon';
import IconContainer from './IconContainer';
import Typo from '../../styles/typo/typo';

type Props = {
	location: string;
};
/** home, list page TopBar */
function MainTopBar(props: Props) {
	const { location } = props;
	return (
		<BarContainer>
			{location === 'list' ? (
				<Typo.Head.Head1SB17>영화</Typo.Head.Head1SB17>
			) : (
				<LogoImg src={homeImages.imgHomeLogo} alt="CGV logo" />
			)}

			<SearchIconWrapper>
				<IconContainer>
					<img src={homeIcons.btnHomeSearch} alt="search" />
				</IconContainer>
			</SearchIconWrapper>
		</BarContainer>
	);
}

const BarContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 4.4rem;
	${({ theme }) => theme.GreyScale.White};
`;
const LogoImg = styled.img`
	width: 7.5rem;
	height: 3.7rem;
`;
const SearchIconWrapper = styled.div`
	position: absolute;
	right: 0;
`;
export default MainTopBar;
