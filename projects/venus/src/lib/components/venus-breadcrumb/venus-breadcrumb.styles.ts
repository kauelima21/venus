import { css } from '../../stitches.config';

export const VenusBreadcrumbStyle = css({
  fontWeight: '$bold',
  padding: '20px',
  height: '60px',
  border: 'none',
  outline: 'none',
  backgroundColor: '$white',
  boxShadow: '0px 2px 4px #D9D9D9',
});

export const VenusBreadcrumbList = css({
  display: 'flex',
  gap: '20px',
  listStyle: 'none',
});

export const VenusBreadcrumbItem = css({
  color: '$secondaryRegular',
  '&:hover': {
    color: '$secondaryMid',
  },
  cursor: 'pointer',
});

export const VenusBreadcrumbIcon = css({
  display: 'block',
  width: '24px',
  height: '24px',
});
