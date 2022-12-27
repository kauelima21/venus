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
      small: {
        width: '24px',
        height: '24px',
      },
      large: {
        width: '40px',
        height: '40px',
      },
    },
  },
});
