import { formateDateTime, formateDistanceToNow } from '@/utils/format-datatime';

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className='text-slate-600  text-sm/tight'
      dateTime={dateTime}
      title={formateDistanceToNow(dateTime)}
    >
      {formateDateTime(dateTime)}
    </time>
  );
}
