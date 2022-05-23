import { darken } from 'polished';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CommitsLoader from '../../Loaders/CommitsLoader';
import Title from '../Title';
import Card from './Card';

type CommitProps = {
  created_at: string;
  commit_message: string;
  commit_id: string;
};

export type EventProps = {
  repo: string;
  commits: CommitProps[];
};

const Commits = () => {
  const [commits, setCommits] = useState<EventProps[]>([]);

  useEffect(() => {
    const response = fetch('https://api.github.com/users/mehmetsagir/events');

    if (response) {
      response.then((res) => {
        res
          .json()
          .then((data) => {
            data.map((event: any) => {
              const { repo, payload, created_at, type } = event;
              if (type === 'PushEvent') {
                const { commits } = payload;
                const commitList: CommitProps[] = [];

                commits.map((commit: any) => {
                  commitList.push({
                    created_at,
                    commit_id: commit.sha,
                    commit_message: commit.message,
                  });
                });

                setCommits((prevCommits) => [
                  ...prevCommits,
                  {
                    repo: repo.name,
                    commits: commitList,
                  },
                ]);
              }
            });
          })
          .catch(() => {});
      });
    }
  }, []);

  return (
    <>
      <Title title="Last Commits" marginTop="30px" />{' '}
      {commits.length > 0 ? (
        <Container>
          {commits.map((commit, key) => (
            <Card key={key} data={commit} />
          ))}
        </Container>
      ) : (
        <CommitsLoader />
      )}
    </>
  );
};

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: -4px -4px 12px ${({ theme }) => darken(0.05, theme.colors.primary)},
    4px 4px 12px ${({ theme }) => darken(0.05, theme.colors.primary)};
  padding: 10px 16px;
  border-radius: 8px;
  max-height: 350px;
  overflow: auto;
  &:hover {
    box-shadow: inset -4px -4px 12px
        ${({ theme }) => darken(0.05, theme.colors.primary)},
      inset 4px 4px 12px ${({ theme }) => darken(0.05, theme.colors.primary)};
  }
  ::-webkit-scrollbar {
    width: 6px;
    padding: 10px 0;
  }
  ::-webkit-scrollbar-track {
    box-shadow: none;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

export default Commits;
