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
			<Backdrop onClick={handleBackdropClick} />
			<DialogBox>{children}</DialogBox>
		</ModalContainer>
	);
}

const ModalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	transform: translate(-50%, -50%);
`;

const DialogBox = styled.div`
	z-index: 10000;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 29.4rem;
	height: 19.6rem;

	background-color: white;
	box-shadow: 0 0 30px rgb(30 30 30 / 18.5%);
	border: none;
	border-radius: 8px;
`;

const Backdrop = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 9999;
	width: 37.5rem;
	height: 100vh;

	background-color: ${({ theme }) => theme.Transparent.Black75};
	transform: translate(-50%, -50%);
`;

export default Modal;
