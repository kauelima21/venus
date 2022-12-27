import { css } from '../../stitches.config';

export const VenusButtonStyle = css({
  color: '$white',
  textTransform: 'uppercase',
  fontWeight: '$bold',
  backgroundColor: '$primaryMid',
  border: 'none',
  borderRadius: '$sm',
  cursor: 'pointer',
  transition: '.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',

  variants: {
    bg: {
      primary: {
        backgroundColor: '$primaryMid',
        '&:hover': {
          backgroundColor: '$primaryDark',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          backgroundColor: 'rgba(41, 182, 197, .5)',
          color: 'rgba(255, 255, 255, .5)',
        },
      },
      secondary: {
        backgroundColor: '$secondaryLow',
        color: '$secondaryRegular',
        '&:hover': {
          backgroundColor: '$secondaryRegular',
          color: '$secondaryLow',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          backgroundColor: '$gray',
          color: 'rgba(112, 112, 112, .5)',
        },
      },
      danger: {
        backgroundColor: '$danger',
        '&:hover': {
          backgroundColor: '$dangerHover',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          backgroundColor: 'rgba(217, 67, 82, .5)',
          color: 'rgba(255, 255, 255, .5)',
        },
      },
      success: {
        backgroundColor: '$success',
        '&:hover': {
          backgroundColor: '$successHover',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          backgroundColor: 'rgba(0, 179, 126, .5)',
          color: 'rgba(255, 255, 255, .5)',
        },
      },
      warning: {
        backgroundColor: '$warning',
        color: '$secondaryMid',
        '&:hover': {
          backgroundColor: '$warningHover',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          backgroundColor: 'rgba(245, 185, 70, .5)',
          color: 'rgba(78, 74, 69, .5)',
        },
      },
    },
    size: {
      md: {
        height: '40px',
        fontSize: '$sm',
        padding: '0 1rem',
      },
      lg: {
        height: '50px',
        fontSize: '$md',
        padding: '0 1.5rem',
      },
      sm: {
        height: '30px',
        fontSize: '$xs',
        padding: '0 .8rem',
      },
    },
    width: {
      full: {
        width: '100%',
      },
    },
  },
});
