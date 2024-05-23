import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';
import { TimeType } from '../../../types/time/types';

function RunningTime({ startAt, endAt }: TimeType) {
	// hh:mm 형식으로 변환
	const formatTime = (time: string) => time.slice(0, 5);

	return (
		<RunningTimeWrapper>
			<Typo.Title.Title6B18>{formatTime(startAt)}</Typo.Title.Title6B18>
			<EndTime>~{formatTime(endAt)}</EndTime>
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
