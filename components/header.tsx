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
    <header className="select-none flex justify-between items-start sm:items-center">
      <Link
        href="/"
        className="rounded-full bg-orange-500 hover:scale-105 transition-transform"
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
          const isActive = pathname === href;

          return (
            <Link
              key={index}
              href={href}
              className={cx(
                'transition-colors py-2 sm:py-0 block w-full text-left',
                isActive ? 'text-white' : 'text-gray-300/60 hover:text-gray-300'
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
          className="flex items-center sm:hidden py-2"
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
