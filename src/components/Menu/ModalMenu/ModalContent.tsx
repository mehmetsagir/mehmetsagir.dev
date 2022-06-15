import React, { useState } from 'react';

import Header from './Header';
import MenuGroup from './MenuList';

const ModalContent = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header setSearch={setSearch} />
      <MenuGroup search={search} />
    </>
  );
};

export default ModalContent;
