import styled from 'styled-components';
import { useCallback, useState } from 'react';
import RunningTime from './RunningTime';
import Seats from './Seats';
import BookingModal from '../modal/BookingModal';
import BookingConfirmModal from '../modal/BookingConfirmModal';

/** 영화 예매시간 칸 클릭 시 모달창 띄우기 */
function RunningTimeSeatsWrapper() {
	const [isBookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
	const [isBookingConfirmOpen, setBookingConfirmOpen] = useState<boolean>(false);

	const onClickToggleBookingModal = useCallback(() => {
		setBookingModalOpen(!isBookingModalOpen);
	}, [isBookingModalOpen]);

	const onClickToggleBookingConfirm = useCallback(() => {
		setBookingConfirmOpen(!isBookingConfirmOpen);
		setBookingModalOpen(false);
	}, [isBookingConfirmOpen]);

	return (
		<>
			{isBookingModalOpen && (
				<BookingModal onClickToggleModal={onClickToggleBookingModal} onConfirmBooking={onClickToggleBookingConfirm} />
			)}
			{isBookingConfirmOpen && <BookingConfirmModal onClickToggleModal={onClickToggleBookingConfirm} />}
			<TimeSeatsWrapper onClick={onClickToggleBookingModal}>
				<RunningTime />
				<Seats />
			</TimeSeatsWrapper>
		</>
	);
}

export default RunningTimeSeatsWrapper;

const TimeSeatsWrapper = styled.div`
	width: 10.5rem;
	height: 7.7rem;

	border: 1px solid ${({ theme }) => theme.GreyScale.LG2};
	border-radius: 6px;
`;
