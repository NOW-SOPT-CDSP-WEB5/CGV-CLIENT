import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';
import movieImages from '../../../assets/movie/images';

function DetailStillcut() {
	return (
		<StillcutLayout>
			<StillcutTitle>
				<Typo.Title.Title1SB16>포스터 스틸컷</Typo.Title.Title1SB16>
				<Typo.Title.Title11R15>68</Typo.Title.Title11R15>
			</StillcutTitle>

			<StillcutImgContainer>
				<StillcutImgWapper>
					<img src={movieImages.moviePosterImg.moviePosterImg1} alt="범죄도시 포스터1" />
					<img src={movieImages.moviePosterImg.moviePosterImg2} alt="범죄도시 포스터2" />
				</StillcutImgWapper>
				<StillcutImgWapper>
					<img src={movieImages.moviePosterImg.moviePosterImg3} alt="범죄도시 포스터3" />
					<img src={movieImages.moviePosterImg.moviePosterImg4} alt="범죄도시 포스터4" />
					<img src={movieImages.moviePosterImg.moviePosterImg5} alt="범죄도시 포스터5" />
				</StillcutImgWapper>
			</StillcutImgContainer>
		</StillcutLayout>
	);
}

const StillcutLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 8rem;
`;

const StillcutTitle = styled.div`
	display: flex;
	gap: 0.5rem;
	justify-content: flex-start;
	width: 33.5rem;
	margin-bottom: 1rem;
`;

const StillcutImgContainer = styled.div`
	display: flex;
	gap: 1.1rem;
`;

const StillcutImgWapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

export default DetailStillcut;
