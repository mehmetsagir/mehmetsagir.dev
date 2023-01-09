'use client';

import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import DownIcon from '@/public/svgs/down.svg';

interface INavigation {
  label: string;
  href: string;
}

const NAVIGATIONS: INavigation[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Snippets', href: '/snippets' },
  { label: 'Contact', href: '/contact' },
];

export default function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <header className="select-none py-4" ref={ref}>
      <nav
        className={cx(
          isOpen ? 'flex' : 'hidden',
          'flex-col gap-4 sm:gap-6 sm:flex sm:flex-row'
        )}
      >
        {NAVIGATIONS.map(({ label, href }, index) => {
          const isActive = pathname === href;

          return (
            <Link
              key={index}
              href={href}
              className={cx('transition-colors', {
                'text-white': isActive,
                'text-gray/70 hover:text-white/80': !isActive,
              })}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {!isOpen && (
        <button
          type="button"
          className="flex items-center sm:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {NAVIGATIONS.find((item) => item.href === pathname)?.label}
          <DownIcon />
        </button>
      )}
    </header>
  );
}
