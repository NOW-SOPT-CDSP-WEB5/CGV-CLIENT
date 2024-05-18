import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';
import movieIcons from '../../../assets/movie/icon';

function DetailAudience() {
	return (
		<AudienceTitleLayout>
			<AudienceTitleWapper>
				<AudienceTitle>
					<Typo.Title.Title1SB16>누적 관객수</Typo.Title.Title1SB16>
					<Typo.Title.Title11R15>871만명</Typo.Title.Title11R15>
				</AudienceTitle>
				<AudienceDate>2024.05.08 기준</AudienceDate>
			</AudienceTitleWapper>
			<AudienceContentWapper>
				<AudienceContent>
					<AudienceContentTitle>일별 관객 수.순위</AudienceContentTitle>
					<AudienceContentText>
						<Typo.Head.Head1SB17>14만명</Typo.Head.Head1SB17>
						<AudienceContentSub>오후 6시 기준</AudienceContentSub>
					</AudienceContentText>
					<Typo.Body.Body3M14>박스오피스 1위</Typo.Body.Body3M14>
				</AudienceContent>

				<AudienceContent>
					<AudienceContentTitle>평점</AudienceContentTitle>
					<AudienceContentText>
						<AudienceContentStar src={movieIcons.movieDetail.icMovieStar} alt="star" />
						<Typo.Head.Head1SB17>7.60</Typo.Head.Head1SB17>
						<AudienceContentSub>실관람객 평점</AudienceContentSub>
					</AudienceContentText>
					<AudienceContentText>
						<AudienceContentStar src={movieIcons.movieDetail.icMovieStar} alt="star" />
						<Typo.Head.Head1SB17>7.71</Typo.Head.Head1SB17>
						<AudienceContentSub>네티즌 평점</AudienceContentSub>
					</AudienceContentText>
				</AudienceContent>
			</AudienceContentWapper>
		</AudienceTitleLayout>
	);
}

const AudienceTitleLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1rem;
`;

const AudienceTitleWapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 33.5rem;
	margin: 2rem 0 1rem;
`;

const AudienceTitle = styled.div`
	display: flex;
	gap: 0.5rem;
	justify-content: flex-start;
`;

const AudienceDate = styled(Typo.Caption.Caption1M10)`
	color: ${({ theme }) => theme.GreyScale.MG};
`;

const AudienceContentWapper = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	width: 33.5rem;
    margin-bottom: 4.5rem;
`;

const AudienceContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	justify-content: center;
	width: 16.2rem;
	height: 10.8rem;
	padding-left: 1rem;

	background-color: ${({ theme }) => theme.GreyScale.LG};
	border-radius: 0.8rem;
`;

const AudienceContentTitle = styled(Typo.Title.Title3SB14)`
	margin-bottom: 0.5rem;

	color: ${({ theme }) => theme.GreyScale.DG};
`;

const AudienceContentText = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: flex-end;
`;

const AudienceContentSub = styled(Typo.Body.Body1R12)`
	color: ${({ theme }) => theme.GreyScale.MG};
`;

const AudienceContentStar = styled.img`
	width: 1.8rem;
	margin-bottom: 0.1rem;
`;

export default DetailAudience;
