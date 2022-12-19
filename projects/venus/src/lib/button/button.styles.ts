import { css } from './../styles';

export const ButtonStyle = css({
  color: '$white',
  padding: '0 1.5rem',
  height: '50px',
  backgroundColor: '$primaryMid',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '$1',
  variants: {
    bg: {
      primary: {
        backgroundColor: '$primaryMid',
        '&:hover': {
          backgroundColor: '$primaryDark',
        },
      },
      secondary: {
        backgroundColor: '$secondaryLow',
        color: '$secondaryRegular',
        '&:hover': {
          backgroundColor: '$secondaryRegular',
          color: '$secondaryLow',
        },
      },
      danger: {
        backgroundColor: '$danger',
        '&:hover': {
          backgroundColor: '$dangerHover',
        },
      },
      success: {
        backgroundColor: '$success',
        '&:hover': {
          backgroundColor: '$successHover',
        },
      },
      warning: {
        backgroundColor: '$warning',
        '&:hover': {
          backgroundColor: '$warningHover',
        },
      },
    },
  },
});
