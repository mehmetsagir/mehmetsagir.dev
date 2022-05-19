import Link from 'next/link';
import { lighten } from 'polished';
import styled from 'styled-components';

import snippets from '../components/Snippets/snippets.json';

type SnippetType = {
  name: string;
  description: string;
  category: string;
  path: string;
};

const Snippets = () => {
  return (
    <Container>
      <h3>Snippets.</h3>
      <p className="desc">
        Pieces of code that can offer solutions to some problems or needs.
      </p>
      <ul className="snippet-wrapper">
        {snippets.map((snippet: SnippetType) => (
          <li key={snippet.name}>
            <Link href={snippet.path}>
              <a className="snippet">
                <div>
                  <h4>{snippet.name}</h4>
                  <p>{snippet.description}</p>
                </div>
                <span>Category: {snippet.category}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  h3 {
    font-size: 26px;
    font-weight: 400;
  }
  .desc {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .snippet-wrapper {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;

    li {
      display: flex;

      .snippet {
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: ${({ theme }) => theme.colors.primary};
        padding: 14px 16px;
        border-radius: 4px;
        transition: 200ms;

        &:hover {
          background-color: ${({ theme }) => lighten(0.05, theme.colors.bg)};
        }
        h4 {
          color: #5773ff;
          font-weight: 600;
          font-size: 20px;
        }
        p {
          font-size: 15px;
          color: ${({ theme }) => theme.colors.textSecondary};
          line-height: 1.3;
          margin: 8px 0 24px;
        }
        span {
          display: block;
          font-size: 14px;
          padding: 6px 8px;
          background-color: ${({ theme }) => theme.colors.secondary};
          border-radius: 2px;
        }
      }
    }
  }
`;

export default Snippets;
