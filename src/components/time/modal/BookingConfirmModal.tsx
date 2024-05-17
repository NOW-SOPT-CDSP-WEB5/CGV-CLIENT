import styled from 'styled-components';
import timeImages from '../../../assets/time/images';
import Typo from '../../../styles/typo/typo';

/** 예매 확인 모달 */
function BookingConfirmModal() {
	return (
		<ConfirmDialogBox>
			<BookingConfirmImg
				src={timeImages.timeModal.imgTimemodalComplete}
				alt="예매 완료 확인 모달"
				height={139}
				width={166}
			/>
			<BookingConfirmMsg>예매 완료되었습니다</BookingConfirmMsg>
			<GoAllMovieList>전체 상영작 확인하기</GoAllMovieList>
		</ConfirmDialogBox>
	);
}

export default BookingConfirmModal;

const ConfirmDialogBox = styled.div`
	z-index: 10000;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 29.4rem;
	height: 25.7rem;

	background-color: white;
	box-shadow: 0 0 30px rgb(30 30 30 / 18.5%);
	border: none;
	border-radius: 8px;
`;

const BookingConfirmMsg = styled(Typo.Head.Head1SB17)`
	position: relative;
	bottom: 1rem;
	margin: 1rem 0;
`;
const BookingConfirmImg = styled.img`
	width: 17.8rem;
	height: 16.3rem;
`;
const GoAllMovieList = styled(Typo.Body.Body2R12)`
	position: relative;
	bottom: 1.4rem;

	color: ${({ theme }) => theme.GreyScale.MG};
	text-decoration: underline;
`;
