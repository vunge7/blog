import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children?: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export default function PostHeading({
  children = '',
  url,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const headingClassName = {
    h1: 'text-2xl/tight font-bold sm:text-4xl',
    h2: 'text-2xl/tight font-bold',
  };

  const commonClasses = '';

  return (
    <Tag className={clsx(headingClassName[Tag], commonClasses)}>
      <Link className='group-hover:text-slate-500 transition' href={url}>
        {children}
      </Link>
    </Tag>
  );
}
