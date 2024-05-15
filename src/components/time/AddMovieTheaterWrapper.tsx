import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

interface AddMovieTheaterWrapperProps {
	children: React.ReactNode;
}

function AddMovieTheaterWrapper({ children }: AddMovieTheaterWrapperProps) {
	return <Wrapper>{children}</Wrapper>;
}

AddMovieTheaterWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
	position: relative;
`;
export default AddMovieTheaterWrapper;
