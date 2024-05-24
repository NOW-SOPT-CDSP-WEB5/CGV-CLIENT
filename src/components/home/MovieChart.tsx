import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ChartCategory from './movieChart/ChartCategory';
import MovieContainer from './movieChart/MovieContainer';
import HomeSectionTitle from './HomeSectionTitle';

function MovieChart() {
	const navigation = useNavigate();
	const navigateList = () => {
		navigation('/list');
	};
	return (
		<MovieChartContainer>
			{/* 무비차트 제목 */}
			<HomeSectionTitle text="무비차트" main onClick={navigateList} />

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
