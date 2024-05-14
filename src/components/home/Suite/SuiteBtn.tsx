import styled from 'styled-components';
import homeIcons from '../../../assets/home/icon';

function SuiteBtn() {
	return (
		<SuiteEntireBtn>
			특별관 전체보기
			<img src={homeIcons.icHomeArrow} alt="arrow" />
		</SuiteEntireBtn>
	);
}
const SuiteEntireBtn = styled.button`
	display: flex;
	gap: 1.1rem;
	align-items: center;
	align-self: center;
	justify-content: center;
	width: 18.9rem;
	height: 3.4rem;

	color: ${({ theme }) => theme.GreyScale.MG};

	background-color: ${({ theme }) => theme.GreyScale.White};
	border: solid 1px ${({ theme }) => theme.GreyScale.LG2};
	border-radius: 30px;
`;
export default SuiteBtn;
