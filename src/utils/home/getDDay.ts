/** releaseDate 와 현재 시간 비교해서 D-Day 반환 */
const getDDay = (releaseDate: string) => {
	const date = new Date();
	const releaseDateArr = releaseDate.split('.');
	const releaseDateFormatted = new Date(`${releaseDateArr[0]}-${releaseDateArr[1]}-${releaseDateArr[2]}`);

	let diff = Math.abs(date.getTime() - releaseDateFormatted.getTime());
	diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
	if (diff > 0) {
		return `D+${diff}`;
	}
	if (diff < 0) {
		return `D+${Math.abs(diff)}`;
	}
	// 같음
	return 'D-Day';
};

export default getDDay;
