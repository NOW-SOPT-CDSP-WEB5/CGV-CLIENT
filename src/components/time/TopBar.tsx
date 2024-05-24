import styled from 'styled-components';
import IconContainer from '../common/IconContainer';
import commonIcons from '../../assets/common/icon';
import Typo from '../../styles/typo/typo';

function TopBar() {
	return (
		<BarContainer>
			<LeftArrowIconWrapper>
				<IconContainer>
					<img src={commonIcons.icArrowLeft} alt="left arrow" />
				</IconContainer>
			</LeftArrowIconWrapper>
			<CenterTitleWrapper>
				<Typo.Head.Head1SB17>빠른예매</Typo.Head.Head1SB17>
			</CenterTitleWrapper>
		</BarContainer>
	);
}

const BarContainer = styled.div`
	position: fixed;
	top: 0;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 37.5rem;
	height: 4.4rem;

	background-color: ${({ theme }) => theme.GreyScale.White};
`;

const LeftArrowIconWrapper = styled.div`
	position: absolute;
	left: 0;
`;

const CenterTitleWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
export default TopBar;
