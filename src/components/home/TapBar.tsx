import styled, { useTheme } from 'styled-components';
import homeIcons from '../../assets/home/icon';
import Typo from '../../styles/typo/typo';

function TapBar() {
	const theme = useTheme();
	return (
		<TapBarContainer>
			<TapBoxWrapper>
				<TapBtnBox color={theme.Color.Point}>
					<img src={homeIcons.tapBar.icHomeHome} alt="home" />
					<Typo.Caption.Caption1M10>홈</Typo.Caption.Caption1M10>
				</TapBtnBox>
				<TapBtnBox>
					<img src={homeIcons.tapBar.icHomeBook} alt="home" />
					<Typo.Caption.Caption1M10>예매하기</Typo.Caption.Caption1M10>
				</TapBtnBox>
				<TapBtnBox>
					<img src={homeIcons.tapBar.icHomeSchedule} alt="home" />
					<Typo.Caption.Caption1M10>상영스케줄</Typo.Caption.Caption1M10>
				</TapBtnBox>
				<TapBtnBox>
					<img src={homeIcons.tapBar.icHomePopcorn} alt="home" />
					<Typo.Caption.Caption1M10>패스트오더</Typo.Caption.Caption1M10>
				</TapBtnBox>
				<TapBtnBox>
					<img src={homeIcons.tapBar.icHomeMy} alt="home" />
					<Typo.Caption.Caption1M10>MY CGV</Typo.Caption.Caption1M10>
				</TapBtnBox>
			</TapBoxWrapper>
		</TapBarContainer>
	);
}

const TapBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 7rem;
`;

const TapBoxWrapper = styled.div`
	display: flex;
	gap: 1.5rem;
	width: fit-content;
`;

const TapBtnBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 5.6rem;
	height: 6rem;

	color: ${({ color, theme }) => color || theme.GreyScale.LG2};
`;
export default TapBar;
