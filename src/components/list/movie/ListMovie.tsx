import styled from 'styled-components';
import listImages from '../../../assets/list/images';
import Typo from '../../../styles/typo/typo';
import listIcons from '../../../assets/list/icons';
import MovieDesc from './MovieDesc';
import MovieTypeTag from './MovieTypeTag';

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

							<RedBody5M13>액션 | 범죄</RedBody5M13>
							<MovieDesc p1="개봉일" p2="2024.04.24" />
							<MovieDesc p1="예매율" p2="91.4%" />
						</MovieDescContainer>
						<MovieTypeTag />
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
	margin-top: 0.6rem;
`;
const RedBody5M13 = styled(Typo.Body.Body5M13)`
	color: ${({ theme }) => theme.Color.Red};
`;
const MovieDescContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
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
