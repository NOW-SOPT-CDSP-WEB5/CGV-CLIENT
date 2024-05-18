import styled from 'styled-components';
import Typo from '../../styles/typo/typo';

/** list 페이지 카테고리 선택 바 */
function ListCategory() {
	return (
		<ListCategoryContainer>
			<ListCategoryBtn type="button" $focused>
				<Typo.Title.Title4M16>무비차트</Typo.Title.Title4M16>
			</ListCategoryBtn>
			<ListCategoryBtn type="button">
				<Typo.Title.Title4M16>아트하우스</Typo.Title.Title4M16>
			</ListCategoryBtn>
			<ListCategoryBtn type="button">
				<Typo.Title.Title4M16>개봉예정</Typo.Title.Title4M16>
			</ListCategoryBtn>
		</ListCategoryContainer>
	);
}
const ListCategoryContainer = styled.div`
	display: flex;
	width: 100%;
	height: 4.7rem;
`;
const ListCategoryBtn = styled.button<{ $focused?: boolean }>`
	width: 100%;

	color: ${({ theme, $focused }) => ($focused ? theme.GreyScale.Black : theme.GreyScale.MG)};

	background-color: ${({ theme }) => theme.GreyScale.White};
	border: none;
`;
export default ListCategory;
