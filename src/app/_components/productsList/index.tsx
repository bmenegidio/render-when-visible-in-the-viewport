'use client';

import { ProductsListProps } from '@/app/_components/productsList/types/listProps';
import { use } from 'react';

import { ShowWhenVisibleProvider } from '@/components/renderProps/showWhenVisible';
import { parseProductFromApi } from '@/app/_components/productsList/util/parseProduct';
import { ProductInfo } from '@/app/_components/productsList/productInfo';

export function ProductsList({ handleGetProducts }: ProductsListProps) {
  const productsFromApi = use(handleGetProducts());
  const parsedProducts = parseProductFromApi({ productsFromApi });

  return (
    <div className={'flex flex-col gap-5'}>
      {parsedProducts.map((categoryObject) => (
        <ShowWhenVisibleProvider
          key={categoryObject.category.name}
          render={() => (
            <section>
              <p className={'text-lg'}>{categoryObject.category.name.toUpperCase()}</p>
              <hr className={'mb-3 border-b-2 border-b-amber-50'} />

              <ul className={'flex list-decimal flex-col gap-3.5'}>
                {categoryObject.category.products.map((product) => (
                  <li key={product.id}>
                    <div className={'flex flex-col gap-2.5'}>
                      <ProductInfo label={'Name'} value={product.title} />
                      <ProductInfo label={'Description'} value={product.description} />
                      <ProductInfo label={'Price'} value={`$${product.price}`} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        />
      ))}
    </div>
  );
}
