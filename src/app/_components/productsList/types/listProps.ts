import { ApiProduct } from '@/api/products/types/product';

export type ProductsListProps = {
  handleGetProducts: () => Promise<ApiProduct[]>;
};
