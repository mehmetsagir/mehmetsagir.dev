import styled from 'styled-components';

type Props = {
  title: string;
  marginTop?: string;
};

const Title: React.FC<Props> = ({ title, marginTop }) => {
  return <Container style={{ marginTop: marginTop }}>{title}</Container>;
};

const Container = styled.h4`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 10px;
`;

export default Title;
