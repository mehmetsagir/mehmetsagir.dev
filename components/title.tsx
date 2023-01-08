interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="before:block before:absolute before:-inset-y-1 sm:before:-inset-y-1.5 before:-inset-x-2 sm:before:-inset-x-4 before:-skew-y-3 before:bg-zinc-800/50 relative">
      <h4 className="sm:text-2xl font-semibold relative">{title}</h4>
    </div>
  );
}
