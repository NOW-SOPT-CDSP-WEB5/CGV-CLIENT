import styled from 'styled-components';
import commonIcons from '../../assets/common/icon';
import Typo from '../../styles/typo/typo';

function Footer() {
	return (
		<>
			<FooterTopContainer>
				<FooterTopLabel>공지사항</FooterTopLabel>
				<img src={commonIcons.icPutterLine} alt="|" height={6} />
				<FooterTopLabel>고객센터</FooterTopLabel>
				<img src={commonIcons.icPutterLine} alt="|" />
				<FooterTopLabel>로그인</FooterTopLabel>
				<img src={commonIcons.icPutterLine} alt="|" />
				<FooterTopLabel>PC버전</FooterTopLabel>
			</FooterTopContainer>
			<FooterBottomContainer>
				<FooterBottomWrapper style={{ marginLeft: '0.2rem' }}>
					<Typo.Caption.Caption3SB11>(주) CJ CGV</Typo.Caption.Caption3SB11>
					<img src={commonIcons.icPutterArrow} alt="down arrow" width={11} height={6} />
				</FooterBottomWrapper>
				<FooterBottomWrapper>
					<Typo.Caption.Caption2R11>이용약관</Typo.Caption.Caption2R11>
					<img src={commonIcons.icPutterLine} alt="|" height={6} />
					<Typo.Caption.Caption2R11>개인정보 처리방침</Typo.Caption.Caption2R11>
					<img src={commonIcons.icPutterLine} alt="|" height={6} />
					<Typo.Caption.Caption2R11>위치기반서비스 이용약관</Typo.Caption.Caption2R11>
					<img src={commonIcons.icPutterLine} alt="|" height={6} />
					<Typo.Caption.Caption2R11>법적고지</Typo.Caption.Caption2R11>
				</FooterBottomWrapper>
			</FooterBottomContainer>
		</>
	);
}

export default Footer;

const FooterTopLabel = styled.p`
	margin: 2.8rem;
`;

const FooterTopContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 37.5rem;
	height: 4rem;

	background-color: ${({ theme }) => theme.GreyScale.LG2};
`;
const FooterBottomContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.1rem;
	width: 37.5rem;
	height: 15.4rem;

	background-color: ${({ theme }) => theme.GreyScale.Background};
`;
const FooterBottomWrapper = styled.div`
	position: relative;
	top: 1.4rem;
	left: 2rem;
	display: flex;
	gap: 0.6rem;
	align-items: center;

	color: ${({ color, theme }) => color || theme.GreyScale.BG};
`;
