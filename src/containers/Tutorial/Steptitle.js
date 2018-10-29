import React from 'react';

import SVG from '../../components/SVG';

const StepTitle = ({ step, ...props }) => (
  <SVG viewBox="0 0 76.17 38" {...props}>
    <g>
      <circle cx="57.17" cy="19" r="19" fill="#6493d2" opacity="0.1"/>
      <text transform="translate(0 28.55)" font-size="20" font-weight="700">
        Step
        <tspan font-size="30">{step}</tspan>
      </text>
    </g>
  </SVG>
);

export default StepTitle;
