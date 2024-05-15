import homeImages from '../../assets/home/images';
import { HomeRecommededMovieType } from '../../types/home/types';

const recommendedMovie: HomeRecommededMovieType[] = [
	{
		id: 1,
		title: '가필드 더 무비',
		desc: '압도적 귀여움 가필드가 해냄!',
		img: homeImages.recommend.thumbnail1,
	},
	{
		id: 2,
		title: '혹성탈출: 새로운 시대',
		desc: '세상의 주인이 바뀌었다',
		img: homeImages.recommend.thumbnail2,
	},
	{
		id: 3,
		title: '설계자',
		desc: '<설계자> 5월 29일 대개봉!',
		img: homeImages.recommend.thumbnail3,
	},
	{
		id: 4,
		title: '꼬마참새 리차드: 신비한 보석 탐험',
		desc: '전세계 상타 No1 버드벤처',
		img: homeImages.recommend.thumbnail4,
	},
];

export default recommendedMovie;
