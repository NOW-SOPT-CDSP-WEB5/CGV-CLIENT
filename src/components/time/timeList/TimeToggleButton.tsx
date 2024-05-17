import styled from 'styled-components';
import timeIcons from '../../../assets/time/icon';

function TimeToggleButton() {
	return (
		<TimeToggleButtonWrapper type="button">
			<img src={timeIcons.icArrowUp} alt="예매 시간 토글 버튼" />
		</TimeToggleButtonWrapper>
	);
}

const TimeToggleButtonWrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.8rem;
	height: 2.8rem;

	background-color: ${({ theme }) => theme.GreyScale.LG2};
	cursor: pointer;
	border: none;
`;

export default TimeToggleButton;
