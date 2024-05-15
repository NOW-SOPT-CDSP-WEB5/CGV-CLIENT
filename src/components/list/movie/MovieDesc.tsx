import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';

type Props = {
	p1: string;
	p2: string;
};

/** 개봉일, 예매율 */
function MovieDesc(props: Props) {
	const { p1, p2 } = props;
	return (
		<MovieDescWrapper>
			<DGBody5M13>{p1}</DGBody5M13>
			<BGBody6B13>{p2}</BGBody6B13>
		</MovieDescWrapper>
	);
}
const MovieDescWrapper = styled.div`
	display: flex;
	gap: 0.9rem;
`;
const DGBody5M13 = styled(Typo.Body.Body5M13)`
	color: ${({ theme }) => theme.GreyScale.DG};
`;
const BGBody6B13 = styled(Typo.Body.Body6B13)`
	color: ${({ theme }) => theme.GreyScale.BG};
`;
export default MovieDesc;
