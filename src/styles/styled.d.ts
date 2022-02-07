import 'styled-components';

import theme from './theme';

type themeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends themeType {}
}
