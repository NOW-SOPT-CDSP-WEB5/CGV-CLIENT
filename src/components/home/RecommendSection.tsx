import styled from 'styled-components';
import Typo from '../../styles/typo/typo';
import RecommendVideo from './RecommendVideo';

function RecommendSection() {
	return (
		<RecSecLayout>
			<RecSecContainer>
				<RecSecTitlePadd>
					<Typo.Title.Title8B15>추천 영화</Typo.Title.Title8B15>
				</RecSecTitlePadd>
				<RecVidSlot>
					<RecommendVideo />
					<RecommendVideo />
					<RecommendVideo />
					<RecommendVideo />
					<RecommendVideo />
					<RecommendVideo />
				</RecVidSlot>
			</RecSecContainer>
		</RecSecLayout>
	);
}
const RecSecLayout = styled.section`
	display: flex;
	align-items: center;
	width: 100%;
	height: 25.5rem;
`;
const RecSecContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
const RecSecTitlePadd = styled.div`
	padding: 0 2rem;
`;
const RecVidSlot = styled.div`
	display: flex;
	gap: 1.3rem;
	padding: 0 2rem;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		visibility: hidden;
	}
`;
export default RecommendSection;
