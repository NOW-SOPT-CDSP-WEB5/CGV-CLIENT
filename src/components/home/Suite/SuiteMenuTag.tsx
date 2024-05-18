import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';

type Props = { text: string };

function SuiteMenuTag(props: Props) {
	const { text } = props;
	return (
		<SuiteTag>
			<Typo.Caption.Caption2R11>{text}</Typo.Caption.Caption2R11>
		</SuiteTag>
	);
}
const SuiteTag = styled.div`
	width: fit-content;
	height: fit-content;
	padding: 0.3rem 0.6rem;

	color: ${({ theme }) => theme.GreyScale.DG};

	background-color: ${({ theme }) => theme.GreyScale.LG};
	border-radius: 3px;
`;
export default SuiteMenuTag;
