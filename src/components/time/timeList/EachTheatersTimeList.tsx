import styled from 'styled-components';
import RunningTimeSeatsWrapper from './RunningTimeSeatsWrapper';
import { TheaterType } from '../../../types/time/types';

/** 각 상영관 시간&잔여석 정보 */
function EachTheatersTimeList({ times }: TheaterType) {
	return (
		<RunningTimeSeatsContainer>
			{times.map((time) => (
				<RunningTimeSeatsWrapper
					key={time.startAt}
					startAt={time.startAt}
					endAt={time.endAt}
					remainingSeats={time.remainingSeats}
				/>
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
