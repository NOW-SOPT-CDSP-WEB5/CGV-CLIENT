import styled from 'styled-components';
import MoviePoster from '../../assets/movie/images/logincat.jpg';

function MovieInfo() {
	return (
		<>
			<MoviePosterImg src={MoviePoster} alt="범죄도시" />
			<div>하이하이</div>
		</>
	);
}

const MoviePosterImg = styled.img`
	width: 37.5rem;
	height: 31.8rem;
`;

export default MovieInfo;
