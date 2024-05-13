import styled from 'styled-components';
import MovieIcons from '../../assets/movie/icon';
import MoviePosterImgEx from '../../assets/movie/images/logincat.jpg';
import Typo from '../../styles/typo/typo';

function MoviePoster() {
	return (
		<>
			<MoviePosterImg src={MoviePosterImgEx} alt="범죄도시" />
			<img src={MovieIcons.moviePoster.icMoviePlaying} alt="playing" />
			<Typo.Title.Title6B18>범죄도시4</Typo.Title.Title6B18>
			<Typo.Body.Body1R12>THE ROUNDUP: PUNISHMENT</Typo.Body.Body1R12>
			<Typo.Body.Body2R12>2024.04.24 개봉 | 1시간 49분 | 액션, 범죄</Typo.Body.Body2R12>
			<Typo.Body.Body2R12>플러스엠 엔터테인먼트 | 15세이상관람가</Typo.Body.Body2R12>
			<img src={MovieIcons.moviePoster.icMovie4dx} alt="4dx" />
			<img src={MovieIcons.moviePoster.icMovieImax} alt="imax" />
		</>
	);
}

const MoviePosterImg = styled.img`
	width: 37.5rem;
	height: 31.8rem;
`;

export default MoviePoster;
