import styled from 'styled-components';
import movieIcons from '../../assets/movie/icon';
import Typo from '../../styles/typo/typo';

function BottomBar() {
	return (
		<BottomBarWapper>
			<BottomBarBtn type="button">
				<img src={movieIcons.BottomBar.icBtnHeartDisabled} alt="btn-heart-disabled" />
			</BottomBarBtn>

			<BottomBarBtn type="button">
				<img src={movieIcons.BottomBar.icBtnShare} alt="btn-share" />
			</BottomBarBtn>

			<TicketBtn type="button">
				<TicketText>지금 예매하기</TicketText>
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
