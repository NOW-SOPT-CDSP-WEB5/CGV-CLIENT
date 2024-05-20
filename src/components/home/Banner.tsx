import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import homeImages from '../../assets/home/images';
import Typo from '../../styles/typo/typo';

function Banner() {
	const bannerImgData = [
		{ id: 'banner1', img: homeImages.banner.banner1 },
		{ id: 'banner2', img: homeImages.banner.banner2 },
		{ id: 'banner3', img: homeImages.banner.banner3 },
		{ id: 'banner4', img: homeImages.banner.banner4 },
		{ id: 'banner5', img: homeImages.banner.banner5 },
		{ id: 'banner6', img: homeImages.banner.banner6 },
	];
	const [current, setCurrent] = useState(0);
	const bannerLen = bannerImgData.length;
	const bannerRef = useRef<HTMLDivElement>(null);

	/** 배너 돌리기 */
	const moveBanner = () => {
		if (current + 1 >= bannerLen) {
			setCurrent(0);
		} else setCurrent((prev) => prev + 1);
	};

	useEffect(() => {
		if (bannerRef.current) {
			bannerRef.current.style.transition = 'all 0.1s ease-in-out';
			bannerRef.current.style.transform = `translateX(-${100 * current}%)`;
		}
	}, [current]);

	useEffect(() => {
		const time = setTimeout(() => {
			moveBanner();
		}, 3000);
		return () => {
			clearInterval(time);
		};
	}, [current]);

	return (
		<BannerContainer>
			<BannerWrapper ref={bannerRef}>
				{bannerImgData.map((banner) => (
					<BannerImg key={banner.id} src={banner.img} alt={banner.id} />
				))}
			</BannerWrapper>
			<BannerIdxTxt>
				<Typo.Caption.Caption2R11>
					{current + 1}/{bannerLen}
				</Typo.Caption.Caption2R11>
			</BannerIdxTxt>
		</BannerContainer>
	);
}

const BannerContainer = styled.div`
	position: relative;
	width: 100%;
	height: 15.2rem;
	margin-bottom: 3.2rem;
	overflow: hidden;
`;
const BannerWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;
const BannerImg = styled.img`
	flex: none;
	width: 100%;
	height: 100%;
`;
const BannerIdxTxt = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.3rem 0.8rem;

	color: ${({ theme }) => theme.GreyScale.White};

	background: rgb(0 0 0 / 40%);
	border-radius: 3px 0 0;
`;
export default Banner;
