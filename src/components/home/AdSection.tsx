import styled from 'styled-components';
import homeImages from '../../assets/home/images';

function AdSection() {
	return (
		<section>
			<AdImg src={homeImages.homeAd1} alt="ad1" />
			<AdImg src={homeImages.homeAd2} alt="ad2" />
		</section>
	);
}
const AdImg = styled.img`
	width: 100%;
	height: fit-content;
`;
export default AdSection;
