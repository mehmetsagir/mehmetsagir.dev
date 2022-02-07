import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <h4>To contact me!</h4>
      <a href="mailto:me&#64;mehmetsagir.com" className="mail">
        me&#64;mehmetsagir.com
      </a>
      <span>or</span>
      <a
        href="https://www.superpeer.com/memet"
        target="_blank"
        rel="noreferrer"
        className="superpeer-link"
      >
        You can check available times on Superpeer to meet me 1:1.
      </a>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 14%;

  h4 {
    font-weight: normal;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .mail {
    display: inline-block;
    margin-top: 10px;
  }
  span {
    margin: 15px 0;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 15px;
    color: ${({ theme }) => theme.colors.textSecondary};

    &::before,
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .superpeer-link {
    display: block;
    font-size: 14px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.textSecondary};
    background: ${({ theme }) => theme.colors.primary};
    padding: 16px 26px;
    border-radius: 5px;
    transition: 200ms;
    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

export default Contact;
