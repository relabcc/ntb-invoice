import React from 'react';

import DoubleLayerButton from '../../components/DoubleLayerButton';
import Box from '../../components/Box';
import Link from '../../components/Link';
import Text from '../../components/Text';
import BackgroundImage from '../../components/BackgroundImage';

import homelogo from './homelogo.svg';
import Title from './Title';

const IndexHomePage = () => (
  <Box textAlign="center">
    <Box px={['6%', '20%']} py="2em">
      <Title />
    </Box>
    <Box px={['8%', '16%', null, null, '20%']}>
      <BackgroundImage src={homelogo} ratio={361.27 / 638.23} />
    </Box>
    <Box py="1.5em" px={['5%', '0']}>
      <Text>統一發票發行至今超過了一甲子，我們都習慣它，也對它又愛又恨！</Text>
      <Text>不過，時代在進步，你的發票觀跟得上時代嗎？</Text>
    </Box>
    <DoubleLayerButton is={Link} to="/question/1">看看我跟不跟得上時代</DoubleLayerButton>
    <Text f="0.75em" my="2em" fontWeight="bold">財政部中區國稅局製作</Text>
  </Box>
);

export default IndexHomePage;
