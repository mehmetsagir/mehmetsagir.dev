import Router from 'next/router';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { filteredList } from '../variables';

type Props = {
  setSearch: (value: string) => void;
};

const Search: React.FC<Props> = ({ setSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('keydown', () => {
      inputRef.current?.focus();
    });
  }, []);

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
        placeholder="Type the route you want to go"
        onChange={({ target }) => setSearch(target.value)}
        onKeyDown={handleChangeRoute}
        ref={inputRef}
      />
      <span>ESC</span>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 16px;

  input {
    flex: 1;
    height: 50px;
    border: none;
    background: none;
    padding-right: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  span {
    padding: 4px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
    font-size: 10px;
  }
`;

export default Search;
