import React from 'react';
import { push } from 'gatsby-link';

import DoubleLayerButton from '../../components/DoubleLayerButton';
import Box from '../../components/Box';
import Text from '../../components/Text';
import BackgroundImage from '../../components/BackgroundImage';

import hometitle from './hometitle.svg';
import homelogo from './homelogo.svg';

const IndexHomePage = () => (
  <Box textAlign="center">
    <Box px="20%" py="2em">
      <BackgroundImage src={hometitle} ratio={120.12 / 549.64} />
    </Box>
    <Box px="16%">
      <BackgroundImage src={homelogo} ratio={361.27 / 638.23} />
    </Box>
    <Box py="2em">
      <Text>統一發票發行至今超過了一甲子，我們都習慣它，也對它又愛又恨！</Text>
      <Text>不過，時代在進步，你的發票觀跟得上時代嗎？</Text>
    </Box>
    <DoubleLayerButton onClick={() => push('/question/1')}>看看我跟不跟得上時代</DoubleLayerButton>
  </Box>
);

export default IndexHomePage;
