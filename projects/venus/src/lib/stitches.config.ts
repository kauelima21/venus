import { createStitches } from '@stitches/core';
// import { ConfigType } from '@stitches/core/types/config';
// import { VenusTokens } from './types/tokens';

const defaultTheme = {
  colors: {
    background: '#FBFBFB',
    primaryLow: '#67F5FF',
    primaryMid: '#37B6C4',
    primaryDark: '#037F9C',
    secondaryLow: '#E1E1E6',
    secondaryLight: '#D9D9D9',
    secondaryRegular: '#707070',
    secondaryMid: '#4E4A45',
    secondaryDark: '#484440',
    success: '#00B37E',
    successHover: '#00875F',
    danger: '#D94352',
    dangerHover: '#F76C82',
    warning: '#F5B946',
    warningHover: '#FCD277',
    blue: '#4863F7',
    blueHover: '#3249CB',
    purple: '#8257E5',
    purpleHover: '#633BBC',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#EFEFF2',
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '3rem',
  },

  fontWeights: {
    regular: '400',
    medium: '500',
    bold: '700',
  },

  radii: {
    sm: '5px',
    md: '8px',
    lg: '12px',
    xl: '20px',
  },
};

export const { css, theme, keyframes } = createStitches({
  theme: defaultTheme,
});

// export const extendTheme = (theme: ConfigType.Theme<VenusTokens>) => {
//   return createStitches({
//     theme: {
//       ...defaultTheme,
//       ...theme,
//     }
//   });
// };
