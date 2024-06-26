import { useState, useCallback } from 'react';
import styled from 'styled-components';
import CancelModal from './modal/CancelModal';

/** 예매 취소 버튼이 있는 화면 */
function ModalClickPage() {
	const [isOpenModal, setOpenModal] = useState<boolean>(false);

	const onClickToggleModal = useCallback(() => {
		setOpenModal(!isOpenModal);
	}, [isOpenModal]);

	const setTicket = useCallback((value: boolean) => {
        // setTicket 로직 작성
        console.log('Ticket is set to:', value);
    }, []);

	return (
		<Main>
			{isOpenModal && <CancelModal onClickToggleModal={onClickToggleModal} setTicket={setTicket}/>}
			<DialogButton onClick={onClickToggleModal}>예매 취소</DialogButton>
		</Main>
	);
}

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DialogButton = styled.button`
	width: 160px;
	height: 48px;
`;

export default ModalClickPage;
