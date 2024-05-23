/** releaseDate 와 현재 시간 비교해서 D-Day 반환 */
const getDDay = (releaseDate: string) => {
	const date = new Date();
	const [year, month, day] = releaseDate.split('.');
	const releaseDateFormatted = new Date(`${year}-${month}-${day}`);

	let diff = date.getTime() - releaseDateFormatted.getTime();
	diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
	if (diff > 0) {
		return `D+${diff}`;
	}
	if (diff < 0) {
		return `D${diff}`;
	}
	// 같음
	return 'D-Day';
};

export default getDDay;
