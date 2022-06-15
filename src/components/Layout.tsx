import StyledThemeProvider from 'src/styles/ThemeProvider';
import styled from 'styled-components';

import Menu from './Menu';

const Layout: React.FC = ({ children }) => (
  <StyledThemeProvider>
    <Container>
      <Menu />
      {children}
    </Container>
  </StyledThemeProvider>
);

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints[0]};
  margin: 0 auto;
  padding: 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    max-width: 100%;
    padding: 32px 16px;
  }
`;

export default Layout;
