import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { RouteProps } from '/src/types/routes';

type Props = {
  data: RouteProps;
  isActiveLink: string;
  setIsActiveLink: (isActiveLink: string) => void;
} & HTMLAttributes<LinkProps>;

const MenuItem: React.FC<Props> = ({ data, setIsActiveLink, isActiveLink }) => {
  const { path, label, icon, disabled } = data;

  const content = (
    <Container
      onMouseEnter={() => setIsActiveLink(path)}
      className={classNames({
        active: isActiveLink === path,
      })}
    >
      <div className="icon">{icon}</div>
      {label}
    </Container>
  );

  return disabled ? (
    content
  ) : (
    <Link href={path} {...data}>
      {content}
    </Link>
  );
};

const Container = styled.a`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.radii.normal};
  margin: ${({ theme }) => theme.space[1]} 0};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: 200ms;

  
  &.active {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .icon {
    width: 18px;
    height: 18px;
    margin-right: ${({ theme }) => theme.space[3]};
  }
`;

export default MenuItem;
