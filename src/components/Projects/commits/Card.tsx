import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { rgba } from 'polished';
import styled from 'styled-components';

import { EventProps } from '.';

type Props = {
  data: EventProps;
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <a
        className="title"
        href={`https://github.com/${data.repo}`}
        target="_blank"
        rel="noreferrer"
      >
        {data.repo.split('/')[1]}
      </a>
      <div className="commits">
        {data.commits.map((commit, key) => (
          <div className="commit" key={key}>
            <div className="message">
              <small>Commit Message:</small>&nbsp;
              <a
                href={`https://github.com/${data.repo}/commit/${commit.commit_id}`}
                target="_blank"
                rel="noreferrer"
              >
                {commit.commit_message}
              </a>
            </div>
            <div className="created_at">
              {dayjs(commit.created_at).fromNow()}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  .title {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.link};
    &:hover {
      text-decoration: underline;
    }
  }
  .commits {
    margin: 0 0 10px 7px;

    .commit {
      margin: 2px 0;
      line-height: 1.5;
      display: flex;
      align-items: center;
      justify-content: space-between;

      small {
        font-size: 10px;
        color: ${({ theme }) => theme.colors.text};
        opacity: 0.5;
      }

      .message {
        font-size: 12px;
        color: ${({ theme }) => rgba(theme.colors.text, 0.6)};

        a:hover {
          color: ${({ theme }) => theme.colors.link};
          text-decoration: underline;
        }
      }

      .created_at {
        flex-shrink: 0;
        margin-left: 5px;
        font-size: 10px;
        opacity: 0.5;
        color: ${({ theme }) => theme.colors.textSecondary};
      }
    }
  }
`;

export default Card;
