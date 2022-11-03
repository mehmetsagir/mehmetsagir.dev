import React, { useEffect, useState } from 'react';
import Title from 'src/components/Projects/Title';
import styled from 'styled-components';

import ReposLoader from '../../Loaders/ReposLoader';
import Card from './Card';

const Repos = () => {
  const [repository, setRepository] = useState([]);

  useEffect(() => {
    fetch('https://gh-pinned-repos.egoist.dev/?username=mehmetsagir')
      .then((res) => res.json().then((data) => setRepository(data)))
      .catch(() => { });
  }, []);

  return (
    <>
      <Title title="Pinned Repositories" marginTop="30px" />
      <Container>
        {repository.length > 0 ? (
          repository.map((repo, index) => <Card key={index} repo={repo} />)
        ) : (
          <ReposLoader />
        )}
      </Container>
    </>
  );
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export default Repos;
