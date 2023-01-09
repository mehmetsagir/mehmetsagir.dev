import cx from 'classnames';
import Link from 'next/link';
import React from 'react';

interface StyledLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function StyledLink({
  href,
  children,
  className,
  ...props
}: StyledLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={cx(
        'hover:text-white font-semibold hover:underline underline-offset-4 transition-all group relative',
        className
      )}
    >
      {children}
    </Link>
  );
}
