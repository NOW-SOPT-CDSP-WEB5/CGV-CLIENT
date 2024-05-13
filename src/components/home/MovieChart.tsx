import styled from 'styled-components';
import Typo from '../../styles/typo/typo';
import homeIcons from '../../assets/home/icon';
import ChartCategory from './movieChart/ChartCategory';
import MovieContainer from './movieChart/MovieContainer';
import PartitionBar from './PartitionBar';

function MovieChart() {
	return (
		<MovieChartContainer>
			{/* 무비차트 제목 */}
			<MovieChartSectionTitle>
				<Typo.Title.Title6B18>무비차트</Typo.Title.Title6B18>
				<OverViewBtn>
					<Typo.Body.Body5M13>전체보기</Typo.Body.Body5M13>
					<img src={homeIcons.icHomeArrow} alt="arrow" />
				</OverViewBtn>
			</MovieChartSectionTitle>

			{/* 차트목록 */}
			<ChartCategory />

			{/* 영화 차트 */}
			<MovieContainer />
			<PartitionBar />
		</MovieChartContainer>
	);
}
const MovieChartContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin-right: 2rem;
	margin-left: 2rem;
`;
const MovieChartSectionTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.7rem;
`;
const OverViewBtn = styled.div`
	display: flex;
	gap: 0.6rem;
	align-items: center;

	color: ${({ theme }) => theme.GreyScale.MG};
`;

export default MovieChart;
