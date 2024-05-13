import styled from 'styled-components';
import timeButtons from '../../assets/time/buttons';
import timeImages from '../../assets/time/images';
import timeIcon from '../../assets/time/icon';

function AddMovieTheater() {
	return (
		<>
			<BackSemiCircleImg src={timeImages.imgTimeSemicircle} alt="semi circle" />
			<AddMovieTheaterWrapper>
				<>
					<AddMovieTheaterImg src={timeImages.imgTimeMovie} alt="add movie button" />
					<MovieChangeIcon src={timeIcon.icTimeChange} alt="change" />
				</>
				<AddMovieTheaterButton>
					<AddMovieTheaterImg src={timeButtons.BtnTimeAddmovie} alt="add movie button" />
				</AddMovieTheaterButton>
				<AddMovieTheaterButton>
					<AddMovieTheaterImg src={timeButtons.BtnTimeAddmovie} alt="add movie button" />
				</AddMovieTheaterButton>
				<>
					<AddMovieTheaterImg src={timeImages.imgTimetheater} alt="add movie theater" />
					<TheaterName>강남</TheaterName>
					<TheaterChangeIcon src={timeIcon.icTimeChange} alt="change" />
				</>
				<AddMovieTheaterButton>
					<AddMovieTheaterImg src={timeButtons.BtnTimeAddtheater} alt="add movie theater" />
				</AddMovieTheaterButton>
			</AddMovieTheaterWrapper>
		</>
	);
}
const AddMovieTheaterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 4rem 1rem 0 0.5rem;
`;

const AddMovieTheaterButton = styled.div`
	z-index: 1;
	padding: 0 0.2rem;
`;
const AddMovieTheaterImg = styled.img`
	z-index: 1;
`;

const BackSemiCircleImg = styled.img`
	position: absolute;
	z-index: 0;
`;

const MovieChangeIcon = styled.img`
	position: absolute;
	top: 14.5rem;
	left: 11rem;
	z-index: 2;
`;
const TheaterName = styled.p`
	position: absolute;
	top: 9.5rem;
	right: 17.5rem;
	z-index: 2;

	color: ${({ theme }) => theme.Transparent.White75};
`;

const TheaterChangeIcon = styled.img`
	position: absolute;
	top: 14.5rem;
	right: 14rem;
	z-index: 2;
`;
export default AddMovieTheater;
