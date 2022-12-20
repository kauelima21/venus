import { css } from './../../styles';

export const VenusInputStyle = css({
  height: '50px',
  fontSize: '$md',
  color: '$secondaryMid',
  backgroundColor: '$secondaryLow',
  borderRadius: '$sm',
  border: '2px solid $secondaryLow',
  padding: '0 1rem',
  transition: '.3s',
  outline: 'none',
  '&:focus': {
    border: '2px solid $primaryMid',
  },
});
