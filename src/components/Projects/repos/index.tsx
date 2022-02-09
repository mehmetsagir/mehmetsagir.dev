import React from 'react';
import Title from 'src/components/Projects/Title';
import repos from 'src/db/repos.json';
import styled from 'styled-components';

import Card from './Card';

const Repos = () => {
  return (
    <>
      <Title title="Some Repositories" marginTop="40px" />
      <Container>
        {repos.map((repo, index) => (
          <Card
            key={index}
            title={repo.title}
            image={repo.image}
            repoUrl={repo.repo_url}
            url={repo.url}
          />
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
