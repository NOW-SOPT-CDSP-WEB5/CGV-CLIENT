import styled from 'styled-components';
import fontWeight from './fontWeight';

const Number1 = styled.p`
	${fontWeight.Bold}
	font-size: 1.6rem;
	letter-spacing: -0.01rem;
`;

/* Number2 */
const Number2 = styled.p`
	${fontWeight.Regular}
	font-size: 1.6rem;
	letter-spacing: -0.05rem;
`;

/* Number3_Time_Big */
const Number3TimeBig = styled.p`
	${fontWeight.Bold}
	font-size: 1.7rem;
`;

/* Number4_Time_small */
const Number4Timesmall = styled.p`
	${fontWeight.SemiBold}
	font-size: 1.3rem;
`;

const NumberTypo = {
	Number1,
	Number2,
	Number3TimeBig,
	Number4Timesmall,
};

export default NumberTypo;
