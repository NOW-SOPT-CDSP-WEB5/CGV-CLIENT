import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import BookingModal from './modal/BookingModal';

/** 예매 버튼이 있는 화면(예시) */
function BookingModalPage() {
	const [isOpenModal, setOpenModal] = useState<boolean>(false);

	const onClickToggleModal = useCallback(() => {
		setOpenModal(!isOpenModal);
	}, [isOpenModal]);

	return (
		<Main>
			{isOpenModal && <BookingModal onClickToggleModal={onClickToggleModal} />}
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

export default BookingModalPage;
