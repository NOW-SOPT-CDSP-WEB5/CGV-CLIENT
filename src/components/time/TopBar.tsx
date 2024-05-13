import styled from 'styled-components';
import IconContainer from '../common/IconContainer';
import commonIcons from '../../assets/common/icon';

function TopBar() {
	return (
		<BarContainer>
			<LeftArrowIconWrapper>
				<IconContainer>
					<img src={commonIcons.icArrowLeft} alt="left arrow" />
				</IconContainer>
			</LeftArrowIconWrapper>
			<CenterTitleWrapper>빠른 예매</CenterTitleWrapper>
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

const LeftArrowIconWrapper = styled.div`
	position: absolute;
	left: 0;
`;

const CenterTitleWrapper = styled.div`
	display: flex;
	justify-content: center;

	font-size: 1.7rem;
`;
export default TopBar;
