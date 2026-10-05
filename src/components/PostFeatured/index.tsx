import clsx from 'clsx';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;
  return (
    <section
      className={clsx(
        'grid',
        'grid-cols-1',
        'gap-8',
        'mb-16',
        'sm:grid-cols-2',
        'group',
      )}
    >
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imagesProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
        }}
      />
      <div className='flex flex-col gap-4 sm:justify-center'>
        <time className='text-slate-600 text-sm/tight' dateTime='2025-04-20'>
          20/04/2025 10:00
        </time>

        <PostSummary
          postHeading='h1'
          postLink={postLink}
          createdAt={post.createdAt}
          title={post.title}
          excerpt={post.excerpt}
        />
      </div>
    </section>
  );
}
//0044 0000 9629 9779 5201 06
