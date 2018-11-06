import React, { PureComponent, createElement } from 'react';
import { timeout } from 'd3-timer';

import { FadeIn, FadeOut } from 'animate-css-styled-components';
import Button from '../../../components/Button';
import Flex from '../../../components/Flex';
import Text from '../../../components/Text';
import Box from '../../../components/Box';

import StarRater from '../StarRater';

export default class Survey extends PureComponent {
  state = {
    rating: null,
    rated: null,
    removed: null,
    allRemove: null,
  }

  duration = 700

  handleOnRate = () => {
    const { rating } = this.state;
    if (!rating) return;

    if (window.ga) {
      window.ga('send', 'event', '評分', '評分', rating, rating);
    }

    this.setState({ rated: true });
    timeout(() => {
      this.setState({ removed: true });
    }, this.duration);
  }

  render() {
    const { rated, removed, allRemove } = this.state;
    const survey = !removed && (
      <Box py="1em">
        <Flex width={1} flexDirection={['column', 'column', 'row']} alignItems="center" justifyContent="center">
          <Text bold>你覺得這個網站對你有幫助嗎？</Text>
          <StarRater mx="0.75em" my="1em" onRate={(rating) => this.setState({ rating })} />
          <Button px="1em" py="1em" onClick={this.handleOnRate} borderWidth="1.5px" borderRadius="0">送出</Button>
        </Flex>
      </Box>
    );
    return (
      <Box {...this.props}>
        {rated ? <FadeOut duration={`${this.duration}ms`}>{survey}</FadeOut> : survey}
        {removed && createElement(allRemove ? FadeOut : FadeIn, {
          duration: `${this.duration}ms`,
          children: <Text textAlign="center">感謝您的評分！</Text>,
        })}
      </Box>
    );
  }
}
