import styled from 'styled-components';

import Menu from './Menu';

const Navigation = () => {
  return (
    <Container>
      <Menu />
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export default Navigation;
