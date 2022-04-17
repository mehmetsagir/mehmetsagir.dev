import React, { useEffect, useState } from 'react';
import Title from 'src/components/Projects/Title';
import styled from 'styled-components';

import Card from './Card';

const Repos = () => {
  const [repository, setRepository] = useState([]);

  useEffect(() => {
    fetch('https://gh-pinned-repos.egoist.sh/?username=mehmetsagir').then(
      (res) => res.json().then((data) => setRepository(data))
    );
  }, []);

  if (!repository.length) return null;
  return (
    <>
      <Title title="Pinned Repositories" marginTop="30px" />
      <Container>
        {repository.map((repo, index) => (
          <Card key={index} repo={repo} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export default Repos;
