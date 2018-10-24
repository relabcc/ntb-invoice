import React from 'react';
import SVG from '../../components/SVG';
import Box from '../../components/Box';
import questions from './questions.json';

const Title = ({ qId, pageId, ...props }) => (
  <Box {...props}>
    <SVG viewBox="0 0 512 94">
      <g>
        <g>
          <line x1="25.54" y1="9.58" x2="486.46" y2="9.58" fill="none" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
          <line x1="25.34" y1="84.42" x2="486.29" y2="84.42" fill="none" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
          <rect x="1" y="1" width="510" height="92" fill="none" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
          <path d="M511,27A26,26,0,0,1,485,1" fill="none" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
          <circle cx="500.46" cy="12.04" r="2.46" fill="none" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
          <g>
            <path d="M485,93.56a26,26,0,0,1,26-26" fill="none" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
            <circle cx="499.96" cy="83.02" r="2.46" fill="none" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
          </g>
          <path d="M1,67.56a26,26,0,0,1,26,26" fill="none" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
          <circle cx="11.54" cy="82.52" r="2.46" fill="none" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
          <g>
            <path d="M27,1A26,26,0,0,1,1,27" fill="none" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
            <circle cx="12.04" cy="11.54" r="2.46" fill="none" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
          </g>
          <circle cx="63.83" cy="47" r="27.94" fill="#534741" stroke="#534741" stroke-miterlimit="10" stroke-width="2"/>
        </g>
        <rect x="108.47" y="21" width="366.6" height="52.5" rx="10.91" ry="10.91" fill="#534741" opacity="0.1"/>
        <text transform="translate(136.85 55.06)" font-size="20" font-family="jf-jinxuan-fresh2.2-Regular, jf jinxuan-fresh2.2-Regular-B5pc-H" letter-spacing="0.2em">{questions[qId].title}</text>
        <text transform="translate(55.88 62.56)" font-size="28.61" fill="#eee9e6" font-family="Helvetica, Helvetica" letter-spacing="0.2em">{pageId}</text>
        <text transform="translate(57.66 37.66)" font-size="13.25" fill="#eee9e6" font-family="HelveticaNeue-CondensedBold, HelveticaNeue CondensedBold" font-weight="700">n<tspan x="7.35" y="0" letter-spacing="-0.02em">o</tspan><tspan x="14.31" y="0">.</tspan></text>
      </g>
    </SVG>
  </Box>
)

export default Title;
