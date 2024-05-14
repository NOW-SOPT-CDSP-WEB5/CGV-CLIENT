import styled from 'styled-components';
import listImages from '../../assets/list/images';
import Typo from '../../styles/typo/typo';
import listIcons from '../../assets/list/icons';

function ListMovie() {
	return (
		<MovieLayout>
			<MovieContainer>
				<MovieBox>
					<MovieImg src={listImages.movie.poster1} alt="movie" />

					<MovieContentWrapper>
						<MovieDescContainer>
							<MovieTitleWrapper>
								<Typo.Title.Title10B19>범죄도시</Typo.Title.Title10B19>
								<AgeImg src={listIcons.movie.icListAge} alt="age15" />
							</MovieTitleWrapper>

							<Typo.Body.Body5M13>액션 | 범죄</Typo.Body.Body5M13>
							<MovieDescWrapper>
								<Typo.Body.Body5M13>개봉일</Typo.Body.Body5M13>
								<Typo.Body.Body6B13>2024.04.24</Typo.Body.Body6B13>
							</MovieDescWrapper>
							<MovieDescWrapper>
								<Typo.Body.Body5M13>예매율</Typo.Body.Body5M13>
								<Typo.Body.Body6B13>91.4%</Typo.Body.Body6B13>
							</MovieDescWrapper>
						</MovieDescContainer>

						<MovieTypeTagSlot>
							<MovieTypeTagImg src={listIcons.movie.tags.icMovieTypeIMAX} alt="IMAX" />
							<MovieTypeTagImg src={listIcons.movie.tags.icMovieType4DX} alt="4DX" />
						</MovieTypeTagSlot>
					</MovieContentWrapper>
				</MovieBox>
				<BookNowBtn type="button">
					<Typo.Body.Body5M13>지금 예매</Typo.Body.Body5M13>
				</BookNowBtn>
			</MovieContainer>
			<MovieLine />
		</MovieLayout>
	);
}

const MovieLayout = styled.div`
	display: flex;
	flex-direction: column;
	height: 16rem;
	padding: 1.2rem;
`;
const MovieContainer = styled.div`
	display: flex;
	align-items: end;
	justify-content: space-between;
	height: 100%;
`;
const MovieBox = styled.div`
	display: flex;
	gap: 1.27rem;
	height: 100%;
`;
const MovieImg = styled.img`
	width: auto;
	height: 100%;
`;
const AgeImg = styled.img`
	width: 2rem;
	height: 2rem;
`;
const MovieContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const MovieTitleWrapper = styled.div`
	display: flex;
	gap: 0.7rem;
`;
const MovieDescWrapper = styled.div`
	display: flex;
	gap: 0.9rem;
`;
const MovieDescContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`;
const MovieTypeTagSlot = styled.div`
	display: flex;
	gap: 0.5rem;
`;
const MovieTypeTagImg = styled.img`
	width: 4.6rem;
	height: 2rem;
`;

const BookNowBtn = styled.button`
	width: fit-content;
	height: fit-content;
	padding: 0.7rem 0.8rem;

	color: ${({ theme }) => theme.GreyScale.White};

	background-color: ${({ theme }) => theme.Color.Red};
	border: none;
	border-radius: 3px;
`;
const MovieLine = styled.div`
	width: 35.6rem;
	height: 1px;

	background-color: ${({ theme }) => theme.GreyScale.LG};
`;
export default ListMovie;
