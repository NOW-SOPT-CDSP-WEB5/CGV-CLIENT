import styled from 'styled-components';
import timeImages from '../../../assets/time/images';
import timeIcon from '../../../assets/time/icon';
import PosterWrapper from './PosterWrapper';
import AddButton from './AddButton';

function TimeComparator() {
	return (
		<>
			<BackSemiCircleImg src={timeImages.imgTimeSemicircle} alt="semi circle" />
			<TimeComparatorContainer>
				<PosterWrapper src={timeImages.imgTimeMovie} name="" alt="범죄도시4">
					<TheaterChangeIcon src={timeIcon.icTimeChange} alt="change" />
				</PosterWrapper>
				<AddButton />
				<PosterWrapper src={timeImages.imgTimetheater} name="강남" alt="강남CGV">
					<TheaterChangeIcon src={timeIcon.icTimeChange} alt="change" />
				</PosterWrapper>
				<AddButton />
				<AddButton />
			</TimeComparatorContainer>
		</>
	);
}

const TimeComparatorContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 4rem 1.2rem 0;
`;

const BackSemiCircleImg = styled.img`
	position: absolute;
	z-index: 0;
`;

const TheaterChangeIcon = styled.img`
	position: absolute;
	top: 6rem;
	right: 0.5rem;
	z-index: 2;
`;

export default TimeComparator;
