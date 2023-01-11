import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface IProps {
  date: string;
}

export function Date({ date }: IProps) {
  return (
    <p className="text-right text-xs font-semibold text-gray-500">
      {dayjs(date).fromNow()}
    </p>
  );
}
