import styled from 'styled-components';
import DetailBar from './MovieDetail/MovieDetailBar';
import DetailAudience from './MovieDetail/MovieDetailAudience';
import DetailCharacter from './MovieDetail/MovieDetailCharacter';
import DetailStillcut from './MovieDetail/MovieDetailStillcut';

function MovieDetail() {
	return (
		<>
			<Border />
			<DetailBar />
			<DetailAudience />
			<DetailCharacter />
			<DetailStillcut />
		</>
	);
}

const Border = styled.div`
	height: 1rem;
	margin: 0 0 2rem;

	background-color: ${({ theme }) => theme.GreyScale.LG};
	border: none;
`;

export default MovieDetail;
