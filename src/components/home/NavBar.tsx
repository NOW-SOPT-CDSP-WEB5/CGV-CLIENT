import styled from 'styled-components';
import Typo from '../../styles/typo/typo';

function NavBar() {
	return (
		<NavBarContainer>
			<NavbarWrapper>
				<Typo.Title.Title5M15>홈</Typo.Title.Title5M15>
				<Typo.Title.Title5M15>이벤트</Typo.Title.Title5M15>
				<Typo.Title.Title5M15>패스트오더</Typo.Title.Title5M15>
				<Typo.Title.Title5M15>기프트샵</Typo.Title.Title5M15>
				<Typo.Title.Title5M15>@CGV</Typo.Title.Title5M15>
			</NavbarWrapper>
		</NavBarContainer>
	);
}
const NavBarContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 4.4rem;

	background: ${({ theme }) => theme.Grad.Key_Grad};
`;

const NavbarWrapper = styled.div`
	display: flex;
	gap: 1.8rem;
	align-items: center;
	justify-content: space-between;
	width: fit-content;

	color: ${({ theme }) => theme.GreyScale.White};
`;
export default NavBar;
