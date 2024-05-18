import styled from 'styled-components';
import InfoEgg from './MovieInfo/MovieInfoEgg';
import InfoSummary from './MovieInfo/MovieInfoSummary';

function MovieInfo() {
	return (
		<MovieInfoLayout>
			<InfoEgg />
			<Border />
			<InfoSummary />
		</MovieInfoLayout>
	);
}

const MovieInfoLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Border = styled.div`
	width: 33.5rem;
	height: 0.1rem;
	margin: 0 0 2rem;

	background-color: ${({ theme }) => theme.GreyScale.LG};
	border: none;
`;

export default MovieInfo;
