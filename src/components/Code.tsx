import Prism from 'prismjs';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import getColor from '../helpers/getColor';

type Props = {
  language: 'typescript' | 'javascript' | 'css' | 'html' | 'json';
  code: string;
  style?: React.CSSProperties;
};

const Code: React.FC<Props> = ({ language, code, style }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Container style={style}>
      <div className="header">
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
        <div className="language">{language}</div>
      </div>
      <pre className={`language-${language}`}>
        <code>{code.trim()}</code>
      </pre>
    </Container>
  );
};

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap');

  border-radius: 8px;
  background: ${({ theme }) =>
    getColor(theme.colors.primary).isDark
      ? theme.colors.primary
      : theme.colors.text};
  padding: 10px 20px;
  font-family: 'Fira Code', monospace !important;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .dots {
      display: flex;
      align-items: center;
      gap: 6px;

      span {
        width: 12px;
        height: 12px;
        border-radius: 50%;

        &:nth-child(1) {
          background: #ff6058;
        }
        &:nth-child(2) {
          background: #ffbe2f;
        }
        &:nth-child(3) {
          background: #27ca40;
        }
      }
    }

    .language {
      text-transform: uppercase;
      font-size: 14px;
      opacity: 0.7;
      user-select: none;
    }
  }

  pre {
    padding: 0 !important;
    background: none !important;
    font-size: 15px;
    line-height: 1.4;
    opacity: 0.8;
    code {
      font-family: 'Fira Code', monospace !important;
    }
  }
`;

export default Code;
