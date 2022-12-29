import { css } from '../../stitches.config';

export const VenusIconStyle = css({
  variants: {
    fill: {
      dark: {
        fill: '$secondaryMid',
      },
      light: {
        fill: '$white',
      },
      primary: {
        fill: '$primaryLow',
      },
    },
    size: {
      sm: {
        width: '16px',
        height: '16px',
      },
      md: {
        width: '24px',
        height: '24px',
      },
      lg: {
        width: '36px',
        height: '36px',
      },
      xl: {
        width: '52px',
        height: '52px',
      },
    },
  },
});
