import styled from 'styled-components';
import { useCallback, useState } from 'react';
import RunningTime from './RunningTime';
import Seats from './Seats';
import BookingModal from '../modal/BookingModal';
import BookingConfirmModal from '../modal/BookingConfirmModal';
import { TimeType } from '../../../types/time/types';

/** 영화 예매시간 칸 클릭 시 모달창 띄우기 */
function RunningTimeSeatsWrapper({ startAt, endAt, remainingSeats }: TimeType) {
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
				<BookingModal
					onClickToggleModal={onClickToggleBookingModal}
					onConfirmBooking={onClickToggleBookingConfirm}
					startAt={startAt}
					endAt={endAt}
				/>
			)}
			{isBookingConfirmOpen && <BookingConfirmModal onClickToggleModal={onClickToggleBookingConfirm} />}
			<TimeSeatsWrapper onClick={onClickToggleBookingModal}>
				<RunningTime startAt={startAt} endAt={endAt} remainingSeats={0} />
				<Seats remainingSeats={remainingSeats} startAt="" endAt="" />
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
