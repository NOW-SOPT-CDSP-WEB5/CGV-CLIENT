import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';

// 요일 배열
const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

interface DateInfo {
	day: number;
	dayOfWeek: string;
}

interface DayOfWeekProps {
	$dayOfWeek: string;
}

// 토요일은 파란색, 일요일은 빨간색
const getColorByDay = ($dayOfWeek: string): string => {
	switch ($dayOfWeek) {
		case '토':
			return '#66B3FC';
		case '일':
			return '#CC222B';
		default:
			return '#373737';
	}
};

/** 이번주 날짜 포맷 함수 */
const formatDate = (date: Date): DateInfo => {
	const day = date.getDate();
	const dayOfWeek = daysOfWeek[date.getDay()];
	return { day, dayOfWeek };
};

/** 오늘 날짜 포맷 함수 */
const formatToday = (date: Date): string => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const dayOfWeek = daysOfWeek[date.getDay()];
	return `${year}.${month}.${day} (${dayOfWeek})`;
};

function ThisWeek() {
	const today = new Date();

	/** 이번주 일주일 생성 */
	const weekDates = Array.from({ length: 7 }, (_, i) => {
		const date = new Date(today);
		date.setDate(today.getDate() + i + 1);
		const { day, dayOfWeek } = formatDate(date);
		return {
			day,
			dayOfWeek,
			label: i === 0 ? '내일' : '',
			// 날짜와 요일, 인덱스를 조합하여 키 생성
			uniqueKey: `${day}-${dayOfWeek}-${i}`,
		};
	});

	return (
		<>
			<TodayWrapper>
				<Typo.Title.Title4M16>{formatToday(today)} </Typo.Title.Title4M16>
				<Blue>오늘</Blue>
			</TodayWrapper>

			<WeekDateContainer>
				{weekDates.map((weekDate) => (
					<WeekDateWrapper key={weekDate.uniqueKey}>
						<WeekDateDay>{weekDate.day}</WeekDateDay>
						{weekDate.label === '내일' ? (
							<LabelRed>{weekDate.label}</LabelRed>
						) : (
							<>
								<DayOfWeek $dayOfWeek={weekDate.dayOfWeek}>{weekDate.dayOfWeek}</DayOfWeek>
								<Typo.Body.Body5M13>{weekDate.label}</Typo.Body.Body5M13>
							</>
						)}
					</WeekDateWrapper>
				))}
			</WeekDateContainer>
		</>
	);
}

const WeekDateDay = styled(Typo.Head.Head1SB17)`
	margin-bottom: 1rem;
`;

const LabelRed = styled(Typo.Body.Body5M13)`
	color: ${(props) => props.theme.Color.Red};
`;

const TodayWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem 0 0.4rem;

	color: ${(props) => props.theme.GreyScale.BG};
`;

const DayOfWeek = styled(Typo.Body.Body5M13)<DayOfWeekProps>`
	color: ${({ $dayOfWeek }) => getColorByDay($dayOfWeek)};
`;

const WeekDateWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
`;

const WeekDateContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Blue = styled(Typo.Title.Title4M16)`
	padding-left: 0.4rem;

	color: ${(props) => props.theme.Color.SkyBlue};
`;

export default ThisWeek;
