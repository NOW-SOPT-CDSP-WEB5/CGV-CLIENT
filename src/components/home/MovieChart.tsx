import styled from 'styled-components';
import ChartCategory from './movieChart/ChartCategory';
import MovieContainer from './movieChart/MovieContainer';
import HomeSectionTitle from './HomeSectionTitle';

function MovieChart() {
	return (
		<MovieChartContainer>
			{/* 무비차트 제목 */}
			<HomeSectionTitle text="무비차트" />

			{/* 차트목록 */}
			<ChartCategory />

			{/* 영화 차트 */}
			<MovieContainer />
		</MovieChartContainer>
	);
}

const MovieChartContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

export default MovieChart;
