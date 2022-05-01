import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(({ theme }) => ({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box',
  },
  '*::selection': {
    background: theme.colors.secondary,
    color: theme.colors.text,
  },
  body: {
    backgroundColor: theme.colors.bg,
    fontFamily: theme.fontFamily.body,
    color: theme.colors.textPrimary,
  },
  button: {
    border: 'none',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

export default GlobalStyle;
