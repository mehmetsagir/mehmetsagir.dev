import React from 'react';
import ContentLoader from 'react-content-loader';
import { useTheme } from 'styled-components';

import { Container as Events } from '../Projects/events';
import { Container as Event } from '../Projects/events/Card';

const EventsLoader = () => {
  const theme = useTheme();

  return (
    <Events>
      {Array.from({ length: 8 }).map((_, index) => (
        <Event key={index}>
          <a className="title">
            <ContentLoader
              speed={2}
              width="24%"
              height={15}
              backgroundColor={theme.colors.secondary}
              foregroundColor={theme.colors.bg}
            >
              <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
            </ContentLoader>
          </a>
          <div className="commits">
            <div
              className="commit"
              style={{
                justifyContent: 'space-between',
              }}
            >
              <div
                className="message"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <small>Commit Message:</small>&nbsp;
                <ContentLoader
                  speed={2}
                  width="40%"
                  height={12}
                  backgroundColor={theme.colors.secondary}
                  foregroundColor={theme.colors.bg}
                >
                  <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
                </ContentLoader>
              </div>
              <div className="created_at">
                <ContentLoader
                  speed={2}
                  width="40px"
                  height={10}
                  backgroundColor={theme.colors.secondary}
                  foregroundColor={theme.colors.bg}
                >
                  <rect x="0" y="0" rx="2" ry="2" width="100%" height="100%" />
                </ContentLoader>
              </div>
            </div>
          </div>
        </Event>
      ))}
    </Events>
  );
};

export default EventsLoader;
