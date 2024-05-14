import styled from 'styled-components';
import Typo from '../../styles/typo/typo';
import homeImages from '../../assets/home/images';
import SuiteMenu from './Suite/SuiteMenu';
import SuiteBtn from './Suite/SuiteBtn';

function SpecialCinema() {
	return (
		<SpecialCinemaLayout>
			<Typo.Title.Title8B15>특별관</Typo.Title.Title8B15>
			<SuiteCinema>
				<Typo.Title.Title3SB14>SUITE CINEMA</Typo.Title.Title3SB14>
			</SuiteCinema>
			<SuiteImge src={homeImages.imgHomeSuite} alt="suite cinema" />

			<SuiteMenu />
			<SuiteBtn />
		</SpecialCinemaLayout>
	);
}
const SpecialCinemaLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: fit-content;
	margin-bottom: 5.1rem;

	background-color: ${({ theme }) => theme.GreyScale.White};
`;
const SuiteCinema = styled.div`
	height: fit-content;
	margin: 0 2rem;
	padding: 1.3rem;

	border: solid 1px ${({ theme }) => theme.GreyScale.Black};
	border-radius: 8px;
`;
const SuiteImge = styled.img`
	align-self: center;
	width: 31.5rem;
	margin: 1rem 0;
`;

export default SpecialCinema;
