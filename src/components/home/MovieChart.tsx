import styled from 'styled-components';
import Typo from '../../styles/typo/typo';
import homeIcons from '../../assets/home/icon';

function MovieChart() {
	return (
		<div>
			<MovieChartSectionTitle>
				<Typo.Title.Title6B18>무비차트</Typo.Title.Title6B18>
				<OverViewBtn>
					<Typo.Body.Body5M13>전체보기</Typo.Body.Body5M13>
					<img src={homeIcons.icHomeArrow} alt="arrow" />
				</OverViewBtn>
			</MovieChartSectionTitle>
		</div>
	);
}

const MovieChartSectionTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-right: 2rem;
	margin-bottom: 0.7rem;
	margin-left: 2rem;
`;
const OverViewBtn = styled.div`
	display: flex;
	gap: 0.6rem;
	align-items: center;

	color: ${({ theme }) => theme.GreyScale.MG};
`;
export default MovieChart;
