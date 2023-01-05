import { css } from '../../stitches.config';

export const VenusTooltipStyle = css({
  fontSize: '$xs',
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',

  '&:before, &:after': {
    '--scale': 0,
    '--arrow-size': '6px',
    '--tooltip-color': '#484440',

    position: 'absolute',
    top: '-.25rem',
    left: '50%',
    transform:
      'translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale))',
    transition: '150ms transform',
    transformOrigin: 'bottom center',
  },

  '&:before': {
    '--translate-y': 'calc(-100% - var(--arrow-size))',

    content: 'attr(data-tooltip)',
    color: 'white',
    padding: '.5rem',
    borderRadius: '.3rem',
    textAlign: 'center',
    width: 'max-content',
    maxWidth: '250px',
    background: 'var(--tooltip-color)',
  },

  '&:hover:before, &:hover:after': {
    '--scale': 1,
  },

  '&:after': {
    '--translate-y': 'calc(-1 * var(--arrow-size))',

    content: '',
    border: 'var(--arrow-size) solid transparent',
    borderTopColor: 'var(--tooltip-color)',
    transformOrigin: 'top center',
  },

  // '&:before': {
  //   content: 'attr(data-title)',
  //   position: 'absolute',
  //   left: '-16px',
  //   bottom: '135%',
  //   backgroundColor: '$secondaryMid',
  //   color: '$white',
  //   fontSize: '$sm',
  //   padding: '10px',
  //   width: '250px',
  //   borderRadius: '$md',
  //   boxSizing: 'border-box',
  //   visibility: 'hidden',
  //   opacity: '0',
  //   transition: 'all .4s ease',
  // },

  // '&:after': {
  //   content: '',
  //   position: 'absolute',
  //   left: '8px',
  //   bottom: '100%',
  //   borderStyle: 'solid',
  //   borderWidth: '9px 9px 0 9px',
  //   borderColor: '$secondaryMid transparent transparent transparent',
  //   visibility: 'hidden',
  //   opacity: '0',
  //   transition: 'all .4s ease',
  // },

  // '&:hover:before, &:hover:after': {
  //   visibility: 'visible',
  //   opacity: '1',
  // },
});
