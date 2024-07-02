import { ApiProduct } from '@/api/products/types/product';

export async function getProducts(): Promise<ApiProduct[]> {
  const revalidateInMinutes = 1;
  const request = await fetch('https://dummyjson.com/products', {
    method: 'GET',
    next: {
      tags: ['products'],
      revalidate: revalidateInMinutes * 60,
    },
  });
  const json = await request.json();
  return json?.products || [];
}
