import React from 'react';
import ContentLoader from 'react-content-loader';
import { useTheme } from 'styled-components';

import Icon from '../Icon';
import { Container as ReposWrapper } from '../Projects/repos';
import { Container as Repo } from '../Projects/repos/Card';

const ReposLoader = () => {
  const theme = useTheme();

  return (
    <ReposWrapper>
      {Array.from({ length: 6 }).map((_, index) => (
        <Repo key={index}>
          <div className="title">
            <Icon name="github_repo" size="16px" />
            <a>
              <ContentLoader
                speed={2}
                width="40%"
                height={12}
                backgroundColor={theme.colors.secondary}
                foregroundColor={theme.colors.bg}
              >
                <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
              </ContentLoader>
            </a>
          </div>
          <p className="description">
            <ContentLoader
              speed={2}
              width="100%"
              height={10}
              backgroundColor={theme.colors.secondary}
              foregroundColor={theme.colors.bg}
            >
              <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
            </ContentLoader>
            <ContentLoader
              speed={2}
              width="100%"
              height={10}
              backgroundColor={theme.colors.secondary}
              foregroundColor={theme.colors.bg}
            >
              <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
            </ContentLoader>
            <ContentLoader
              speed={2}
              width="60%"
              height={10}
              backgroundColor={theme.colors.secondary}
              foregroundColor={theme.colors.bg}
            >
              <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
            </ContentLoader>
          </p>
          <div className="info">
            <div>
              <span
                className="language-color"
                style={{
                  backgroundColor: theme.colors.secondary,
                }}
              />
              <span>0</span>
            </div>
            <a>
              <Icon name="github_stars" size="16px" />
              <span>0</span>
            </a>

            <a>
              <Icon name="github_forks" size="16px" />
              <span>0</span>
            </a>
          </div>
        </Repo>
      ))}
    </ReposWrapper>
  );
};

export default ReposLoader;
