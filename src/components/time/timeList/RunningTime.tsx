import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';

function RunningTime() {
	return (
		<RunningTimeWrapper>
			<Typo.Title.Title6B18>07:40</Typo.Title.Title6B18>
			<EndTime>~09:39</EndTime>
		</RunningTimeWrapper>
	);
}

export default RunningTime;

const RunningTimeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 10.7rem;
	height: 4.93rem;

	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
`;

const EndTime = styled(Typo.Num.Number4Timesmall)`
	color: ${({ theme }) => theme.GreyScale.MG};
`;
