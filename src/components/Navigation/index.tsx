import Link from 'next/link';
import styled from 'styled-components';

import Title from '../Projects/Title';
import Menu from './Menu';
import { useCurrentRoute } from './Menu/variables';

const Navigation = () => {
  const { icon, label, path, isDetailPage } = useCurrentRoute();

  const content = (
    <div className="current-route">
      {icon}
      <Title title={isDetailPage ? `Return to ${label}` : label} />
    </div>
  );

  return (
    <Container>
      {isDetailPage ? (
        <Link href={path} passHref>
          <a>{content}</a>
        </Link>
      ) : (
        content
      )}
      <Menu />
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

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
