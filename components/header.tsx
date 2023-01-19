'use client';

import cx from 'classnames';
import Image from 'next/image';
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
  { label: 'Blogs', href: '/blogs' },
  { label: 'Projects', href: '/projects' }
];

export function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <header className="flex select-none items-start justify-between sm:items-center">
      <Link
        href="/"
        className="rounded-full bg-orange-500 transition-transform hover:scale-110"
      >
        <Image
          src="/images/memoji.png"
          alt="Mehmet Sağır"
          width={40}
          height={40}
        />
      </Link>
      <nav
        ref={ref}
        className={cx(
          isOpen ? 'flex' : 'hidden',
          'flex-col items-center justify-start sm:flex sm:flex-row sm:gap-6 pr-1 sm:pr-0'
        )}
      >
        {NAVIGATIONS.map(({ label, href }, index) => {
          const isActive =
            href === '/' ? pathname === href : pathname?.includes(href);

          return (
            <Link
              key={index}
              href={href}
              className={cx(
                'transition-colors py-2 sm:py-0 block w-full text-left',
                isActive ? 'text-white' : 'text-gray-300/60'
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {!isOpen && (
        <button
          type="button"
          className="flex items-center py-2 sm:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {NAVIGATIONS.find(item => item.href === pathname)?.label}
          <DownIcon />
        </button>
      )}
    </header>
  );
}
