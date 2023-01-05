import { css } from '../../stitches.config';

export const VenusCardStyle = css({
  color: '$secondaryMid',
  backgroundColor: '$gray',
  border: 'none',
  outline: 'none',
  maxWidth: '600px',
  variants: {
    size: {
      full: {
        maxWidth: '100%',
      },
    },
    radii: {
      sm: {
        borderRadius: '$sm',
      },
      md: {
        borderRadius: '$md',
      },
      lg: {
        borderRadius: '$lg',
      },
      xl: {
        borderRadius: '$xl',
      },
    },
  },
});
