import styled from 'styled-components';
import { useState } from 'react';
import Typo from '../../../styles/typo/typo';
import { getColorByDay, formatDate, formatToday } from '../../../utils/time/dateUtils';
import timeIcons from '../../../assets/time/icon/index';

function ThisWeek() {
	const [selectedDay, setSelectedDay] = useState<number | null>(null);
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

	const handleDayClick = (day: number) => {
		setSelectedDay(day);
	};

	return (
		<>
			<ThisWeekContainer>
				<TodayWrapper>
					{/* util에서 오늘 날짜 불러오기 */}
					<Typo.Title.Title4M16>{formatToday(today)} </Typo.Title.Title4M16>
					<Blue>오늘</Blue>
				</TodayWrapper>

				<WeekDateContainer>
					{weekDates.map((weekDate) => (
						<WeekDateWrapper
							key={weekDate.uniqueKey}
							onClick={() => handleDayClick(weekDate.day)}
							$isSelected={selectedDay === weekDate.day}
						>
							<Typo.Head.Head1SB17>{weekDate.day}</Typo.Head.Head1SB17>
							{weekDate.label === '내일' ? (
								<Red>{weekDate.label}</Red>
							) : (
								<DayOfWeek $dayOfWeek={weekDate.dayOfWeek}>{weekDate.dayOfWeek}</DayOfWeek>
							)}
						</WeekDateWrapper>
					))}
				</WeekDateContainer>
			</ThisWeekContainer>
			<SortBar>
				<Typo.Title.Title3SB14>• 영화순</Typo.Title.Title3SB14>
				<Typo.Body.Body3M14>극장순</Typo.Body.Body3M14>
				<Typo.Body.Body3M14>시간순</Typo.Body.Body3M14>
				<FilterWrapper>
					<img src={timeIcons.icTimeFilter} alt="필터 아이콘" />
					<Filter>필터</Filter>
				</FilterWrapper>
			</SortBar>
		</>
	);
}

const ThisWeekContainer = styled.div`
	position: sticky;
	top: 4.4rem;
	z-index: 10;

	background-color: ${({ theme }) => theme.GreyScale.White};
`;

const TodayWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
	padding: 1.5rem 0 0.3rem;

	color: ${(props) => props.theme.GreyScale.BG};
`;

interface DayOfWeekProps {
	$dayOfWeek: string;
}

/* util에서 요일 색상 불러오기 */
const DayOfWeek = styled(Typo.Body.Body5M13)<DayOfWeekProps>`
	margin-top: 0.8rem;

	color: ${({ $dayOfWeek }) => getColorByDay($dayOfWeek)};
`;

interface WeekDateWrapperProps {
	$isSelected: boolean;
}

const WeekDateWrapper = styled.div<WeekDateWrapperProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1rem;

	cursor: pointer;
	border-radius: 8px;

	:first-child {
		padding: 1rem;

		color: ${({ $isSelected, theme }) => ($isSelected ? theme.GreyScale.White : theme.GreyScale.Black)};

		background-color: ${({ $isSelected, theme }) => ($isSelected ? theme.Color.Point : 'transparent')};
		border-radius: 11px;
	}
`;

const WeekDateContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin-bottom: 0.5rem;

	border-bottom: 1px solid ${({ theme }) => theme.GreyScale.LG};
`;

const Blue = styled(Typo.Title.Title4M16)`
	padding-left: 0.4rem;

	color: ${(props) => props.theme.Color.SkyBlue};
`;

const Red = styled(Typo.Body.Body5M13)`
	margin-top: 1rem;

	color: ${(props) => props.theme.Color.Point};
`;

const SortBar = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	padding: 0.2rem 0 0.7rem 1rem;

	color: ${({ color, theme }) => color || theme.GreyScale.MG};

	:first-child {
		color: ${({ theme }) => theme.GreyScale.BG};
	}

	:last-child {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const Filter = styled(Typo.Body.Body3M14)`
	color: ${({ color, theme }) => color || theme.GreyScale.BG};
`;

const FilterWrapper = styled.div`
	position: relative;
	left: 16rem;
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
`;

export default ThisWeek;
