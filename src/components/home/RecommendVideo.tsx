import styled from 'styled-components';
import homeImages from '../../assets/home/images';
import Typo from '../../styles/typo/typo';
import homeIcons from '../../assets/home/icon';

function RecommendVideo() {
	return (
		<RecVidContainer>
			<ThumbailContainer>
				<ThumbnailImg src={homeImages.recommend.thumbnail1} alt="thumbnail1" />
				<ThumbnailPlayIco src={homeIcons.btnHomeVideoPlay} alt="videoplay" />
			</ThumbailContainer>
			<ThumbnailDescContainer>
				<Typo.Title.Title7B13>가필드 더 무비</Typo.Title.Title7B13>
				<ThumbnailDescText>
					<Typo.Caption.Caption3SB11>압도적 귀여움 가필드가 해냄!</Typo.Caption.Caption3SB11>
				</ThumbnailDescText>
			</ThumbnailDescContainer>
		</RecVidContainer>
	);
}
const RecVidContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	width: 20rem;
	height: 17.3rem;

	background-color: ${({ theme }) => theme.GreyScale.White};
	border: solid 1px ${({ theme }) => theme.GreyScale.LG2};
	border-radius: 5px;
`;
const ThumbailContainer = styled.div`
	position: relative;
`;
const ThumbnailImg = styled.img`
	width: 100%;
`;
const ThumbnailPlayIco = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;

	transform: translate(-50%, -50%);
`;
const ThumbnailDescText = styled.div`
	color: ${({ theme }) => theme.GreyScale.MG};
`;
const ThumbnailDescContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 6.2rem;
	padding-left: 1.3rem;
`;
export default RecommendVideo;
