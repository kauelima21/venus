import { globalCss } from '@stitches/core';

export const GlobalStyles = globalCss({
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
  ol: { listStyle: 'none' },
  img: { maxWidth: '100%', display: 'inline-block' },
  h1: { fontSize: '2rem' },
  h2: { fontSize: '1.5rem' },
  h3: { fontSize: '1.25rem' },
  p: { fontSize: '1rem' },
  table: { borderCollapse: 'collapse', borderSpacing: 0 },
});
