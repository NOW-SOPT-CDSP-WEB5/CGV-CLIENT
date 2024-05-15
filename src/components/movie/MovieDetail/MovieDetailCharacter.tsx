import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';
import movieImages from '../../../assets/movie/images';

function DetailCharacter() {
	return (
		<>
			<Typo.Title.Title1SB16>감독/등장인물</Typo.Title.Title1SB16>
			<MovieCharacterWapper>
				<div>
					<img src={movieImages.movieCharacter.movieCharacterHeo} alt="허명행" />
					<Typo.Title.Title3SB14>허명행</Typo.Title.Title3SB14>
					<p>감독</p>
				</div>
				<div>
					<img src={movieImages.movieCharacter.movieCharacterMa} alt="마동석" />
					<Typo.Title.Title3SB14>마동석</Typo.Title.Title3SB14>
				</div>
				<div>
					<img src={movieImages.movieCharacter.movieCharacterKim} alt="김무열" />
					<Typo.Title.Title3SB14>김무열</Typo.Title.Title3SB14>
				</div>
				<div>
					<img src={movieImages.movieCharacter.movieCharacterLee} alt="이동휘" />
					<Typo.Title.Title3SB14>이동휘</Typo.Title.Title3SB14>
				</div>
				<div>
					<img src={movieImages.movieCharacter.movieCharacterPark} alt="박지환" />
					<Typo.Title.Title3SB14>박지환</Typo.Title.Title3SB14>
				</div>
			</MovieCharacterWapper>
		</>
	);
}

const MovieCharacterWapper = styled.div`
	display: flex;
	margin-bottom: 4.5rem;
`;

export default DetailCharacter;
