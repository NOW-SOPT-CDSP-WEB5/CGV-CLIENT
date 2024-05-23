import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Typo from '../../../styles/typo/typo';
import EachTheatersTimeList from './EachTheatersTimeList';
import timeIcons from '../../../assets/time/icon';
import getTheaters from '../../../apis/getTheaters';

// 데이터 타입 선언
interface Theater {
	theaterId: number;
	theaterName: string;
	maxSeats: number;
	theaterType: string;
}

/** 각 상영관 정보 섹션 */
function EachTheatersTimeSection() {
	const [theaters, setTheaters] = useState<Theater[]>([]);

	const movieId = 3;
	const cinemaId = 28;

	// 영화관, 상영관 정보 가져오는 api 통신
	const getTheaterApi = async () => {
		const res = await getTheaters(movieId, cinemaId);
		const theaterInfo = res.movies[0].cinemas[0].theaters;
		setTheaters(theaterInfo);
	};

	useEffect(() => {
		getTheaterApi();
	}, []);
	return (
		<SectionContainer>
			{theaters.map((theater) => (
				<div key={theater.theaterId}>
					<TheaterInfoContainer>
						<Typo.Title.Title8B15>{theater.theaterType}</Typo.Title.Title8B15>
						<TheaterInfoWrapper>
							<TheaterInfo>{theater.theaterName}</TheaterInfo>
							<img src={timeIcons.icTimeLine} alt="|" width={12} height={12} />
							<TheaterInfo>총 {theater.maxSeats}석</TheaterInfo>
						</TheaterInfoWrapper>
					</TheaterInfoContainer>

					<EachTheatersTimeList />
				</div>
			))}
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
