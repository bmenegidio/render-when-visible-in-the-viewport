'use client';

import { Suspense } from 'react';

import { getProducts } from '@/api/products/getProducts';
import { ProductsList } from '@/app/_components/productsList';

export default function Home() {
  return (
    <main className="p-24">
      <Suspense fallback={<p>Loading...</p>}>
        <ProductsList handleGetProducts={getProducts} />
      </Suspense>
    </main>
  );
}
