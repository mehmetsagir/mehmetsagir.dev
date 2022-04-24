import styled from 'styled-components';

import Icon from '../../Icon';

type Props = {
  repo: {
    repo: string;
    link: string;
    description: string;
    language: string;
    languageColor: string;
    stars: number;
    forks: number;
  };
};

const Card: React.FC<Props> = ({ repo }) => (
  <Container>
    <div className="title">
      <Icon name="github_repo" size="16px" />
      <a href={repo.link} target="_blank" rel="noreferrer">
        {repo.repo}
      </a>
    </div>
    <p className="description">{repo.description}</p>
    <div className="info">
      <div>
        <span
          className="language-color"
          style={{
            backgroundColor: repo.languageColor,
          }}
        />
        <span>{repo.language}</span>
      </div>
      {repo.stars > 0 && (
        <a href={`${repo.link}/stargazers`} target="_blank" rel="noreferrer">
          <Icon name="github_stars" size="16px" />
          <span>{repo.stars}</span>
        </a>
      )}
      {repo.forks > 0 && (
        <a
          href={`${repo.link}/network/members`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github_forks" size="16px" />
          <span>{repo.forks}</span>
        </a>
      )}
    </div>
  </Container>
);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 16px;
  border-radius: 6px;
  line-height: 1.5;

  .title {
    display: flex;
    align-items: center;
    gap: 6px;

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.link};

      &:hover {
        text-decoration: underline;
      }
    }
  }
  .description {
    flex: 1;
    margin-top: 8px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .info {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 8px;
    font-size: 12px;
    div,
    a {
      display: flex;
      align-items: center;
      gap: 6px;
      color: ${({ theme }) => theme.colors.textSecondary};

      .language-color {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
    }
    a:hover {
      color: ${({ theme }) => theme.colors.link};
    }
  }
`;

export default Card;
