import router from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';
import { filteredList } from './variables';

type Props = {
  search: string;
};

const MenuGroup: React.FC<Props> = ({ search }) => {
  const [isActiveLink, setIsActiveLink] = useState(router.pathname);

  const navigations = filteredList(search);

  if (!navigations.length) return null;
  return (
    <Container>
      {navigations.map((navigate, key) => (
        <React.StrictMode key={key}>
          <span className="title">{navigate.title}</span>
          {navigate.routes.map(
            (route, key) =>
              !route.disabled && (
                <MenuItem
                  key={key}
                  data={route}
                  setIsActiveLink={setIsActiveLink}
                  isActiveLink={isActiveLink}
                />
              )
          )}
        </React.StrictMode>
      ))}
    </Container>
  );
};

const Container = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .title {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes[0]};
    font-weight: 600;
    opacity: 0.6;
    color: #ccc;
    padding: ${({ theme }) => `0 ${theme.space[3]}`};
    margin: ${({ theme }) => `${theme.space[3]} 0`};
  }
`;

export default MenuGroup;
