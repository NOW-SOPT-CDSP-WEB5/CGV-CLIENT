import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

interface TimeComparatorWrapperProps {
	children: React.ReactNode;
}

function TimeComparatorWrapper({ children }: TimeComparatorWrapperProps) {
	return <Wrapper>{children}</Wrapper>;
}

TimeComparatorWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
	position: relative;
`;
export default TimeComparatorWrapper;
