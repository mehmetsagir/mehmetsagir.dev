import Prism from 'prismjs';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

import getColor from '../helpers/getColor';

type Props = {
  language: 'typescript' | 'javascript' | 'css' | 'html' | 'json';
  code: string;
  style?: React.CSSProperties;
};

const Code: React.FC<Props> = ({ language, code, style }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success('Copied to clipboard');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Container style={style} onClick={copyToClipboard}>
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
  position: relative;
  overflow: hidden;
  user-select: all;

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

  &::before {
    content: 'Click to Copy Code';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;
    opacity: 0;
    pointer-events: none;
  }

  &::before {
    animation: fadeIn 2.4s forwards;
  }

  @keyframes fadeIn {
    0%,
    100% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
  }
`;

export default Code;
