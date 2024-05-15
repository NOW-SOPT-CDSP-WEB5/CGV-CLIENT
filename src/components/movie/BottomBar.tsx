import styled from 'styled-components';
import movieIcons from '../../assets/movie/icon';

function BottomBar() {
	return (
		<BottomBarWapper>
			<BottomBarBtn type="button">
				<img src={movieIcons.BottomBar.icBtnHeartDisabled} alt="btn-heart-disabled" />
			</BottomBarBtn>

			<BottomBarBtn type="button">
				<img src={movieIcons.BottomBar.icBtnShare} alt="btn-share" />
			</BottomBarBtn>

			<BottomBarBtn type="button">
				<img src={movieIcons.BottomBar.icBtnTicketing} alt="btn-ticketing" />
			</BottomBarBtn>
		</BottomBarWapper>
	);
}

const BottomBarWapper = styled.div`
	display: flex;
	margin: 0;
	padding: 0;
`;

const BottomBarBtn = styled.button`
	margin: 0;
	padding: 0;

	background-color: transparent;
	border: none;
`;

export default BottomBar;
