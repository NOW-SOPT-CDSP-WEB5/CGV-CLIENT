import styled from 'styled-components';
import Typo from '../../styles/typo/typo';

function BookBtn() {
	return (
		<BookBtnContainer type="button">
			<Typo.Body.Body5M13>지금 예매</Typo.Body.Body5M13>
		</BookBtnContainer>
	);
}

const BookBtnContainer = styled.button`
	width: 10rem;
	height: fit-content;
	padding: 0.6rem 1rem;

	background-color: ${({ theme }) => theme.GreyScale.White};
	border: solid 1px ${({ theme }) => theme.GreyScale.BG};
	border-radius: 30px;
`;
export default BookBtn;
