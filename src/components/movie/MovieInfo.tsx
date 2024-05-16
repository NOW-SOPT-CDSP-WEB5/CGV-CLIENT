import styled from 'styled-components';
import MovieIcons from '../../assets/movie/icon';
import Typo from '../../styles/typo/typo';

function MovieInfo() {
	return (
		<>
			<MovieInfoContainer>
				<MovieInfoWapper>
					<MovieInfoImg src={MovieIcons.movieInfo.icMovieEgg} alt="movieEgg" />
					<Typo.Caption.Caption2R11>예매율 1위</Typo.Caption.Caption2R11>
					<MovieInfoPercent>
						<Typo.Num.Number1>91.4</Typo.Num.Number1>
						<p>%</p>
					</MovieInfoPercent>
				</MovieInfoWapper>
				<MovieInfoWapper>
					<MovieInfoImg src={MovieIcons.movieInfo.icMovieTicket} alt="movieTicket" />
					<Typo.Caption.Caption2R11>PRE EGG</Typo.Caption.Caption2R11>
					<MovieInfoPercent>
						<Typo.Num.Number1>99</Typo.Num.Number1>
						<p>%</p>
					</MovieInfoPercent>
				</MovieInfoWapper>
				<MovieInfoWapper>
					<MovieInfoImg src={MovieIcons.movieInfo.icMovieGoldenEgg} alt="movieGoldenEgg" />
					<Typo.Caption.Caption2R11>GOLDEN EGG</Typo.Caption.Caption2R11>
					<MovieInfoPercent>
						<Typo.Num.Number1>91.4</Typo.Num.Number1>
						<p>%</p>
					</MovieInfoPercent>
				</MovieInfoWapper>
			</MovieInfoContainer>

			<p>
				신종 마약 사건 3년 뒤, 괴물형사 ‘마석도’(마동석)와 서울 광수대는 배달앱을 이용한 마약 판매 사건을 수사하던 중
				수배 중인 앱 개발자가 필리핀에서 사망한 사건이 대규모 온라인 불법 도박 조직과 연관되어 있음을 알아낸다. 필리핀에
				거점을 두고 납치, 감금, 폭행, 살인 등으로 대한민국 온라인 불법 도박 시장을 장악한 특수부대 용병 출신의 빌런
				‘백창기’(김무열)와 한국에서 더 큰 판을 짜고 있는 IT업계 천재 CEO ‘장동철’(이동휘). ‘마석도’는 더 커진 판을 잡기
				위해 ‘장이수’(박지환)에게 뜻밖의 협력을 제안하고 광역수사대는 물론, 사이버수사대까지 합류해 범죄를 소탕하기
				시작하는데… 나쁜 놈 잡는데 국경도 영역도 제한 없다! 업그레이드 소탕 작전! 거침없이 싹 쓸어버린다!
			</p>
			<button type="button">자세히 보기</button>
		</>
	);
}

const MovieInfoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 9.1rem;
`;

const MovieInfoWapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 9rem;
`;

const MovieInfoImg = styled.img`
	width: 3rem;
`;

const MovieInfoPercent = styled.div`
	display: flex;
	align-items: flex-end;
`;

export default MovieInfo;
