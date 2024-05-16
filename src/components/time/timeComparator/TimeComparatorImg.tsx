import styled from 'styled-components';

interface TimeComparatorImgProps {
	src: string;
	alt: string;
}

function TimeComparatorImg({ src, alt }: TimeComparatorImgProps) {
	return <Image src={src} alt={alt} />;
}

const Image = styled.img`
	z-index: 1;

	cursor: pointer;
	filter: drop-shadow(0 0.4rem 0.4rem rgb(0 0 0 / 13%));
`;
export default TimeComparatorImg;
