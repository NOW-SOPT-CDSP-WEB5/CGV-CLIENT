export interface HomeRecommededMovieType {
	id: number;
	title: string;
	desc: string;
	img: string;
}

/** 영화 리스트 타입 */
export interface MovieListType {
	id: number;
	name: string;
	reservationRate: number;
	eggRate: number;
	GoldenEggRate: number;
	releaseDate: string;
	filmRatings: string;
	imageUrl: string;
	genres: string;
	theaterType: string;
}
