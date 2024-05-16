import styled from 'styled-components';
import listIcons from '../../../assets/list/icons';

/** 영화 상영관 태그 목록 */
function MovieTypeTag() {
	return (
		<MovieTypeTagSlot>
			<MovieTypeTagImg src={listIcons.movie.tags.icMovieTypeIMAX} alt="IMAX" />
			<MovieTypeTagImg src={listIcons.movie.tags.icMovieType4DX} alt="4DX" />
		</MovieTypeTagSlot>
	);
}
const MovieTypeTagSlot = styled.div`
	display: flex;
	gap: 0.5rem;
`;
const MovieTypeTagImg = styled.img`
	width: 4.6rem;
	height: 2rem;
`;
export default MovieTypeTag;
