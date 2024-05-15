import styled from 'styled-components';

interface AddMovieTheaterImgProps {
	src: string;
	alt: string;
}

function AddMovieTheaterImg({ src, alt }: AddMovieTheaterImgProps) {
	return <Image src={src} alt={alt} />;
}

const Image = styled.img`
	z-index: 1;

	cursor: pointer;
	filter: drop-shadow(0 0.4rem 0.4rem rgb(0 0 0 / 13%));
`;
export default AddMovieTheaterImg;
