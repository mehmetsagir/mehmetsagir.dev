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
          {navigate.routes.map((route, key) => (
            <MenuItem
              key={key}
              data={route}
              setIsActiveLink={setIsActiveLink}
              isActiveLink={isActiveLink}
            />
          ))}
        </React.StrictMode>
      ))}
    </Container>
  );
};

const Container = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .title {
    display: block;
    font-size: 10px;
    font-weight: 600;
    opacity: 0.6;
    color: #ccc;
    padding: 0 16px;
    margin: 16px 0;
  }
`;

export default MenuGroup;
