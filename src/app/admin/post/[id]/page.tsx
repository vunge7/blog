export const dynamic = 'force-dynamic';

type AdminPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostIdPage({ params }: AdminPostPageProps) {
  const { id } = await params;
  // Post logic here
  return <div className='py-16 text-6xl'>Admin ID: {id} </div>;
}
