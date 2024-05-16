import styled from 'styled-components';
import homeImages from '../../../assets/home/images';
import Typo from '../../../styles/typo/typo';
import homeIcons from '../../../assets/home/icon';
import BookBtn from '../BookBtn';

function MovieContainer() {
	return (
		<MovieLayout>
			<MovieBox>
				<MovieImgContainer>
					<MovieImg src={homeImages.movie.movie1} alt="범죄도시" />
					<MovieImgTxtWrapper>
						<AgeImg src={homeIcons.icHomeAge} alt="15세 제한" />
						<MovieImgTxtBox>
							<MovieImgTextNumber>1</MovieImgTextNumber>
							<MovieImgTextDesc>91.4%</MovieImgTextDesc>
						</MovieImgTxtBox>
					</MovieImgTxtWrapper>
				</MovieImgContainer>
				<Typo.Title.Title1SB16>범죄도시4</Typo.Title.Title1SB16>
				<MovieDetailContainer>
					<EggImg src={homeIcons.icHomeEgg} alt="egg" />
					<MGBody5M13>99%</MGBody5M13>
					<img src={homeIcons.icHomeLine} alt="line" />
					<PointBody5M13>D-1</PointBody5M13>
				</MovieDetailContainer>
				<BookBtn />
			</MovieBox>
		</MovieLayout>
	);
}
const MovieLayout = styled.div`
	display: flex;
	gap: 1rem;
	margin: 2.3rem 0;
	padding: 0 2rem;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		visibility: hidden;
	}
`;
const MovieBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const MovieImgContainer = styled.div`
	position: relative;
	width: 16rem;
	height: 22rem;
	margin-bottom: 1.1rem;
`;
const MovieImg = styled.img`
	width: 100%;
	height: 100%;
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
	margin-top: 0.2rem;
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
export default MovieContainer;
