import styled from 'styled-components';
import fontWeight from './fontWeight';

/* Caption1_M_10 */
const Caption1M10 = styled.p`
	${fontWeight.Medium}
	font-size: 1rem;
	letter-spacing: -0.02rem;
`;

/* Caption2_R_11 */
const Caption2R11 = styled.p`
	${fontWeight.Regular}
	font-size: 1.1rem;
	letter-spacing: -0.05rem;
`;

/* Caption3_SB_11 */
const Caption3SB11 = styled.p`
	${fontWeight.SemiBold}
	font-size: 1.1rem;
	letter-spacing: -0.05rem;
`;

const CaptionTypo = {
	Caption1M10,
	Caption2R11,
	Caption3SB11,
};

export default CaptionTypo;
