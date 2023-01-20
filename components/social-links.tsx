import cx from 'classnames';

import { StyledLink } from '@/components/styled-link';
import { SOCIAL_LINKS } from '@/lib/constants';

interface IProps {
  className?: string;
}

export function SocialLinks({ className }: IProps) {
  return (
    <div className={cx('flex gap-4', className)}>
      {Object.entries(SOCIAL_LINKS).map(([name, url], key) => (
        <StyledLink key={key} href={url} target="_blank">
          {name}
        </StyledLink>
      ))}
    </div>
  );
}
