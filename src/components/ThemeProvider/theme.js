import merge from 'lodash/merge';
import range from 'lodash/range';
import mapValues from 'lodash/mapValues';

import colors from 'open-color/open-color.json';

const emToPx = (em) => `${em * 16}px`;

export const breakpoints = [36, 48, 62, 105, 120].map(emToPx);
export const containerWidth = [36, 46, 58, 58, 88].map(emToPx);

const generateFade = (r, g, b) => range(10, 100, 10)
  .reduce((fade, opacity) => merge(fade, { [opacity]: `rgba(${[r, g, b, opacity / 100].join()})` }), {});

const flatternColors = mapValues(colors, (listOfColors) => listOfColors[5]);

const font = 'Helvatica, Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';

const white = '#fff';
const black = '#000';
const coffee = '#534741'
const lightWhite = '#FFFAF7';
const blue = 'rgb(100, 146, 209)'

export default {
  colors: {
    ...flatternColors,
    white,
    black,
    coffee,
    lightWhite,
    blue,
    text: black,
    primary: flatternColors.blue,
    secondary: flatternColors.green,
    variations: colors,
    fade: {
      white: generateFade(255, 255, 255),
      black: generateFade(0, 0, 0),
    },
  },
  breakpoints,
  containerWidth,
  font,
  duration: 250,
};
