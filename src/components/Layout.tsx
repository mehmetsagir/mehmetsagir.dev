import StyledThemeProvider from 'src/styles/ThemeProvider';
import styled from 'styled-components';

import Navigation from './Navigation';

const Layout: React.FC = ({ children }) => (
  <StyledThemeProvider>
    <Container>
      <Navigation />
      {children}
    </Container>
  </StyledThemeProvider>
);

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints[0]};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.space[4]} ${theme.space[0]}`};

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    max-width: 100%;
    padding: ${({ theme }) => `${theme.space[4]} ${theme.space[3]}`};
  }
`;

export default Layout;
