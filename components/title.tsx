interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <div className="relative before:absolute before:-inset-y-1 before:-inset-x-2 before:block before:-skew-y-3 before:bg-zinc-800/50 sm:before:-inset-y-1.5 sm:before:-inset-x-4">
      <h4 className="relative font-semibold sm:text-2xl">{title}</h4>
    </div>
  );
}
