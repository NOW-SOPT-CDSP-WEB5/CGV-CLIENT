import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ModalProps {
	onClickToggleModal: () => void;
}

/** 모달창 프레임 함수 */
function Modal({ onClickToggleModal, children }: PropsWithChildren<ModalProps>) {
	const handleBackdropClick = (e: React.MouseEvent) => {
		e.preventDefault();
		onClickToggleModal();
	};
	return (
		<ModalContainer>
			<DialogBox>{children}</DialogBox>
			<Backdrop onClick={handleBackdropClick} />
		</ModalContainer>
	);
}

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const DialogBox = styled.div`
	z-index: 10000;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 29.4rem;
	height: 22.6rem;

	background-color: white;
	box-shadow: 0 0 30px rgb(30 30 30 / 18.5%);
	border: none;
	border-radius: 8px;
`;

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;

	/* TODO: 모바일 화면 크기 나오면 height 조절 */
	width: 100%;
	height: 100vh;

	background-color: ${({ theme }) => theme.Transparent.Black75};
`;

export default Modal;
