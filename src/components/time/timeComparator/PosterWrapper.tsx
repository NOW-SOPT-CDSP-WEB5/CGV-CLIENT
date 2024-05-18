import { ReactNode } from 'react';
import styled from 'styled-components';

interface TimeComparatorWrapperProps {
	src: string;
	name: string;
	alt: string;
	children: ReactNode;
}

function PosterWrapper({ src, name, alt, children }: TimeComparatorWrapperProps) {
	return (
		<Wrapper>
			<Image src={src} alt={alt} />
			<Title>{name}</Title>
			{children}
		</Wrapper>
	);
}

export default PosterWrapper;

const Wrapper = styled.div`
	position: relative;

	cursor: pointer;
	filter: drop-shadow(0 0.4rem 0.4rem rgb(0 0 0 / 13%));
`;

const Image = styled.img`
	width: 100%;
	height: auto;
`;

const Title = styled.p`
	position: absolute;
	top: 1rem;
	left: 1rem;
	z-index: 2;

	color: ${({ theme }) => theme.Transparent.White75};
`;
