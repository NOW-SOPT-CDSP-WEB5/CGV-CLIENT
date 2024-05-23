import { useState, PropsWithChildren } from 'react';
import { useState, useEffect, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../../common/modal/Modal';
import Typo from '../../../styles/typo/typo';
import CancelConfirmModal from './CancelConfirmModal';

interface CancelModalProps {
	onClickToggleModal: () => void;
}

/** 예매취소 모달 내용 */
function CancelModal({ onClickToggleModal, children }: PropsWithChildren<CancelModalProps>) {
	const [isCancelConfirmed, setCancelConfirmed] = useState(false);
	const navigate = useNavigate();

	const handleCancelClick = () => {
		setCancelConfirmed(true);
	};

	// 3초 모달 표시되고 닫기
	useEffect(() => {
		if (isCancelConfirmed) {
			const timer = setTimeout(() => {
				onClickToggleModal();
				navigate('/movie');
			}, 3000);

			return () => clearTimeout(timer);
		}
		return undefined;
	}, [isCancelConfirmed, onClickToggleModal, navigate]);

	return (
		<Modal onClickToggleModal={onClickToggleModal}>
			{isCancelConfirmed ? (
				<CancelConfirmModal />
			) : (
				<>
					<CancelTitle>
						예매한 &lt;범죄도시4&gt;
						<br /> 영화를 취소하시겠어요?
					</CancelTitle>
					<Theater>강남 CGV 1관 6층</Theater>
					<Typo.Title.Title6B18>07:40 ~ 09:39</Typo.Title.Title6B18>
					<CancelMsg>취소 후 되돌릴 수 없으니 신중하게 선택해주세요</CancelMsg>
					{children}
					<ButtonWrapper>
						<CloseButton type="button" onClick={onClickToggleModal}>
							<Typo.Head.Head1SB17>닫기</Typo.Head.Head1SB17>
						</CloseButton>
						<CancelButton type="button" onClick={handleCancelClick}>
							<Typo.Head.Head1SB17>예매 취소하기</Typo.Head.Head1SB17>
						</CancelButton>
					</ButtonWrapper>
				</>
			)}
		</Modal>
	);
}

const CancelButton = styled.button`
	width: 14.7rem;
	height: 5.2rem;

	color: ${({ theme }) => theme.GreyScale.White};

	background-color: ${({ theme }) => theme.Color.Point};
	border: none;
	border-bottom-right-radius: 8px;
`;

const CloseButton = styled.button`
	width: 14.7rem;
	height: 5.2rem;

	color: ${({ theme }) => theme.GreyScale.White};

	background-color: ${({ theme }) => theme.GreyScale.MG};
	border: none;
	border-bottom-left-radius: 8px;
`;

const CancelTitle = styled(Typo.Head.Head1SB17)`
	padding-bottom: 1.4rem;

	text-align: center;
`;

const ButtonWrapper = styled.div`
	position: fixed;
	bottom: 30rem;
	display: flex;
`;

const Theater = styled(Typo.Title.Title3SB14)`
	color: ${({ theme }) => theme.Color.Point};
`;

const CancelMsg = styled(Typo.Caption.Caption2R11)`
	padding: 1.2rem 0 3.5rem;

	color: ${({ theme }) => theme.GreyScale.MG};
`;

export default CancelModal;
