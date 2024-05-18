interface DateInfo {
	day: number;
	dayOfWeek: string;
}

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

/**
 * 요일에 따른 색상 반환 함수
 * @param $dayOfWeek - 요일 문자열
 * @returns 색상 문자열
 */
export const getColorByDay = ($dayOfWeek: string): string => {
	switch ($dayOfWeek) {
		case '토':
			return '#66B3FC';
		case '일':
			return '#F84C4C';
		default:
			return '#373737';
	}
};

/**
 * 이번주 날짜 포맷 함수
 * @param date - Date 객체
 * @returns 날짜 정보 객체
 */
export const formatDate = (date: Date): DateInfo => {
	const day = date.getDate();
	const dayOfWeek = daysOfWeek[date.getDay()];
	return { day, dayOfWeek };
};

/**
 * 오늘 날짜 포맷 함수
 * @param date - Date 객체
 * @returns 포맷된 날짜 문자열
 */
export const formatToday = (date: Date): string => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const dayOfWeek = daysOfWeek[date.getDay()];
	return `${year}.${month}.${day} (${dayOfWeek})`;
};
