import { lighten, rgba } from 'polished';

import getColor from '../helpers/getColor';

const defaultColor = '#121212';

const theme = {
  breakpoints: ['700px'],
  colors: {
    bg: defaultColor,
    primary: lighten(0.03, defaultColor),
    secondary: lighten(0.1, defaultColor),
    text: getColor(defaultColor).color,
    textPrimary: rgba(getColor(defaultColor).color, 0.8),
    textSecondary: rgba(getColor(defaultColor).color, 0.6),
    link: getColor(defaultColor).isDark ? '#59a6ff' : '#59b9ff',
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,Ubuntu, Cantarell, "Helvetica Neue", sans-serif;',
  },
};

export default theme;
