import AddMovieTheater from '../components/time/AddMovieTheater';
import TopBar from '../components/time/TopBar';
import ThisWeek from '../components/time/dateSelect/ThisWeek';
import EachCinemaTimeList from '../components/time/timeList/EachCinemaTimeList';

function Time() {
	return (
		<div>
			<TopBar />
			<AddMovieTheater />
			<ThisWeek />
			<EachCinemaTimeList />
		</div>
	);
}

export default Time;
