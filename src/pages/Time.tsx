import AddMovieTheater from '../components/time/timeComparator/TimeComparator';
import TopBar from '../components/time/TopBar';
import ThisWeek from '../components/time/dateSelect/ThisWeek';
import TimeList from '../components/time/timeList/TimeList';

function Time() {
	return (
		<div>
			<TopBar />
			<AddMovieTheater />
			<ThisWeek />
			<TimeList />
		</div>
	);
}

export default Time;
