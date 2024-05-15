import styled from 'styled-components';
import homeImages from '../../assets/home/images';
import BookBtn from './BookBtn';
import Typo from '../../styles/typo/typo';

function IceConSection() {
	return (
		<IceConLayout>
			<IceConContainer>
				<IceConBgImg src={homeImages.icecon.imgHomeIceconBg} alt="icecon background" />
				<IceConImg src={homeImages.icecon.imgHomeIcecon} alt="icecon poster" />
			</IceConContainer>
			<ContentWrapper>
				<TextWrapper>
					<Typo.Title.Title1SB16>슈가|어거스트 디 투어 ‘디-데이’ 더 무비</Typo.Title.Title1SB16>
					<BrownTxt>
						<Typo.Body.Body5M13>
							방탄소년단 슈가이자 솔로 아티스트{'\n'}August D의 앙코르 콘서트 실황
						</Typo.Body.Body5M13>
					</BrownTxt>
				</TextWrapper>
				<BookBtn />
			</ContentWrapper>
			<LineWrapper>
				<BaseLine />
				<FocusedLine />
			</LineWrapper>
		</IceConLayout>
	);
}

const IceConLayout = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 49.3rem;
`;
const IceConContainer = styled.div`
	position: relative;
`;
const IceConBgImg = styled.img`
	position: relative;
	width: 100%;
`;
const IceConImg = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 15.1rem;
	margin-top: 9.4rem;

	transform: translate(-50%, -50%);
`;
const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.2rem;
	align-items: center;
	margin-top: 12rem;

	white-space: pre-wrap;
	text-align: center;
`;
const LineWrapper = styled.div`
	position: absolute;
	right: 0;
	bottom: 2.1rem;
	display: flex;
	width: fit-content;
	height: fit-content;
`;
const BaseLine = styled.div`
	width: 35.1rem;
	height: 1px;

	background-color: ${({ theme }) => theme.GreyScale.LG2};
`;
const FocusedLine = styled.div`
	position: absolute;
	width: 11.7rem;
	height: 1px;

	background-color: ${({ theme }) => theme.GreyScale.Black};
`;
const BrownTxt = styled.div`
	color: #af6646;
`;
export default IceConSection;
