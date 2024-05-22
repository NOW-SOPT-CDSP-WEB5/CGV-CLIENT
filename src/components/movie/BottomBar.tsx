import styled from 'styled-components';
import { useState, useEffect } from 'react';
import movieIcons from '../../assets/movie/icon';
import Typo from '../../styles/typo/typo';
import getDetail from '../../apis/getDetail';

function BottomBar() {
	const [like, setLike] = useState<boolean>(false);
	const [ticket, setTicket] = useState<boolean>(false);

	const loadLikeData = async (movieId: number) => {
		const res = await getDetail(movieId);
		if (res) {
			setLike(res.isLiked);
		}
	};

	const loadTicketData = async (movieId: number) => {
		const res = await getDetail(movieId);
		if (res) {
			setTicket(res.isTicketed);
		}
	};

	useEffect(() => {
		loadLikeData(3);
		loadTicketData(3);
	}, [like, ticket]);

	return (
		<BottomBarWapper>
			<BottomBarBtn type="button">
				<img
					src={like ? movieIcons.BottomBar.icBtnHeartActivate : movieIcons.BottomBar.icBtnHeartDisabled}
					alt="like"
				/>
			</BottomBarBtn>

			<BottomBarBtn type="button">
				<img src={movieIcons.BottomBar.icBtnShare} alt="btn-share" />
			</BottomBarBtn>

			<TicketBtn type="button">
				<TicketText>{ticket ? '예매된 영화' : '지금 예매하기'}</TicketText>
			</TicketBtn>
		</BottomBarWapper>
	);
}

const BottomBarWapper = styled.div`
	position: fixed;
	bottom: 0;
	display: flex;
	gap: 0;
`;

const BottomBarBtn = styled.button`
	width: 6rem;
	margin: 0;
	padding: 0;

	background-color: ${({ theme }) => theme.GreyScale.White};
	border: none;
`;

const TicketBtn = styled.button`
	width: 25.5rem;

	background-color: ${({ theme }) => theme.Color.Point};
	border: none;
`;

const TicketText = styled(Typo.Title.Title6B18)`
	color: ${({ theme }) => theme.GreyScale.White};
`;
export default BottomBar;
