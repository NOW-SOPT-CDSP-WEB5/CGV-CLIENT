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
					<MovieImgTxtBox>
						<p>1</p>
						<p>91.4%</p>
					</MovieImgTxtBox>
				</MovieImgContainer>
				<Typo.Title.Title1SB16>범죄도시4</Typo.Title.Title1SB16>
				<MovieDetailContainer>
					<EggImg src={homeIcons.icHomeEgg} alt="egg" />
					<p>99%</p>
					<img src={homeIcons.icHomeLine} alt="line" />
					<p>D-1</p>
				</MovieDetailContainer>
				<BookBtn />
			</MovieBox>

			<MovieBox>
				<MovieImgContainer>
					<MovieImg src={homeImages.movie.movie1} alt="범죄도시" />
					<MovieImgTxtBox>
						<p>1</p>
						<p>91.4%</p>
					</MovieImgTxtBox>
				</MovieImgContainer>
				<Typo.Title.Title1SB16>범죄도시4</Typo.Title.Title1SB16>
				<MovieDetailContainer>
					<EggImg src={homeIcons.icHomeEgg} alt="egg" />
					<p>99%</p>
					<img src={homeIcons.icHomeLine} alt="line" />
					<p>D-1</p>
				</MovieDetailContainer>
				<BookBtn />
			</MovieBox>

			<MovieBox>
				<MovieImgContainer>
					<MovieImg src={homeImages.movie.movie1} alt="범죄도시" />
					<MovieImgTxtBox>
						<p>1</p>
						<p>91.4%</p>
					</MovieImgTxtBox>
				</MovieImgContainer>
				<Typo.Title.Title1SB16>범죄도시4</Typo.Title.Title1SB16>
				<MovieDetailContainer>
					<EggImg src={homeIcons.icHomeEgg} alt="egg" />
					<p>99%</p>
					<img src={homeIcons.icHomeLine} alt="line" />
					<p>D-1</p>
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
const MovieImgTxtBox = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;
	padding: 0.3rem;

	color: ${({ theme }) => theme.GreyScale.White};
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
export default MovieContainer;
