import { twMerge } from 'tailwind-merge';

interface SkeletonProps {
  className?: string;
  itemsClassName?: string;
  count?: number;
}

export function Skeleton({
  className,
  itemsClassName,
  count = 1,
}: SkeletonProps) {
  return (
    <div className={twMerge('animate-pulse', className)}>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={twMerge(
            'w-full h-5 rounded-md bg-gray-600/20',
            itemsClassName
          )}
        />
      ))}
    </div>
  );
}
