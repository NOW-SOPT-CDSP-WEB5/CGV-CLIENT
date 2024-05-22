import styled from 'styled-components';
import listIcons from '../../../assets/list/icons';
import TAGTYPE from '../../../constants/tagType';

/** 영화 상영관 태그 목록 */
function MovieTypeTag({ theaterType }: { theaterType: string }) {
	const tagArr = theaterType.split('|');
	/** select tag img src */
	const tagImgSrc = (tag: string) => {
		let tagSrc = '';
		switch (tag) {
			case TAGTYPE['2D']:
				break;
			case TAGTYPE['4DX']:
				tagSrc = listIcons.movie.tags.icMovieType4DX;
				break;
			case TAGTYPE.IMAX:
				tagSrc = listIcons.movie.tags.icMovieTypeIMAX;
				break;
			case TAGTYPE.ScreenX:
				tagSrc = listIcons.movie.tags.icMovieTypeSCREENX;
				break;
			default:
				break;
		}
		return tagSrc;
	};
	return (
		<MovieTypeTagSlot>
			{tagArr.map((tag) => tag !== TAGTYPE['2D'] && <MovieTypeTagImg key={tag} src={tagImgSrc(tag)} alt={tag} />)}
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
