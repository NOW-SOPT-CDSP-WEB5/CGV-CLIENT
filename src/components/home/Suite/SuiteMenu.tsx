import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';
import SuiteMenuTag from './SuiteMenuTag';

function SuiteMenu() {
	return (
		<SuiteMenuLayout>
			<SuiteMenuContainer>
				<MenuWrapper>
					<Typo.Title.Title9B14>4DX</Typo.Title.Title9B14>
					<TagWrapper>
						<SuiteMenuTag text="#모션시트" />
						<SuiteMenuTag text="#오감체험" />
					</TagWrapper>
				</MenuWrapper>
				<MenuPartition />
			</SuiteMenuContainer>
			<SuiteMenuContainer>
				<MenuWrapper>
					<Typo.Title.Title9B14>CINE de CHEF</Typo.Title.Title9B14>
					<TagWrapper>
						<SuiteMenuTag text="#쉐프가 있는 영화관" />
					</TagWrapper>
				</MenuWrapper>
				<MenuPartition />
			</SuiteMenuContainer>
		</SuiteMenuLayout>
	);
}
const SuiteMenuLayout = styled.div`
	margin-bottom: 2.1rem;
`;
const SuiteMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: fit-content;
	padding-right: 3.4rem;
	padding-left: 3.9rem;
`;
const MenuWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 1.3rem;
`;
const TagWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
	width: fit-content;
`;
const MenuPartition = styled.div`
	width: 33.3rem;
	height: 1px;

	background-color: ${({ theme }) => theme.GreyScale.LG};
`;
export default SuiteMenu;
