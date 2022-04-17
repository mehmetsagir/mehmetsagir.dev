import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const Events = () => {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const response = fetch('https://api.github.com/users/mehmetsagir/events');

    if (response) {
      response.then((res) => {
        res.json().then((data) => {
          data.map((event: any) => {
            const { repo, payload, created_at } = event;

            const { commits } = payload;
            const commitList: CommitProps[] = [];

            commits.map((commit: any) => {
              commitList.push({
                created_at,
                commit_id: commit.sha,
                commit_message: commit.message,
              });
            });

            setEvents((prevEvents) => [
              ...prevEvents,
              {
                repo: repo.name,
                commits: commitList,
              },
            ]);
          });
        });
      });
      setIsLoading(false);
    }
  }, []);

  if (!events.length || isLoading) return null;
  return (
    <>
      <Title title="Last Events" marginTop="30px" />
      <Container>
        {events.map((event, key) => (
          <Card key={key} event={event} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.primary};
  padding: 10px 16px;
  border-radius: 8px;
  max-height: 350px;
  overflow: auto;
`;

export default Events;
