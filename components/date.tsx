import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface IProps {
  date: string;
}

export default function Date({ date }: IProps) {
  return (
    <p className="text-xs text-gray-500 font-semibold text-right">
      {dayjs(date).fromNow()}
    </p>
  );
}
