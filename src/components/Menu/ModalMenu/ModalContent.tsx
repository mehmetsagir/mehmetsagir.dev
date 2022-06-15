import React, { useState } from 'react';

import MenuGroup from './MenuList';
import Search from './Search';

const ModalContent = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Search setSearch={setSearch} />
      <MenuGroup search={search} />
    </>
  );
};

export default ModalContent;
