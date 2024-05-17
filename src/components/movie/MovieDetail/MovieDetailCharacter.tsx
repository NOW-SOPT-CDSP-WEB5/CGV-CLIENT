import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';
import movieImages from '../../../assets/movie/images';

function DetailCharacter() {
	return (
		<CharacterLayout>
			<CharacterTitle>감독/등장인물</CharacterTitle>
			<CharacterContainer>
				<CharacterContentWapper>
					<CharacterContent>
						<img src={movieImages.movieCharacter.movieCharacterHeo} alt="허명행" />
						<CharacterName>허명행</CharacterName>
						<ChatacterDirector>감독</ChatacterDirector>
					</CharacterContent>
					<CharacterContent>
						<img src={movieImages.movieCharacter.movieCharacterMa} alt="마동석" />
						<CharacterName>마동석</CharacterName>
					</CharacterContent>
					<CharacterContent>
						<img src={movieImages.movieCharacter.movieCharacterKim} alt="김무열" />
						<CharacterName>김무열</CharacterName>
					</CharacterContent>
					<CharacterContent>
						<img src={movieImages.movieCharacter.movieCharacterLee} alt="이동휘" />
						<CharacterName>이동휘</CharacterName>
					</CharacterContent>
					<CharacterContent>
						<img src={movieImages.movieCharacter.movieCharacterPark} alt="박지환" />
						<CharacterName>박지환</CharacterName>
					</CharacterContent>
				</CharacterContentWapper>
			</CharacterContainer>
		</CharacterLayout>
	);
}

const CharacterLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CharacterTitle = styled(Typo.Title.Title1SB16)`
	display: flex;
	gap: 0.5rem;
	justify-content: flex-start;
	width: 33.5rem;
	margin-bottom: 1rem;
`;

const CharacterContainer = styled.div`
	width: 35.3rem;
	margin-left: 1.8rem;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		visibility: hidden;
	}
`;

const CharacterContentWapper = styled.div`
	display: flex;
	gap: 1rem;
	height: 15rem;
`;

const CharacterContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CharacterName = styled(Typo.Title.Title3SB14)`
	margin-top: 0.8rem;
`;

const ChatacterDirector = styled(Typo.Body.Body1R12)`
	color: ${({ theme }) => theme.GreyScale.MG};
`;

export default DetailCharacter;
