import React from 'react';
import styled from 'styled-components';

import Box from '../../../components/Box';

const Polygon = styled.polygon`
  transition: all 0.3s ease;
`;

export default function Star(props) {
  return (
    <Box width="1.5em" height="1.5em" color="white" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
        <Polygon
          fill="currentColor"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="30,3.2 38.7,20.8 58.2,23.7 44.1,37.4 47.4,56.8 30,47.6 12.6,56.8 15.9,37.4 1.8,23.7 21.3,20.8 "
        />
      </svg>
    </Box>
  );
}
