import styled from 'styled-components';
import RunningTime from './RunningTime';
import Seats from './Seats';

interface RunningTimeSeatsWrapperProps {
	startAt: string;
	endAt: string;
}

function RunningTimeSeatsWrapper({ startAt, endAt }: RunningTimeSeatsWrapperProps) {
	return (
		<TimeSeatsWrapper>
			<RunningTime startAt={startAt} endAt={endAt} />
			<Seats />
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
