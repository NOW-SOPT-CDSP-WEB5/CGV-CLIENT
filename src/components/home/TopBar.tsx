import styled from 'styled-components';
import homeImages from '../../assets/home/images';
import homeIcons from '../../assets/home/icon';
import IconContainer from '../common/IconContainer';

function TopBar() {
	return (
		<BarContainer>
			<LogoImg src={homeImages.imgHomeLogo} alt="CGV logo" />
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
export default TopBar;
