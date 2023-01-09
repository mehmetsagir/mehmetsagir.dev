import cx from 'classnames';
import NextLink from 'next/link';

import Condition from '@/components/condition';
import Date from '@/components/date';
import StyledLink from '@/components/styled-link';
import Title from '@/components/title';
import { BlogTypes } from '@/types';

export interface BlogsProps {
  data: BlogTypes[];
  title: string;
  actions?: JSX.Element;
  withInfo?: boolean;
  loaderData?: JSX.Element[];
}

export default function BlogsTemplate({
  title,
  data,
  actions,
  withInfo = false,
}: BlogsProps) {
  const Link = withInfo ? NextLink : StyledLink;

  return (
    <div className="mt-14">
      <div className="flex justify-between items-end select-none relative">
        <Title title={title} />
        {actions}
      </div>
      <ul className={cx('mt-6 flex flex-col', withInfo ? 'gap-4' : 'gap-3')}>
        {data.map((blog, index) => (
          <Link
            href={blog.link}
            key={index}
            target="_blank"
            className={cx({
              'p-4 rounded bg-neutral-800/30 hover:bg-neutral-800/60 transition-colors':
                withInfo,
            })}
          >
            <h3 className="sm:text-xl">{blog.title}</h3>
            <Condition condition={withInfo}>
              <>
                <div className="hidden sm:flex items-center gap-2">
                  <Date date={blog.date} />
                  <div className="text-rose-100/30">·</div>
                  <ul className="flex gap-2">
                    {blog.tags.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="rounded px-2 py-[2px] text-[10px] font-semibold bg-zinc-800"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base line-clamp-2">
                  {blog.content}
                </p>
              </>
            </Condition>
          </Link>
        ))}
      </ul>
    </div>
  );
}
