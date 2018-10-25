import { injectGlobal } from 'styled-components';
import mediumWoff from './minified/jf-jinxuan-fresh2.2-medium.woff';
import mediumTtf from './minified/jf-jinxuan-fresh2.2-medium.ttf';

import regularWoff from './minified/jf-jinxuan-fresh2.2-regular.woff';
import regularTtf from './minified/jf-jinxuan-fresh2.2-regular.ttf';

injectGlobal`
  @font-face {
    font-family: JinXuan-Fresh;
    src: local("jf-jinxuan-fresh2.2"),
      url(${regularWoff}),
      url(${regularTtf});
    font-weight: 400;
  }

  @font-face {
    font-family: JinXuan-Fresh;
    src: local("jf-jinxuan-fresh2.2"),
      url(${mediumWoff}),
      url(${mediumTtf});
    font-weight: 500;
  }
`;
