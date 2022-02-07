import Router from 'next/router';
import styled from 'styled-components';

import { filteredList } from './variables';

type Props = {
  setSearch: (value: string) => void;
};

const Header: React.FC<Props> = ({ setSearch }) => {
  const handleChangeRoute = (e: any) => {
    if (e.key === 'Enter') {
      const route = filteredList(e.target.value)[0]?.routes[0];
      if (route && !route.disabled) {
        Router.push(route.path);
      }
    }
  };

  return (
    <Container>
      <input
        type="text"
        autoFocus
        placeholder="Type the route you want to go"
        onChange={({ target }) => setSearch(target.value)}
        onKeyDown={handleChangeRoute}
      />
      <span>ESC</span>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.space[3]}`};

  input {
    flex: 1;
    height: 50px;
    border: none;
    background: none;
    padding-right: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  span {
    padding: ${({ theme }) => theme.space[1]};
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.radii.small};
    font-size: ${({ theme }) => theme.fontSizes[0]};
  }
`;

export default Header;
