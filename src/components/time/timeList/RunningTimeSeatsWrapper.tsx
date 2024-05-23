import styled from 'styled-components';
import RunningTime from './RunningTime';
import Seats from './Seats';
import { TimeType } from '../../../types/time/types';

function RunningTimeSeatsWrapper({ startAt, endAt, remainingSeats }: TimeType) {
	return (
		<TimeSeatsWrapper>
			<RunningTime startAt={startAt} endAt={endAt} remainingSeats={0} />
			<Seats remainingSeats={remainingSeats} startAt="" endAt="" />
		</TimeSeatsWrapper>
	);
}

export default RunningTimeSeatsWrapper;

const TimeSeatsWrapper = styled.div`
	width: 10.5rem;
	height: 7.7rem;

	border: 1px solid ${({ theme }) => theme.GreyScale.LG2};
	border-radius: 6px;
`;
