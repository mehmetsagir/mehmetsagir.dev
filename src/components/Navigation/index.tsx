import styled from 'styled-components';

import Title from '../Projects/Title';
import Menu from './Menu';
import { useCurrentRoute } from './Menu/variables';

const Navigation = () => {
  const { icon, label } = useCurrentRoute();

  return (
    <Container>
      <div className="current-route">
        {icon}
        <Title title={label} />
      </div>
      <Menu />
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space[4]};

  .current-route {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    svg {
      width: 18px;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
    h4 {
      margin-bottom: 0;
    }
  }
`;

export default Navigation;
