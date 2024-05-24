import styled from 'styled-components';
import Typo from '../../styles/typo/typo';
import OverViewBtn from './OverViewBtn';

type Props = { text: string; main: boolean; onClick?: () => void };

/** 섹션제목 */
function HomeSectionTitle({ text, main, onClick = () => {} }: Props) {
	return (
		<SectionTitle>
			{main ? <Typo.Title.Title6B18>{text}</Typo.Title.Title6B18> : <Typo.Title.Title8B15>{text}</Typo.Title.Title8B15>}
			<OverViewBtn onClick={onClick} />
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
