import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

type PostCoverImageProps = {
  imagesProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};
export function PostCoverImage({
  imagesProps,
  linkProps,
}: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full',
        'h-full',
        'overflow-hidden',
        'rounded-2xl',
        linkProps.className,
      )}
    >
      <Image
        {...imagesProps}
        className={clsx(
          'w-full',
          'h-full',
          'object-cover',
          'object-center',
          'group-hover:scale-105',
          'transition',
          imagesProps.className,
        )}
        alt={imagesProps.alt}
      />
    </Link>
  );
}

/*
1º OPÇÃO

type PostCoverImageProps = {
  href: string;
  src: string;
};

export function PostCoverImage({ href, src }: PostCoverImageProps) {
  return (
    <Link
      className={clsx('w-full h-full overflow-hidden rounded-2xl')}
      href={href}
    >
      <Image
        className={clsx(
          'w-full',
          'h-full',
          'object-cover',
          'object-center',
          'group-hover:scale-105',
          'transition',
        )}
        src={src}
        width={1200}
        height={720}
        alt='Firs Post'
        priority
      />
    </Link>
  );
}

*/
