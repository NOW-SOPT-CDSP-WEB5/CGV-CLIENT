import styled from 'styled-components';
import CaptionTypo from './caption';
import TitleTypo from './title';
import BodyTypo from './body';
import NumberTypo from './number';
import fontWeight from './fontWeight';

/* Head1_SB_17 */
const Head1SB17 = styled.h1`
	${fontWeight.SemiBold}
	font-size: 1.7rem;
	letter-spacing: -0.02rem;
`;

const Typo = {
	Head: {
		Head1SB17,
	},
	Title: TitleTypo,
	Body: BodyTypo,
	Caption: CaptionTypo,
	Num: NumberTypo,
};
export default Typo;
