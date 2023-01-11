import cx from 'classnames';

import Skeleton from '@/components/skeleton';

import BlogsTemplate from './template';

interface BlogsLoaderProps {
  title: string;
  withInfo?: boolean;
}

export default function BlogsLoader({
  title,
  withInfo = false,
}: BlogsLoaderProps) {
  const currentDate = new Date().toISOString();

  return (
    <BlogsTemplate
      title={title}
      data={Array.from({ length: 3 }, () => ({
        title: (
          <Skeleton
            itemsClassName={cx('w-2/3', withInfo ? 'h-[24px] my-0.5' : 'h-7')}
          />
        ),
        link: '#',
        date: currentDate,
        tags: ['Loading...', 'Loading...'],
        content: <Skeleton count={2} className="flex flex-col gap-2" />,
      }))}
      withInfo={withInfo}
    />
  );
}
