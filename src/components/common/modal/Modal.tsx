import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ModalProps {
	onClickToggleModal: () => void;
}

/** 모달창 프레임 함수 */
function Modal({ onClickToggleModal, children }: PropsWithChildren<ModalProps>) {
	return (
		<ModalContainer>
			<DialogBox>{children}</DialogBox>
			<Backdrop
				onClick={(e: React.MouseEvent) => {
					e.preventDefault();
					onClickToggleModal();
				}}
			/>
		</ModalContainer>
	);
}

const ModalContainer = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const DialogBox = styled.dialog`
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
	z-index: 9999;

	width: 100vw;
	height: 100vh;

	background-color: ${({ theme }) => theme.Transparent.Black75};
`;

export default Modal;
