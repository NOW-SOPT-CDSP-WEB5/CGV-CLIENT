import styled from 'styled-components';
import MovieIcons from '../../../assets/movie/icon';
import Typo from '../../../styles/typo/typo';

function InfoEgg() {
	return (
		<InfoEggContainer>
			<InfoEggWapper>
				<InfoEggImg src={MovieIcons.movieInfo.icMovieTicket} alt="movieEgg" />
				<InfoEggText>예매율 1위</InfoEggText>
				<InfoEggPercent>
					<Typo.Num.Number1>91.4</Typo.Num.Number1>
					<InfoEggPercentImg src={MovieIcons.movieDetail.icMoviePercent} alt="percent" />
				</InfoEggPercent>
			</InfoEggWapper>
			<InfoEggWapper>
				<InfoEggImg src={MovieIcons.movieInfo.icMovieEgg} alt="movieTicket" />
				<InfoEggText>PRE EGG</InfoEggText>
				<InfoEggPercent>
					<Typo.Num.Number1>99</Typo.Num.Number1>
					<InfoEggPercentImg src={MovieIcons.movieDetail.icMoviePercent} alt="percent" />
				</InfoEggPercent>
			</InfoEggWapper>
			<InfoEggWapper>
				<InfoEggImg src={MovieIcons.movieInfo.icMovieGoldenEgg} alt="movieGoldenEgg" />
				<InfoEggText>GOLDEN EGG</InfoEggText>
				<InfoEggPercent>
					<Typo.Num.Number1>91.4</Typo.Num.Number1>
					<InfoEggPercentImg src={MovieIcons.movieDetail.icMoviePercent} alt="percent" />
				</InfoEggPercent>
			</InfoEggWapper>
		</InfoEggContainer>
	);
}

const InfoEggContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 33.5rem;
	height: 9.1rem;
	margin-top: 0.5rem;
`;

const InfoEggWapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: center;
	width: 9rem;
`;

const InfoEggImg = styled.img`
	width: 3rem;
`;

const InfoEggText = styled(Typo.Caption.Caption2R11)`
	color: ${({ theme }) => theme.GreyScale.MG};
`;

const InfoEggPercent = styled.div`
	display: flex;
`;

const InfoEggPercentImg = styled.img`
	margin-top: 0.5rem;
`;

export default InfoEgg;
