import { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Hi, I&apos;m Mehmet!</h1>
      <p>
        I&apos;m a full time front-end developer with a passion for learning new
        technologies. <br /> I like to write clean, efficient and maintainable
        code.
        <br />
        And I&apos;m freelancing from time to time.
        <span>
          P.S. this website is open-source and available on{' '}
          <a
            href="https://github.com/mehmetsagir/mehmetsagir.dev"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </span>
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 14%;
  h1 {
    font-weight: 200;
  }
  p {
    margin-top: 24px;
    font-size: 18px;
    font-weight: 200;
    letter-spacing: 0.7px;
    line-height: 26px;

    a {
      padding-bottom: 2px;
      font-weight: 400;
      text-decoration: underline;
    }

    span {
      display: block;
      margin-top: 16px;
    }
  }
`;

export default Home;
