import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Container from '../../components/Container';
import BackgroundImage from '../../components/BackgroundImage';

import withReducer from './hoc';

const QuestionPage = ({ pageContext: question , setAnswer, answers }) => {
  const pageId = question.id;
  const qId = question.id - 1;

  return (
    <Box position="relative" height="100%" overflow={['hidden', null, 'visible']}>
    </Box>
  );
};

QuestionPage.propTypes = {
  pathContext: PropTypes.object,
  answers: PropTypes.array,
  setAnswer: PropTypes.func,
};

export default withReducer(QuestionPage);
