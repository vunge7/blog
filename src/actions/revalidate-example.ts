'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get('path') as string;
  console.log('Estou numa server action');
  console.log('Path:', path);
  //revalidatePath(`/${path}`);
  revalidateTag('posts');
  revalidateTag('post-rotina-matinal-de-pessoas-altamente-eficazes');
}
