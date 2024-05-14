import styled from 'styled-components';
import Typo from '../../styles/typo/typo';
import homeIcons from '../../assets/home/icon';

/** 전체보기 버튼 */
function OverViewBtn() {
	return (
		<OverViewBtnContainer>
			<Typo.Body.Body5M13>전체보기</Typo.Body.Body5M13>
			<img src={homeIcons.icHomeArrow} alt="arrow" />
		</OverViewBtnContainer>
	);
}
const OverViewBtnContainer = styled.div`
	display: flex;
	gap: 0.6rem;
	align-items: center;

	color: ${({ theme }) => theme.GreyScale.MG};
`;
export default OverViewBtn;
