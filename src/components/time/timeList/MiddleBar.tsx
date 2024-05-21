import styled from 'styled-components';
import timeImages from '../../../assets/time/images';
import Typo from '../../../styles/typo/typo';
import listIcons from '../../../assets/list/icons';
import timeButtons from '../../../assets/time/buttons';

function MiddleBar() {
	return (
		<>
			<Gap />
			<MiddleBarContainer>
				<MovieInfoWrapper>
					<Poster src={timeImages.imgTimePosterMini} alt="범죄도시 포스터" />
					<Typo.Head.Head1SB17>범죄도시4</Typo.Head.Head1SB17>
					<img src={listIcons.movie.icListAge} alt="15세 관람가" width={20} height={20} />
				</MovieInfoWrapper>
				<img src={timeButtons.BtnTimeMovieinfo} alt="영화정보" />
			</MiddleBarContainer>
		</>
	);
}

export default MiddleBar;

const MiddleBarContainer = styled.div`
	display: flex;
	align-items: center;
	width: 37.5rem;
	height: 7.6rem;
`;
const MovieInfoWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
	margin: 0 14rem 0 1rem;
`;
const Gap = styled.div`
	width: 37.5rem;
	height: 0.7rem;

	background-color: ${({ theme }) => theme.GreyScale.Background};
`;

const Poster = styled.img`
	filter: drop-shadow(0 0.4rem 0.4rem rgb(0 0 0 / 13%));
`;
