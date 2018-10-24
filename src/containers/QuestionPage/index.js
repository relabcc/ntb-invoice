import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import qpictures from './qpictures';
import Title from './Title';
import questions from './questions.json';
import withReducer from './hoc';
import OpenModal from './OpenModal';

import DoubleLayerButton from '../../components/DoubleLayerButton';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Container from '../../components/Container';
import BackgroundImage from '../../components/BackgroundImage';
import withLayout from '../../hoc/withLayout';


class QuestionPage extends PureComponent {
  state = {
  }

  handleChoose = (value) => {
    this.setState({ showAnswer : true, select : value })
  }

  render() {
    const { pageContext: question } = this.props;
    const { showAnswer, select } = this.state;
    const pageId = question.id;
    const qId = question.id - 1;
    const last = question.isLast;
    const isCorrect = select === questions[qId].correct;

    return (
      <Container pt="3em" textAlign="center">
        <Title px={['10%', '20.5%']} pageId={pageId} qId={qId} />
        <Box px={['3%', '12%']} py="2em">
          <BackgroundImage src={qpictures[qId]} ratio={406 / 691} />
        </Box>
        <Flex justifyContent="center" flexWrap="wrap">
          {questions[qId].options.map((o, index) => (
            <Box mx="0.25em" key={index} my={['0.5em', null, '0']}>
              <DoubleLayerButton
                whiteSpace="pre"
                width="20em"
                height="4.5em"
                px="2em"
                onClick={() => this.handleChoose(index)}
              >
                {o}
              </DoubleLayerButton>
            </Box>
          ))}
        </Flex>
        <OpenModal
          isOpen={showAnswer}
          pageId={pageId}
          isCorrect={isCorrect}
          isLast={last}
          qId={qId}
        />
      </Container>
    );
  };
}

QuestionPage.propTypes = {
  pageContext: PropTypes.object,
  answers: PropTypes.array,
  setAnswer: PropTypes.func,
};

export default compose(withLayout, withReducer)(QuestionPage);
