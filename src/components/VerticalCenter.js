import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withContentRect } from 'react-measure';

import Box from './Box';

class VerticalCenter extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const shouldCenter = typeof window !== 'undefined' && window.innerHeight > nextProps.contentRect.bounds.height;
    return {
      shouldCenter: prevState.count > 10 ? prevState.shouldCenter : shouldCenter,
    };
  }

  state = {
    count: 0
  }

  componentDidMount() {
    this.props.measure();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.shouldCenter !== this.state.shouldCenter) {
      this.setState({ count: this.state.count + 1 });
    }
  }

  render() {
    const {
      children,
      measure,
      measureRef,
      contentRect,
      ...props
    } = this.props;
    // const shouldCenter = 1;
    // console.log(window.innerHeight, height);
    const { shouldCenter } = this.state;
    return (
      <Box
        position="relative"
        height="100%"
        {...props}
      >
        <Box
          position={shouldCenter && 'absolute'}
          top={shouldCenter ? '50%' : 0}
          width={1}
          transform={shouldCenter && 'translateY(-50%)'}
          innerRef={measureRef}
        >
          {children}
        </Box>
      </Box>
    );
  }
}

VerticalCenter.propTypes = {
  children: PropTypes.node,
  measure: PropTypes.func,
  measureRef: PropTypes.func,
  contentRect: PropTypes.object,
};

export default withContentRect('bounds')(VerticalCenter);
