import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';

interface SeatsProps {
	remainingSeats: number;
}

function Seats({ remainingSeats }: SeatsProps) {
	return (
		<SeatsWrapper>
			<FirstLabel>잔여</FirstLabel>
			<RemainSeatsNum>{remainingSeats}</RemainSeatsNum>
			<Typo.Num.Number4Timesmall>석</Typo.Num.Number4Timesmall>
		</SeatsWrapper>
	);
}

export default Seats;

const FirstLabel = styled(Typo.Num.Number4Timesmall)`
	margin-right: 0.2rem;
`;

const RemainSeatsNum = styled(Typo.Num.Number4Timesmall)`
	color: ${({ theme }) => theme.Color.Green};
`;

const SeatsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 10.5rem;
	height: 2.8rem;

	background-color: ${({ theme }) => theme.GreyScale.LG};
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
`;
