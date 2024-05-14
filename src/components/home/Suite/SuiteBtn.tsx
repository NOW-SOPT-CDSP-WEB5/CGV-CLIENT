import styled from 'styled-components';

function SuiteBtn() {
	return <SuiteEntireBtn>특별관 전체보기</SuiteEntireBtn>;
}
const SuiteEntireBtn = styled.button`
	display: flex;
	align-items: center;
	align-self: center;
	justify-content: center;
	width: 18.9rem;
	height: 3.4rem;

	color: ${({ theme }) => theme.GreyScale.LG2};

	background-color: ${({ theme }) => theme.GreyScale.White};
	border: solid 1px ${({ theme }) => theme.GreyScale.LG2};
	border-radius: 30px;
`;
export default SuiteBtn;
