import React from 'react';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';

const Step = ({ step, sub, descrip, justifyContent, ...props }) => (
  <Box textAlign="justify" {...props}>
    <Flex alignItems="center" mb="0.25em" mx="auto" justifyContent={justifyContent}>
      <Text.h3 mr="0.5em">Step</Text.h3>
      <Text.h2>{step}</Text.h2>
    </Flex>
    <Text.h4 mb="0.25em">{sub}</Text.h4>
    <Text>{descrip}</Text>
  </Box>
);

export default Step;
