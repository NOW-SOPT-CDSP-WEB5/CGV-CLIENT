import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';

function DetailBar() {
	return (
		<DetailBarLayout>
			<DetailBarContainer>
				<DetailBarBtn $focused>
					<Typo.Title.Title3SB14>상세정보</Typo.Title.Title3SB14>
				</DetailBarBtn>
				<DetailBarBtn>
					<Typo.Title.Title3SB14>실관람평(40)</Typo.Title.Title3SB14>
				</DetailBarBtn>
				<DetailBarBtn>
					<Typo.Title.Title3SB14>예고편</Typo.Title.Title3SB14>
				</DetailBarBtn>
				<DetailBarBtn>
					<Typo.Title.Title3SB14>무대인사</Typo.Title.Title3SB14>
				</DetailBarBtn>
			</DetailBarContainer>
		</DetailBarLayout>
	);
}

const DetailBarLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

	border-bottom: solid 0.5px ${({ theme }) => theme.GreyScale.LG};
`;
const DetailBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 33.5rem;
`;
const DetailBarBtn = styled.div<{ $focused?: boolean }>`
	flex-shrink: 0;
	width: fit-content;
	height: fit-content;
	padding: 0.4rem 0.7rem;

	color: ${({ theme, $focused }) => ($focused ? theme.GreyScale.Black : theme.GreyScale.MG)};

	border-bottom: ${({ theme, $focused }) => ($focused ? `solid 1px ${theme.GreyScale.Black}` : null)};
`;

export default DetailBar;
