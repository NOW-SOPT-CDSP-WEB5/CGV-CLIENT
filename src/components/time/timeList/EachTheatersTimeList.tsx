import styled from 'styled-components';
import RunningTimeSeatsWrapper from './RunningTimeSeatsWrapper';
import { Time } from './EachTheatersTimeSection';

interface EachTheatersTimeListProps {
	times: Time[];
}

/** 각 상영관 시간&잔여석 정보 */
function EachTheatersTimeList({ times }: EachTheatersTimeListProps) {
	return (
		<RunningTimeSeatsContainer>
			{times.map((time) => (
				<RunningTimeSeatsWrapper key={time.startAt} startAt={time.startAt} endAt={time.endAt} />
			))}
		</RunningTimeSeatsContainer>
	);
}

export default EachTheatersTimeList;

const RunningTimeSeatsContainer = styled.div`
	display: flex;
	gap: 0.7rem;
	margin: 0 0 0 1.5rem;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;
