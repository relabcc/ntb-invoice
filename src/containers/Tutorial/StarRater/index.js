import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import range from 'lodash/range';

import Flex from '../../../components/Flex';
import Box from '../../../components/Box';
import Star from './Star';

class StarRater extends Component {
  state = {
    rating: 0,
    hover: 0,
  }

  getColor = (index) => {
    const { hover, rating } = this.state;
    if (hover) {
      return hover > index ? 'yellow' : 'white';
    }
    return rating > index ? 'yellow' : 'white';
  }

  handleOnRate = (rating = this.state.hover) => {
    this.props.onRate(rating);
    this.setState({ rating, hover: rating });
  }

  handleMouseEnter = (hover) => this.setState({ hover })
  handleMouseLeave = () => this.setState({ hover: 0 })

  render() {
    const { count, ...props } = this.props;
    return (
      <Flex
        {...props}
        onMouseLeave={this.handleMouseLeave}
        onBlur={this.handleMouseLeave}
      >
        {range(count).map((index) => {
          const s = index + 1;
          return (
            <Box
              key={`star-${index}`}
              mt="-0.25em"
              mx="0.25em"
              onMouseEnter={() => this.handleMouseEnter(s)}
              onFocus={() => this.handleMouseEnter(s)}
              onKeyUp={({ keyCode }) => keyCode === 16 && this.handleOnRate()}
              onClick={() => this.handleOnRate(s)}
              style={{ cursor: 'pointer' }}
            >
              <Star color={this.getColor(index)} f="1.25em" />
            </Box>
          );
        })}
      </Flex>
    );
  }
}

StarRater.propTypes = {
  count: PropTypes.number,
  onRate: PropTypes.func,
};

StarRater.defaultProps = {
  count: 5,
  onRate: noop,
};

export default StarRater;
