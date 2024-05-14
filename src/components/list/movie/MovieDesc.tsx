import styled, { useTheme } from 'styled-components';
import Typo from '../../../styles/typo/typo';

type Props = {
	p1: string;
	p2: string;
};

/** 개봉일, 예매율 */
function MovieDesc(props: Props) {
	const theme = useTheme();
	const { p1, p2 } = props;
	return (
		<MovieDescWrapper>
			<Typo.Body.Body5M13 style={{ color: `${theme.GreyScale.DG}` }}>{p1}</Typo.Body.Body5M13>
			<Typo.Body.Body6B13 style={{ color: `${theme.GreyScale.BG}` }}>{p2}</Typo.Body.Body6B13>
		</MovieDescWrapper>
	);
}
const MovieDescWrapper = styled.div`
	display: flex;
	gap: 0.9rem;
`;
export default MovieDesc;
