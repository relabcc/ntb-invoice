import React from 'react';
import Box from '../../components/Box';
import BackgroundImage from '../../components/BackgroundImage';


const Picture = ({ img, ...props }) => (
  <Box {...props}>
    <BackgroundImage src={img} ratio={330 / 427} />
  </Box>
);

export default Picture;
