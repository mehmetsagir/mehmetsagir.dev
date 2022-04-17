import { lighten } from 'polished';

const defaultColor = '#121212';

const theme = {
  breakpoints: ['700px'],
  colors: {
    bg: defaultColor,
    primary: lighten(0.03, defaultColor),
    secondary: lighten(0.1, defaultColor),
    text: lighten(0.6, defaultColor),
    textPrimary: lighten(0.7, defaultColor),
    textSecondary: lighten(0.4, defaultColor),
    link: '#59a6ff',
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,Ubuntu, Cantarell, "Helvetica Neue", sans-serif;',
  },
  fontSizes: ['10px', '12px', '14px', '16px', '18px', '26px', '42px'],
  space: ['0', '4px', '8px', '16px', '32px', '64px', '128px'],
  radii: {
    small: '4px',
    normal: '8px',
  },
};

export default theme;
