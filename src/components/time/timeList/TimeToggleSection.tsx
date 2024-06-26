import styled from 'styled-components';
import { useState } from 'react';
import Typo from '../../../styles/typo/typo';
import TimeToggleButton from './TimeToggleButton';
import TimeList from './TimeList';

function TimeToggleSection() {
	const [isOpenTimeList, setOpenTimeList] = useState<boolean>(true);
	return (
		<TimeToggleSectionContainer>
			<TimeToggleSectionWrapper>
				<Typo.Title.Title2SB15>강남</Typo.Title.Title2SB15>
				<Place>내 위치로부터 320m</Place>
				<TimeToggleButton isOpenTimeList={isOpenTimeList} setOpenTimeList={setOpenTimeList} />
			</TimeToggleSectionWrapper>
			<TimeListWrapper>{isOpenTimeList && <TimeList />}</TimeListWrapper>
		</TimeToggleSectionContainer>
	);
}
export default TimeToggleSection;

const TimeToggleSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.6rem 0 0;

	background-color: ${({ theme }) => theme.GreyScale.Background};
`;
const Place = styled(Typo.Body.Body3M14)`
	width: 11.2rem;
	height: 2rem;

	color: ${({ theme }) => theme.GreyScale.MG};
`;

const TimeToggleSectionWrapper = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: flex-start;
	padding-bottom: 0.4rem;
	padding-left: 1rem;
`;

const TimeListWrapper = styled.div`
	background-color: ${({ theme }) => theme.GreyScale.White};
`;
