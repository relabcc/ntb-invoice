import React from 'react';

import SVG from '../../components/SVG';

const StepTitle = ({ step, ...props }) => (
  <SVG viewBox="0 0 76.17 38" {...props}>
    <g>
      <circle cx="57.17" cy="19" r="19" fill="#6493d2" opacity="0.1"/>
      <text transform="translate(0 28.55)" font-size="20" font-family="Helvetica-Bold, Helvetica Bold" font-weight="700"><tspan letter-spacing="0em">S</tspan><tspan x="9.8" y="0" letter-spacing="-0.01em">t</tspan><tspan x="16.3" y="0">ep </tspan><tspan x="41.94" y="0" font-size="30">{step}</tspan></text>
    </g>
  </SVG>
);

export default StepTitle;
