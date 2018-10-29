import React from 'react';
import SVG from '../../components/SVG';
import Box from '../../components/Box';
import questions from './questions.json';
import withResponsive from '../../hoc/withResponsive';

const Title = ({ pageId, qId, browser, ...props }) => (
  <Box {...props}>
    <SVG viewBox="0 0 514 96">
      <g>
        <g>
          <line x1="26.54" y1="10.58" x2="487.46" y2="10.58" fill="none" stroke="#534741" stroke-width="2"/>
          <line x1="26.34" y1="85.42" x2="487.29" y2="85.42" fill="none" stroke="#534741" stroke-width="2"/>
          <rect x="2" y="2" width="510" height="92" fill="none" stroke="#534741" stroke-width="2"/>
          <path d="M512,28A26,26,0,0,1,486,2" fill="none" stroke="#534741" stroke-width="2"/>
          <circle cx="501.46" cy="13.04" r="2.46" fill="none" stroke="#534741" stroke-width="2"/>
          <g>
            <path d="M486,94.56a26,26,0,0,1,26-26" fill="none" stroke="#534741" stroke-width="2"/>
            <circle cx="500.96" cy="84.02" r="2.46" fill="none" stroke="#534741" stroke-width="2"/>
          </g>
          <path d="M2,68.56a26,26,0,0,1,26,26" fill="none" stroke="#534741" stroke-width="2"/>
          <circle cx="12.54" cy="83.52" r="2.46" fill="none" stroke="#534741" stroke-width="2"/>
          <g>
            <path d="M28,2A26,26,0,0,1,2,28" fill="none" stroke="#534741" stroke-width="2"/>
            <circle cx="13.04" cy="12.54" r="2.46" fill="none" stroke="#534741" stroke-width="2"/>
          </g>
          <circle cx="64.83" cy="48" r="27.94" fill="#534741" stroke="#534741" stroke-width="2"/>
        </g>
        <rect x="109.47" y="22" width="366.6" height="52.5" rx="10.91" ry="10.91" fill="#534741" opacity="0.1"/>
        <text transform="translate(137.85 56.06)" font-size={browser.greaterThan.xs ? '20' : '24'} font-family="JinXuan-Fresh" letter-spacing="0.2em">{questions[qId].title}</text>
        <text transform="translate(56.88 63.56)" font-size="28.61" fill="#eee9e6" letter-spacing="0.2em">{pageId}</text>
        <text transform="translate(58.66 38.66)" font-size="13.25" fill="#eee9e6" font-weight="700">n<tspan x="7.35" y="0" letter-spacing="-0.02em">o</tspan><tspan x="14.31" y="0">.</tspan></text>
      </g>
    </SVG>
  </Box>
)

export default withResponsive(Title);
