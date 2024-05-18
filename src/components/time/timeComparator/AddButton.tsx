import styled from 'styled-components';
import timeButtons from '../../../assets/time/buttons';

function AddButton() {
	return (
		<Wrapper>
			<Image src={timeButtons.BtnTimeAddmovie} alt="add movie button" />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	z-index: 1;
	padding: 0 0.2rem;

	cursor: pointer;
	filter: drop-shadow(0 0.4rem 0.4rem rgb(0 0 0 / 13%));
`;

const Image = styled.img`
	width: 100%;
	height: auto;
`;
export default AddButton;
