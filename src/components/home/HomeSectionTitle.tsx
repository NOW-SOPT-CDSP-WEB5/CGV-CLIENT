import styled from 'styled-components';
import Typo from '../../styles/typo/typo';
import OverViewBtn from './OverViewBtn';

type Props = { text: string };

/** 섹션제목 */
function HomeSectionTitle(props: Props) {
	const { text } = props;
	return (
		<SectionTitle>
			<Typo.Title.Title6B18>{text}</Typo.Title.Title6B18>
			<OverViewBtn />
		</SectionTitle>
	);
}
const SectionTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.7rem;
	padding: 0 2rem;
`;
export default HomeSectionTitle;
