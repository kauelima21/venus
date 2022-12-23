import { css } from './../../styles';

export const VenusInputStyle = css({
  height: '50px',
  fontSize: '$sm',
  color: '$secondaryMid',
  backgroundColor: '$secondaryLow',
  borderRadius: '$sm',
  border: '3px solid transparent',
  padding: '0 .7rem',
  transition: '.3s',
  outline: 'none',
  maxWidth: '100%',

  '&:focus': {
    border: '3px solid $primaryMid',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$gray',
    color: 'rgba(112, 112, 112, .5)',
  },
});
