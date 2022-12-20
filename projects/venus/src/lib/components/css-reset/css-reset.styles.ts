import { globalCss } from '@stitches/core';

export const GlobalStyles = globalCss({
  '@font-face': {
    fontFamily: 'OpenSans',
    src: "url('/assets/OpenSans-Regular.ttf')",
  },
  '@import':
    "url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap')",
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: "'Open Sans', sans-serif",
  },
  a: { display: 'inline-block', textDecoration: 'none' },
  ul: { listStyle: 'none' },
  img: { maxWidth: '100%', display: 'inline-block' },
});
