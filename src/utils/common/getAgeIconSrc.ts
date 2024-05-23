import listIcons from '../../assets/list/icons';

/** 나이 제한 아이콘 받아오기 */
const getAgeIconSrc = (age: string) => {
	let ageIcon;
	switch (age) {
		case '12':
			ageIcon = listIcons.movie.icListAge12;
			break;
		case '15':
			ageIcon = listIcons.movie.icListAge15;
			break;
		case '18':
			ageIcon = listIcons.movie.icListAge18;
			break;
		case 'All':
			ageIcon = listIcons.movie.icListAgeAll;
			break;
		default:
			ageIcon = listIcons.movie.icListAgeAll;
			break;
	}
	return ageIcon;
};

export default getAgeIconSrc;
