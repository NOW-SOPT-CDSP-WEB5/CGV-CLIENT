import { useState } from 'react';
import AddMovieTheater from '../components/time/timeComparator/TimeComparator';
import TopBar from '../components/time/TopBar';
import ThisWeek from '../components/time/dateSelect/ThisWeek';
import TimeList from '../components/time/timeList/TimeList';
import Footer from '../components/common/Footer';
import MiddleBar from '../components/time/timeList/MiddleBar';
import TimeToggleSection from '../components/time/timeList/TimeToggleSection';

function Time() {
	const [isOpenTimeList, setOpenTimeList] = useState<boolean>(false);

	return (
		<div>
			<TopBar />
			<AddMovieTheater />
			<ThisWeek />
			<MiddleBar />
			<TimeToggleSection isOpenTimeList={isOpenTimeList} setOpenTimeList={setOpenTimeList} />
			{isOpenTimeList && <TimeList />}
			<Footer />
		</div>
	);
}

export default Time;
