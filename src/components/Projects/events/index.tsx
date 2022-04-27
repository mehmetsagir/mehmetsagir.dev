import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import EventsLoader from '../../Loaders/EventsLoader';
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

                setEvents((prevEvents) => [
                  ...prevEvents,
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
      <Title title="Last Events" marginTop="30px" />
      <Container>
        {events.length > 0 ? (
          events.map((event, key) => <Card key={key} event={event} />)
        ) : (
          <EventsLoader />
        )}
      </Container>
    </>
  );
};

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.primary};
  padding: 10px 16px;
  border-radius: 8px;
  max-height: 350px;
  overflow: auto;
`;

export default Events;
