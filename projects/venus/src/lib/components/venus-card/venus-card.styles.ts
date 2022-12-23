import { css } from '../../styles';

export const VenusCardStyle = css({
  color: '$secondaryMid',
  backgroundColor: '$gray',
  border: 'none',
  borderRadius: '$lg',
  outline: 'none',
  width: '475px',
  variants: {
    size: {
      full: {
        width: '100%',
      },
    },
  },
});

export const VenusCardHeader = css({
  fontWeight: '$bold',
  padding: '18px',
  fontSize: '$lg',
  borderBottom: '1px solid $secondaryRegular',
});

export const VenusCardSection = css({
  padding: '24px 18px',
  fontWeight: '$bold',
  fontSize: '$md',
});
