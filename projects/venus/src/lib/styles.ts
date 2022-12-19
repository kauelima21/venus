import { createStitches } from '@stitches/core';

export const { css } = createStitches({
  theme: {
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
    },
    fontSizes: {
      1: '0.75rem',
      2: '0.875rem',
      3: '1rem',
      4: '1.125rem',
      5: '1.5rem',
      6: '2rem',
      7: '3rem',
    },
    radii: {
      1: '5px',
      2: '8px',
      3: '12px',
      4: '20px',
    },
  },
});
