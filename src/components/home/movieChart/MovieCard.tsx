import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';
import homeIcons from '../../../assets/home/icon';
import BookBtn from '../BookBtn';
import { MovieListType } from '../../../types/home/types';
import getAgeIconSrc from '../../../utils/common/getAgeIconSrc';
import getDDay from '../../../utils/home/getDDay';

function MovieCard({
	movie: { id, name, reservationRate, eggRate, GoldenEggRate, releaseDate, filmRatings, imageUrl },
}: {
	movie: MovieListType;
}) {
	return (
		<MovieBox>
			<MovieImgContainer>
				<MovieImgShade />
				<MovieImg src={imageUrl} alt={name} />
				<MovieImgTxtWrapper>
					<AgeImg src={getAgeIconSrc(filmRatings)} alt={filmRatings} />
					<MovieImgTxtBox>
						<MovieImgTextNumber>{id}</MovieImgTextNumber>
						<MovieImgTextDesc>{reservationRate}%</MovieImgTextDesc>
					</MovieImgTxtBox>
				</MovieImgTxtWrapper>
			</MovieImgContainer>
			<MovieTitle>{name}</MovieTitle>
			<MovieDetailContainer>
				<EggImg src={GoldenEggRate ? homeIcons.icHomeGoldenEgg : homeIcons.icHomeEgg} alt="egg" />
				<MGBody5M13>{GoldenEggRate || eggRate}%</MGBody5M13>
				<img src={homeIcons.icHomeLine} alt="line" />
				<PointBody5M13>{getDDay(releaseDate)}</PointBody5M13>
			</MovieDetailContainer>
			<BookBtn />
		</MovieBox>
	);
}
const MovieBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const MovieTitle = styled(Typo.Title.Title1SB16)`
	width: 15rem;
	overflow: hidden;

	white-space: nowrap;
	text-align: center;
	text-overflow: ellipsis;
`;
const MovieImgContainer = styled.div`
	position: relative;
	width: 16rem;
	height: 22rem;
	margin-bottom: 1.1rem;
`;
const MovieImgShade = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	background: ${({ theme }) => theme.Grad.Image_Grad};
	border-radius: 10px;
`;
const MovieImg = styled.img`
	width: 100%;
	height: 100%;

	border-radius: 10px;
`;
const MovieImgTxtWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;

	color: ${({ theme }) => theme.GreyScale.White};
`;
const MovieImgTxtBox = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: baseline;
`;
const MovieImgTextNumber = styled.p`
	color: ${({ theme }) => theme.GreyScale.White};
	font-weight: 500;
	font-size: 4.8rem;
	font-style: italic;
`;
const MovieImgTextDesc = styled.p`
	color: ${({ theme }) => theme.GreyScale.White};
	font-weight: 400;
	font-size: 1.4rem;
`;
const MovieDetailContainer = styled.div`
	display: flex;
	gap: 0.6rem;
	align-items: center;
	margin-top: 0.3rem;
	margin-bottom: 1rem;
`;
const EggImg = styled.img`
	width: 1.4rem;
	height: 1.6rem;
`;
const AgeImg = styled.img`
	align-self: flex-end;
	width: 2rem;
	height: 2rem;
	padding: 0.5rem;
`;
const MGBody5M13 = styled(Typo.Body.Body5M13)`
	color: ${({ theme }) => theme.GreyScale.MG};
`;
const PointBody5M13 = styled(Typo.Body.Body5M13)`
	color: ${({ theme }) => theme.Color.Point};
`;
export default MovieCard;
