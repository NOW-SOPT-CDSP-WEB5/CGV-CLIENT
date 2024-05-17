import styled from 'styled-components';
import timeImages from '../../../assets/time/images';
import Typo from '../../../styles/typo/typo';

/** 예매 취소 확인 모달 */
function CancelConfirmModal() {
	return (
		<ConfirmDialogBox>
			<CancelConfirmImg src={timeImages.timeModal.imgTimemodalCancel} alt="예매 취소 확인 모달" />
			<CancelConfirmMsg>예매가 취소되었습니다</CancelConfirmMsg>
		</ConfirmDialogBox>
	);
}

export default CancelConfirmModal;

const ConfirmDialogBox = styled.div`
	z-index: 10000;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 29.4rem;
	height: 25.7rem;

	background-color: white;
	box-shadow: 0 0 30px rgb(30 30 30 / 18.5%);
	border: none;
	border-radius: 8px;
`;

const CancelConfirmMsg = styled(Typo.Head.Head1SB17)`
	margin: 1rem 0;
`;
const CancelConfirmImg = styled.img`
	width: 17.8rem;
	height: 16.3rem;
`;
