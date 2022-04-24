import styled from 'styled-components';

type Props = {
  title: string;
  path: string;
};

const Card: React.FC<Props> = ({ title, path }) => {
  return (
    <Container href={path} target="_blank">
      {title}
    </Container>
  );
};

export const Container = styled.a`
  display: block;
  padding: 16px 26px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: 200ms;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export default Card;
