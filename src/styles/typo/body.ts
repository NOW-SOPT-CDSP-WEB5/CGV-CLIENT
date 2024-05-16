import styled from 'styled-components';
import fontWeight from './fontWeight';

const Body1R12 = styled.p`
	${fontWeight.Regular}
	font-size: 1.3rem;
`;

/* Body2_R_12_-0.5 */
const Body2R12 = styled.p`
	${fontWeight.Regular}
	font-size: 1.2rem;
	letter-spacing: -0.05rem;
`;

/* Body3_M_14 */
const Body3M14 = styled.p`
	${fontWeight.Medium}
	font-size: 1.4rem;
	line-height: 145%; /* 20.3px */
	letter-spacing: -0.03rem;
`;

/* Body4_R_14 */
const Body4R14 = styled.p`
	${fontWeight.Regular}
	font-size: 1.4rem;
	line-height: 175%; /* 24.5px */
	letter-spacing: -0.1rem;
`;

/* Body5_M_13 */
const Body5M13 = styled.p`
	${fontWeight.Medium}
	font-size: 1.3rem;
	letter-spacing: -0.03rem;
`;

/* Body6_B_13 */
const Body6B13 = styled.p`
	${fontWeight.Bold}
	font-size: 1.3rem;
	letter-spacing: -0.03rem;
`;

const BodyTypo = {
	Body1R12,
	Body2R12,
	Body3M14,
	Body4R14,
	Body5M13,
	Body6B13,
};

export default BodyTypo;
