import styled from 'styled-components';
import homeImages from '../../assets/home/images';

function Banner() {
	return (
		<BannerContainer>
			<BannerImg src={homeImages.banner.banner1} alt="bannerImg" />
		</BannerContainer>
	);
}

const BannerContainer = styled.div`
	width: 100%;
	height: 15.2rem;
	margin-bottom: 3.2rem;

	background-color: ${({ theme }) => theme.Color.Point};
`;

const BannerImg = styled.img`
	width: 100%;
	height: 100%;
`;
export default Banner;
