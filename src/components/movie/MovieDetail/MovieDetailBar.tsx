import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';

function DetailBar() {
	return (
		<DetailBarLayout>
			<DetailBarContainer>
				<DetailBarBtn $focused>
					<Typo.Title.Title2SB15>상세정보</Typo.Title.Title2SB15>
				</DetailBarBtn>
				<DetailBarBtn>
					<Typo.Title.Title11R15>실관람평(40)</Typo.Title.Title11R15>
				</DetailBarBtn>
				<DetailBarBtn>
					<Typo.Title.Title11R15>예고편</Typo.Title.Title11R15>
				</DetailBarBtn>
				<DetailBarBtn>
					<Typo.Title.Title11R15>무대인사</Typo.Title.Title11R15>
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
	width: 31rem;
	height: 3.5rem;
`;
const DetailBarBtn = styled.div<{ $focused?: boolean }>`
	color: ${({ theme, $focused }) => ($focused ? theme.GreyScale.Black : theme.GreyScale.MG)};

	border-bottom: ${({ theme, $focused }) => ($focused ? `solid 1px ${theme.GreyScale.Black}` : null)};
`;

export default DetailBar;
