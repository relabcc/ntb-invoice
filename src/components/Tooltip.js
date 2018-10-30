import React from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

import Text from './Text';

const Ttp = ({
  overlay,
  children,
}) => (
  <Tooltip
    placement="top"
    overlay={overlay}
    arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
  >
    <Text.inline fontWeight="bold" color="rgb(100, 146, 209)">{children}</Text.inline>
  </Tooltip>
);

export default Ttp;
