import styled from 'styled-components';
import RunningTimeSeatsWrapper from './RunningTimeSeatsWrapper';

/** 각 상영관 시간&잔여석 정보 */
function EachTheatersTimeList() {
	return (
		<RunningTimeSeatsContainer>
			{/* TODO: 각 영화관 상영시간 개수만큼 보여주기 */}
			<RunningTimeSeatsWrapper />
			<RunningTimeSeatsWrapper />
			<RunningTimeSeatsWrapper />
			<RunningTimeSeatsWrapper />
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
