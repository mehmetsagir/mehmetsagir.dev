import React from 'react';
import ContentLoader from 'react-content-loader';
import { useTheme } from 'styled-components';

import { Container as GistContainer } from '../Projects/gists/Card';

const GistsLoader = () => {
  const theme = useTheme();
  return (
    <GistContainer>
      <ContentLoader
        speed={2}
        width="100%"
        height={15}
        backgroundColor={theme.colors.secondary}
        foregroundColor={theme.colors.bg}
      >
        <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
      </ContentLoader>
    </GistContainer>
  );
};

export default GistsLoader;
