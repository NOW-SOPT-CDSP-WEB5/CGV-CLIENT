import styled from 'styled-components';
import timeButtons from '../../assets/time/buttons';
import timeImages from '../../assets/time/images';
import timeIcon from '../../assets/time/icon';

function AddMovieTheater() {
	return (
		<>
			<BackSemiCircleImg src={timeImages.imgTimeSemicircle} alt="semi circle" />
			<AddMovieTheaterContainer>
				<AddMovieTheaterWrapper>
					<AddMovieTheaterImg src={timeImages.imgTimeMovie} alt="add movie button" />
					<MovieChangeIcon src={timeIcon.icTimeChange} alt="change" />
				</AddMovieTheaterWrapper>
				<AddMovieTheaterButton>
					<AddMovieTheaterImg src={timeButtons.BtnTimeAddmovie} alt="add movie button" />
				</AddMovieTheaterButton>
				<AddMovieTheaterButton>
					<AddMovieTheaterImg src={timeButtons.BtnTimeAddmovie} alt="add movie button" />
				</AddMovieTheaterButton>
				<AddMovieTheaterWrapper>
					<AddMovieTheaterImg src={timeImages.imgTimetheater} alt="add movie theater" />
					<TheaterName>강남</TheaterName>
					<TheaterChangeIcon src={timeIcon.icTimeChange} alt="change" />
				</AddMovieTheaterWrapper>
				<AddMovieTheaterButton>
					<AddMovieTheaterImg src={timeButtons.BtnTimeAddtheater} alt="add movie theater" />
				</AddMovieTheaterButton>
			</AddMovieTheaterContainer>
		</>
	);
}
const AddMovieTheaterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 4rem 1.2rem 0;
`;

const AddMovieTheaterWrapper = styled.div`
	position: relative;
`;
const AddMovieTheaterButton = styled.div`
	z-index: 1;
	padding: 0 0.2rem;

	cursor: pointer;
`;
const AddMovieTheaterImg = styled.img`
	z-index: 1;

	cursor: pointer;
	filter: drop-shadow(0 0.4rem 0.4rem rgb(0 0 0 / 13%));
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
export default AddMovieTheater;
