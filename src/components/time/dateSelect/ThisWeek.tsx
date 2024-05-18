import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';
import { getColorByDay, formatDate, formatToday } from '../../../utils/time/dateUtils';

function ThisWeek() {
	const today = new Date();

	/** 이번주 일주일 생성 */
	const weekDates = Array.from({ length: 7 }, (_, i) => {
		const date = new Date(today);
		date.setDate(today.getDate() + i + 1);
		// util에서 요일 불러오기
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
				{/* util에서 오늘 날짜 불러오기 */}
				<Typo.Title.Title4M16>{formatToday(today)} </Typo.Title.Title4M16>
				<Blue>오늘</Blue>
			</TodayWrapper>

			<WeekDateContainer>
				{weekDates.map((weekDate) => (
					<WeekDateWrapper key={weekDate.uniqueKey}>
						<Typo.Head.Head1SB17>{weekDate.day}</Typo.Head.Head1SB17>
						{weekDate.label === '내일' ? (
							<Red>{weekDate.label}</Red>
						) : (
							<DayOfWeek $dayOfWeek={weekDate.dayOfWeek}>{weekDate.dayOfWeek}</DayOfWeek>
						)}
					</WeekDateWrapper>
				))}
			</WeekDateContainer>
		</>
	);
}

const TodayWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
	padding: 2rem;

	color: ${(props) => props.theme.GreyScale.BG};
`;

interface DayOfWeekProps {
	$dayOfWeek: string;
}

/* util에서 요일 색상 불러오기 */
const DayOfWeek = styled(Typo.Body.Body5M13)<DayOfWeekProps>`
	margin-top: 1rem;

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

const Red = styled(Typo.Body.Body5M13)`
	margin-top: 1rem;

	color: ${(props) => props.theme.Color.Point};
`;

export default ThisWeek;
