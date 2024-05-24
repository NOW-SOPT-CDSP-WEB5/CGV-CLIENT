import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Modal from '../../common/modal/Modal';
import Typo from '../../../styles/typo/typo';
import postMoviesTickets from '../../../apis/postMoviesTickets';
import formatTime from '../../../utils/time/hourMinuteUtils';

interface BookingModalProps {
	onClickToggleModal: () => void;
	onConfirmBooking: () => void;
	startAt: string;
	endAt: string;
}

/** 예매 모달 내용 */
function BookingModal({
	onClickToggleModal,
	onConfirmBooking,
	startAt,
	endAt,
	children,
}: PropsWithChildren<BookingModalProps>) {
	const handleBookingClick = async () => {
		await postMoviesTickets();
		onConfirmBooking(); // 예매 확인 모달 표시
	};

	return (
		<Modal onClickToggleModal={onClickToggleModal}>
			<BookingModalWrapper>
				<BookingTitle>범죄도시4</BookingTitle>
				<Theater>강남 CGV 1관 6층</Theater>
				<Typo.Title.Title6B18>
					{formatTime(startAt)} ~ {formatTime(endAt)}
				</Typo.Title.Title6B18>
				<BookingMsg>영화 정보와 극장, 상영관과 영화 시간을 확인해주세요</BookingMsg>
				{children}
			</BookingModalWrapper>
			<ButtonWrapper>
				<CloseButton type="button" onClick={onClickToggleModal}>
					<Typo.Head.Head1SB17>취소</Typo.Head.Head1SB17>
				</CloseButton>
				<BookingButton type="button" onClick={handleBookingClick}>
					<Typo.Head.Head1SB17>예매하기</Typo.Head.Head1SB17>
				</BookingButton>
			</ButtonWrapper>
		</Modal>
	);
}

export default BookingModal;

const BookingModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 5rem;
`;

const BookingButton = styled.button`
	width: 14.7rem;
	height: 5.2rem;

	color: ${({ theme }) => theme.GreyScale.White};

	background-color: ${({ theme }) => theme.Color.Point};
	border: none;
	border-bottom-right-radius: 8px;
`;

const CloseButton = styled.button`
	width: 14.7rem;
	height: 5.2rem;

	color: ${({ theme }) => theme.GreyScale.White};

	background-color: ${({ theme }) => theme.GreyScale.MG};
	border: none;
	border-bottom-left-radius: 8px;
`;

const BookingTitle = styled(Typo.Head.Head1SB17)`
	padding-bottom: 0.6rem;

	text-align: center;
`;

const ButtonWrapper = styled.div`
	display: flex;
`;

const Theater = styled(Typo.Title.Title3SB14)`
	padding: 0 0 1.8rem;

	color: ${({ theme }) => theme.Color.Point};
`;

const BookingMsg = styled(Typo.Caption.Caption2R11)`
	padding: 1.5rem 0 3rem;

	color: ${({ theme }) => theme.GreyScale.MG};
`;
