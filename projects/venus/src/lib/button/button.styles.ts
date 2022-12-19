import { css } from './../styles';

export const ButtonStyle = css({
  color: '$white',
  padding: '0 1.5rem',
  height: '50px',
  backgroundColor: '$primaryMid',
  border: 'none',
  cursor: 'pointer',
  variants: {
    color: {
      primary: {
        backgroundColor: '$primaryMid',
        '&:hover': {
          backgroundColor: '$primaryDark',
        },
      },
      danger: {
        backgroundColor: '$danger',
        '&:hover': {
          backgroundColor: '$dangerHover',
        },
      },
    },
  },
});
