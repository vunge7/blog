import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log('\n', 'D findAllPublic', '\n');
    const posts = drizzleDb.query.posts.findMany({
      where: (posts, { eq }) => eq(postsTable.published, true),
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log('\n', 'D  findBySlugPublic', '\n');
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(postsTable.slug, slug), eq(postsTable.published, true)),
    });

    if (!post) throw new Error(`Post não encontrado para slug: ${slug}`);
    return post;
  }
  async findAll(): Promise<PostModel[]> {
    console.log('\n', 'findAll', '\n');
    const posts = drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    console.log('\n', 'findById', '\n');
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(postsTable.id, id), eq(postsTable.published, true)),
    });

    if (!post) throw new Error(`Post não encontrado para ID: ${id}`);
    return post;
  }
}

/*
(async () => {

  const repo = new DrizzlePostRepository();
  const post = await repo.findBySlugPublic('afa086e4-53e4-492d-acf2-7c2966d83fcd');
  console.log(post);


  posts.forEach(post => {
    console.log(post.id, post.published);
  });

})();

*/
