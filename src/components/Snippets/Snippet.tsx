import styled from 'styled-components';

import Title from '../Title';
import snippets from './snippets.json';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Snippet: React.FC<Props> = ({ title, children }) => {
  const description = snippets.find((item) => item.name === title)?.description;

  return (
    <>
      <Title title={title} />
      <Container>
        <h2>Snippet.</h2>
        <h3>{title}</h3>

        <div className="content">
          {description && <p className="desc">{description}</p>}
          {children}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  h2,
  h3 {
    text-align: center;
    font-weight: 400;
  }
  h2 {
    font-size: 20px;
    color: #5773ff;
  }
  h3 {
    font-size: 26px;
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.text};
  }
  .content {
    margin-top: 40px;

    .desc {
      font-size: 18px;
      line-height: 1.4;
      margin-bottom: 16px;
    }
  }
`;

export default Snippet;
