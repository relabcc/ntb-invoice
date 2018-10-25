import React from 'react';

import Steptitle from './Steptitle';

import Box from '../../components/Box';
import Text from '../../components/Text';

const Step = ({ step, sub, descrip, justifyContent, ...props }) => (
  <Box textAlign="justify" {...props}>
    <Box mb="0.5em" width="30%" mx={['auto', 0]}>
      <Steptitle step={step} />
    </Box>
    <Text.h4 mb="0.25em" fontWeight="normal">{sub}</Text.h4>
    <Text>{descrip}</Text>
  </Box>
);

export default Step;
