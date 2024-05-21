import { useState, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Modal from '../../common/modal/Modal';
import Typo from '../../../styles/typo/typo';
import BookingConfirmModal from './BookingConfirmModal';

interface BookingModalProps {
	onClickToggleModal: () => void;
}

/** 예매 모달 내용 */
function BookingModal({ onClickToggleModal, children }: PropsWithChildren<BookingModalProps>) {
	const [isBookingConfirmed, setBookingConfirmed] = useState(false);

	const handleBookingClick = () => {
		setBookingConfirmed(true);
	};

	return (
		<Modal onClickToggleModal={onClickToggleModal}>
			{isBookingConfirmed ? (
				<BookingConfirmModal />
			) : (
				<>
					<BookingModalWrpaper>
						<BookingTitle>범죄도시4</BookingTitle>
						<Theater>강남 CGV 1관 6층</Theater>
						<Typo.Title.Title6B18>07:40 ~ 09:39</Typo.Title.Title6B18>
						<BookingMsg>영화 정보와 극장, 상영관과 영화 시간을 확인해주세요</BookingMsg>
						{children}
					</BookingModalWrpaper>
					<ButtonWrapper>
						<CloseButton type="button" onClick={onClickToggleModal}>
							<Typo.Head.Head1SB17>취소</Typo.Head.Head1SB17>
						</CloseButton>
						<BookingButton type="button" onClick={handleBookingClick}>
							<Typo.Head.Head1SB17>예매하기</Typo.Head.Head1SB17>
						</BookingButton>
					</ButtonWrapper>
				</>
			)}
		</Modal>
	);
}

const BookingModalWrpaper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
	position: fixed;
	bottom: 30rem;
	display: flex;
`;

const Theater = styled(Typo.Title.Title3SB14)`
	padding: 0 0 1.8rem;

	color: ${({ theme }) => theme.Color.Point};
`;

const BookingMsg = styled(Typo.Caption.Caption2R11)`
	padding: 1.5rem 0 4rem;

	color: ${({ theme }) => theme.GreyScale.MG};
`;

export default BookingModal;
