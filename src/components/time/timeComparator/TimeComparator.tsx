import styled from 'styled-components';
import timeButtons from '../../../assets/time/buttons';
import timeImages from '../../../assets/time/images';
import timeIcon from '../../../assets/time/icon';
import TimeComparatorWrapper from './TimeComparatorWrapper';
import TimeComparatorImg from './TimeComparatorImg';

function TimeComparator() {
	return (
		<>
			<BackSemiCircleImg src={timeImages.imgTimeSemicircle} alt="semi circle" />
			<TimeComparatorContainer>
				<TimeComparatorWrapper>
					<TimeComparatorImg src={timeImages.imgTimeMovie} alt="add movie button" />
					<MovieChangeIcon src={timeIcon.icTimeChange} alt="change" />
				</TimeComparatorWrapper>
				<TimeComparatorButton>
					<TimeComparatorImg src={timeButtons.BtnTimeAddmovie} alt="add movie button" />
				</TimeComparatorButton>
				<TimeComparatorButton>
					<TimeComparatorImg src={timeButtons.BtnTimeAddmovie} alt="add movie button" />
				</TimeComparatorButton>
				<TimeComparatorWrapper>
					<TimeComparatorImg src={timeImages.imgTimetheater} alt="add movie theater" />
					<TheaterName>강남</TheaterName>
					<TheaterChangeIcon src={timeIcon.icTimeChange} alt="change" />
				</TimeComparatorWrapper>
				<TimeComparatorButton>
					<TimeComparatorImg src={timeButtons.BtnTimeAddtheater} alt="add movie theater" />
				</TimeComparatorButton>
			</TimeComparatorContainer>
		</>
	);
}
const TimeComparatorContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 4rem 1.2rem 0;
`;

const TimeComparatorButton = styled.div`
	z-index: 1;
	padding: 0 0.2rem;

	cursor: pointer;
`;

const BackSemiCircleImg = styled.img`
	position: absolute;
	z-index: 0;
`;

const MovieChangeIcon = styled.img`
	position: absolute;
	top: 6rem;
	right: 0.5rem;
	z-index: 2;
`;
const TheaterName = styled.p`
	position: absolute;
	top: 1rem;
	left: 1rem;
	z-index: 2;
	width: 1.9rem;

	color: ${({ theme }) => theme.Transparent.White75};
`;

const TheaterChangeIcon = styled.img`
	position: absolute;
	top: 6rem;
	right: 0.5rem;
	z-index: 2;
`;
export default TimeComparator;
