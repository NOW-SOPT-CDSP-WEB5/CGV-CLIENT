import styled from 'styled-components';
import { useState, useEffect } from 'react';
import movieIcons from '../../assets/movie/icon';
import Typo from '../../styles/typo/typo';
import getDetail from '../../apis/getDetail';
import postHearts from '../../apis/postHearts';
import DeleteHearts from '../../apis/DeleteHearts';

function BottomBar() {
	const [like, setLike] = useState<boolean>(false);
	const [ticket, setTicket] = useState<boolean>(false);

	const loadData = async (movieId: number) => {
		const res = await getDetail(movieId);
		if (res) {
			setLike(res.isLiked);
			setTicket(res.isTicketed);
		}
	};

	useEffect(() => {
		loadData(3);
	}, [like, ticket]);

	const handleHeartBtn = async (movieId: number) => {
		if (like) {
			const res = await DeleteHearts(movieId);
			if (res) {
				setLike(false);
			}
		} else {
			const res = await postHearts(movieId);
			if (res) {
				setLike(true);
			}
		}
	};

	return (
		<BottomBarWapper>
			<BottomBarBtn type="button" onClick={() => handleHeartBtn(3)}>
				<img
					src={like ? movieIcons.BottomBar.icBtnHeartActivate : movieIcons.BottomBar.icBtnHeartDisabled}
					alt="like"
				/>
			</BottomBarBtn>

			<BottomBarBtn type="button">
				<img src={movieIcons.BottomBar.icBtnShare} alt="btn-share" />
			</BottomBarBtn>

			<TicketBtn type="button" $ticket={ticket}>
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

interface TicketBtnProps {
	$ticket: boolean;
}

const TicketBtn = styled.button<TicketBtnProps>`
	width: 25.5rem;

	background-color: ${({ theme, $ticket }) => ($ticket ? theme.GreyScale.MG : theme.Color.Point)};
	border: none;
`;

const TicketText = styled(Typo.Title.Title6B18)`
	color: ${({ theme }) => theme.GreyScale.White};
`;
export default BottomBar;
