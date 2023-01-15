import classNames from 'classnames';

import { Condition } from '@/components/condition';
import { Date } from '@/components/date';
import { StyledLink } from '@/components/styled-link';
import { EventProps } from '@/types';

import { Section } from '../section';
import { EVENT_TYPES, EVENT_TYPES_COLOR } from './constants';

interface IProps {
  events: EventProps[];
}

const renderEvent = (event: EventProps) => {
  if (event.type === 'PushEvent') {
    return (
      <Condition condition={!!event?.commits}>
        <>
          <span className="mt-1 text-sm font-semibold text-gray-300/40">
            Commits:
          </span>
          <div className="ml-2 flex flex-col">
            {event?.commits?.map((commit, index) => (
              <StyledLink key={index} href={commit.link} className="text-sm">
                -&nbsp;{commit.message}
              </StyledLink>
            ))}
          </div>
        </>
      </Condition>
    );
  }

  return (
    <div className="ml-2 mt-1 flex items-center">
      <span className="text-xs text-gray-300/40">
        {EVENT_TYPES[event.type]}&nbsp;
      </span>
      <StyledLink href={event.link} className="text-sm">
        {event.title}
      </StyledLink>
    </div>
  );
};

export function Events({ events = [] }: IProps) {
  return (
    <Section title="Events" condition={events.length > 0}>
      <div className="flex max-h-96 flex-col gap-4 divide-y divide-gray-800 overflow-y-auto rounded-md border border-gray-300/10 p-4">
        {events.map((event, index) => (
          <div key={index} className="pt-2">
            <div className="flex justify-between">
              <div className="text-sm">
                <span className="text-xs font-semibold">Repo: &nbsp;</span>
                <StyledLink href={event.repo_url} className="text-sm">
                  {event.repo_name}
                </StyledLink>
                <span
                  className={classNames(
                    'font-semibold text-xs',
                    EVENT_TYPES_COLOR[event.type]
                  )}
                >
                  &nbsp;({EVENT_TYPES[event.type]})
                </span>
              </div>
              <Date date={event.created_at} />
            </div>
            {renderEvent(event)}
          </div>
        ))}
      </div>
    </Section>
  );
}
