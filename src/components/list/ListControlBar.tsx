import styled from 'styled-components';
import Typo from '../../styles/typo/typo';
import listIcons from '../../assets/list/icons';

/** List 페이지 예매율순, Egg지수순 등 정렬 바 */
function ListControlBar() {
	return (
		<ListControlContainer>
			<SortBtnContainer>
				<SortBtn type="button" $focused>
					<img src={listIcons.icListEclipse} alt="eclipse" />
					<Typo.Body.Body5M13>예매율순</Typo.Body.Body5M13>
				</SortBtn>
				<SortBtn type="button">
					<img src={listIcons.icListEclipseMG} alt="eclipse" />
					<Typo.Body.Body5M13>Egg지수순</Typo.Body.Body5M13>
				</SortBtn>
			</SortBtnContainer>
			<CheckBtn>
				<img src={listIcons.icListCheck} alt="체크" />
				<Typo.Body.Body5M13>현재상영작보기</Typo.Body.Body5M13>
			</CheckBtn>
		</ListControlContainer>
	);
}
const ListControlContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 4.4rem;

	background-color: ${({ theme }) => theme.GreyScale.Background};
`;
const SortBtnContainer = styled.div`
	display: flex;
	gap: 1.7rem;
	padding-left: 1rem;
`;

const SortBtn = styled.button<{ $focused?: boolean }>`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: 100%;
	padding: 0;

	color: ${({ theme, $focused }) => ($focused ? theme.GreyScale.Black : theme.GreyScale.MG)};

	border: none;
`;
const CheckBtn = styled(SortBtn)`
	gap: 0;
	padding-right: 1.3rem;
`;
export default ListControlBar;
