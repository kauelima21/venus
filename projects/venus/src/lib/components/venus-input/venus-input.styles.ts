import { css } from './../../styles';

export const VenusInputStyle = css({
  height: '50px',
  fontSize: '$sm',
  color: '$secondaryMid',
  backgroundColor: '$secondaryLow',
  borderRadius: '$sm',
  border: '3px solid $secondaryLow',
  padding: '0 .7rem',
  transition: '.3s',
  outline: 'none',
  maxWidth: '100%',

  '&:focus': {
    border: '3px solid $primaryMid',
  },
});
