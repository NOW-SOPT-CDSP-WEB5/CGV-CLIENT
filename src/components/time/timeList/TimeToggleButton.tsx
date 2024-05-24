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
			<StyledImage src={timeIcons.icArrowUp} alt="예매 시간 토글 버튼" $isOpenTimeList={isOpenTimeList} />
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
	cursor: pointer;
	border: none;
`;

const StyledImage = styled.img<{ $isOpenTimeList: boolean }>`
	transform: ${({ $isOpenTimeList }) => ($isOpenTimeList ? 'rotate(0deg)' : 'rotate(180deg)')};

	transition: transform 0.3s ease;
`;

export default TimeToggleButton;
