import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';
import EachTheatersTimeList from './EachTheatersTimeList';
import timeIcons from '../../../assets/time/icon';

/** 각 상영관 정보 섹션 */
function EachTheatersTimeSection() {
	return (
		<SectionContainer>
			<TheaterInfoContainer>
				<Typo.Title.Title8B15>2D</Typo.Title.Title8B15>
				<TheaterInfoWrapper>
					<TheaterInfo>1관 6층</TheaterInfo>
					<img src={timeIcons.icTimeLine} alt="|" width={12} height={12} />
					<TheaterInfo>총 158석</TheaterInfo>
				</TheaterInfoWrapper>
			</TheaterInfoContainer>
			<EachTheatersTimeList />
		</SectionContainer>
	);
}

export default EachTheatersTimeSection;

const TheaterInfo = styled(Typo.Body.Body3M14)`
	color: ${({ theme }) => theme.GreyScale.DG};
`;

const SectionContainer = styled.div`
	padding: 0 0 0.2rem;
`;
const TheaterInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const TheaterInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 1rem 0.5rem 1.5rem;
`;
