import { css } from './../../styles';

export const VenusButtonStyle = css({
  height: '40px',
  padding: '0 1.5rem',
  color: '$white',
  textTransform: 'uppercase',
  fontSize: '$sm',
  fontWeight: '$bold',
  backgroundColor: '$primaryMid',
  border: 'none',
  borderRadius: '$sm',
  cursor: 'pointer',
  transition: '.3s',

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
        color: '$secondaryMid',
        '&:hover': {
          backgroundColor: '$warningHover',
        },
      },
    },
  },
});
