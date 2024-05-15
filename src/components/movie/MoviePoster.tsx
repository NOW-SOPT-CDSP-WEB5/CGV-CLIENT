import styled from 'styled-components';
import MovieIcons from '../../assets/movie/icon';
import MoviePosterImgEx from '../../assets/movie/images/img_movie_bg.svg'; // 예시 파일입니다.
import Typo from '../../styles/typo/typo';

function MoviePoster() {
	return (
		<MoviePosterContainer>
			<MoviePosterImg src={MoviePosterImgEx} alt="범죄도시" />
			<GradientOverlay />
			<MoviePlayingIcon src={MovieIcons.moviePoster.icMoviePlaying} alt="playing" />
			<MoviePosterTextWapper>
				<MovieTitleText>범죄도시4</MovieTitleText>
				<MovieSubTitleText>THE ROUNDUP: PUNISHMENT</MovieSubTitleText>
				<MovieInfoText>
					2024.04.24 개봉 <MovieInfoSpanText>|</MovieInfoSpanText> 1시간 49분 <MovieInfoSpanText>|</MovieInfoSpanText>{' '}
					액션, 범죄
				</MovieInfoText>
				<MovieInfoText>
					플러스엠 엔터테인먼트 <MovieInfoSpanText>|</MovieInfoSpanText> 15세이상관람가
				</MovieInfoText>
			</MoviePosterTextWapper>
			<MoviePosterIconWapper>
				<MoviePostIcon src={MovieIcons.moviePoster.icMovie4dx} alt="4dx" />
				<MoviePostIcon src={MovieIcons.moviePoster.icMovieImax} alt="imax" />
			</MoviePosterIconWapper>
		</MoviePosterContainer>
	);
}

const MoviePosterContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MoviePosterImg = styled.img`
	width: 37.5rem;
	height: 31.8rem;
`;

const GradientOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	background: linear-gradient(to top, rgb(0 0 0 / 100%), rgb(0 0 0 / 0%));

	pointer-events: none; /* 오버레이가 클릭을 방해하지 않도록 */
`;

const MoviePlayingIcon = styled.img`
	position: absolute;
	top: 1.5rem;
	right: 2rem;
`;

const MoviePosterTextWapper = styled.div`
	position: absolute;
	top: 18.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MovieTitleText = styled(Typo.Title.Title6B18)`
	margin-bottom: 0.3rem;

	color: ${({ theme }) => theme.GreyScale.White};
`;

const MovieSubTitleText = styled(Typo.Body.Body1R12)`
	margin-bottom: 1rem;

	color: ${({ theme }) => theme.Transparent.White40};
`;

const MovieInfoText = styled(Typo.Body.Body2R12)`
	color: ${({ theme }) => theme.Transparent.White75};
`;

const MovieInfoSpanText = styled.span`
	color: ${({ theme }) => theme.Transparent.White40};
`;

const MoviePosterIconWapper = styled.div`
	position: absolute;
	top: 28rem;
	display: flex;
	justify-content: space-between;
	width: 8.5rem;
	height: 1.5rem;
`;

const MoviePostIcon = styled.img`
	width: 4rem;
`;

export default MoviePoster;
