import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';

function ChartCategory() {
	return (
		<ChartCategoryLayout>
			<ChartCategoryContainer>
				<ChartCategoryBtn $focused>
					<Typo.Title.Title3SB14>예매차트</Typo.Title.Title3SB14>
				</ChartCategoryBtn>
				<ChartCategoryBtn>
					<Typo.Title.Title3SB14>현재상영작</Typo.Title.Title3SB14>
				</ChartCategoryBtn>
				<ChartCategoryBtn>
					<Typo.Title.Title3SB14>상영예정작</Typo.Title.Title3SB14>
				</ChartCategoryBtn>
				<ChartCategoryBtn>
					<Typo.Title.Title3SB14>아트하우스</Typo.Title.Title3SB14>
				</ChartCategoryBtn>
				<ChartCategoryBtn>
					<Typo.Title.Title3SB14>CGV Only</Typo.Title.Title3SB14>
				</ChartCategoryBtn>
			</ChartCategoryContainer>
		</ChartCategoryLayout>
	);
}
const ChartCategoryLayout = styled.div`
	display: flex;
	gap: 0.8rem;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;
const ChartCategoryContainer = styled.div`
	display: flex;
	gap: 0.8rem;
	width: fit-content;
	margin: 0 2rem;

	border-bottom: solid 0.5px ${({ theme }) => theme.GreyScale.LG};
`;
const ChartCategoryBtn = styled.div<{ $focused?: boolean }>`
	flex-shrink: 0;
	width: fit-content;
	height: fit-content;
	padding: 0.4rem 0.7rem;

	color: ${({ theme, $focused }) => ($focused ? theme.GreyScale.Black : theme.GreyScale.MG)};

	border-bottom: ${({ theme, $focused }) => ($focused ? `solid 1px ${theme.GreyScale.Black}` : null)};
`;
export default ChartCategory;
