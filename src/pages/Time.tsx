import styled from 'styled-components';
import AddMovieTheater from '../components/time/timeComparator/TimeComparator';
import TopBar from '../components/time/TopBar';
import ThisWeek from '../components/time/dateSelect/ThisWeek';
import Footer from '../components/common/Footer';
import MiddleBar from '../components/time/timeList/MiddleBar';
import TimeToggleSection from '../components/time/timeList/TimeToggleSection';

function Time() {
	return (
		<TimeContainer>
			<MainContent>
				<TopBar />
				<AddMovieTheater />
				<ThisWeek />
				<MiddleBar />
				<TimeToggleSection />
			</MainContent>
			<Footer />
		</TimeContainer>
	);
}

export default Time;

const TimeContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
`;

const MainContent = styled.div`
	flex: 1;
`;
