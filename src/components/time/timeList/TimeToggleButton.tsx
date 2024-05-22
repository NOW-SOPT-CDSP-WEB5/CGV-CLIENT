import styled from 'styled-components';
import timeIcons from '../../../assets/time/icon';

interface TimeToggleButtonProps {
	isOpenTimeList: boolean;
	setOpenTimeList: (open: boolean) => void;
}

function TimeToggleButton({ isOpenTimeList, setOpenTimeList }: TimeToggleButtonProps) {
	return (
		<TimeToggleButtonWrapper
			type="button"
			onClick={() => setOpenTimeList(!isOpenTimeList)}
			$isOpenTimeList={isOpenTimeList} // 상태를 전달
		>
			<img src={timeIcons.icArrowUp} alt="예매 시간 토글 버튼" />
		</TimeToggleButtonWrapper>
	);
}

const TimeToggleButtonWrapper = styled.button<{ $isOpenTimeList: boolean }>`
	position: relative;
	left: 17.5rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 2.8rem;
	height: 2.8rem;

	background-color: transparent;
	transform: ${({ $isOpenTimeList }) => ($isOpenTimeList ? 'rotate(180deg)' : 'rotate(0deg)')};
	cursor: pointer;
	border: none;

	transition: transform 0.3s ease;
`;

export default TimeToggleButton;
