import { ApiProduct } from '@/api/products/types/product';
import { Product, Products } from '@/app/_components/productsList/types/products';

export function parseProductFromApi({ productsFromApi }: { productsFromApi: ApiProduct[] }): Products {
  return productsFromApi.reduce((accumulator: Products, currentValue) => {
    const categoryIndex = accumulator.findIndex((accItem) => accItem.category.name === currentValue.category);
    const categoryExists = categoryIndex !== -1;
    const parsedProduct: Product = {
      id: currentValue.id,
      title: currentValue.title,
      description: currentValue.description,
      price: currentValue.price,
    };

    if (!categoryExists) {
      accumulator.push({
        category: {
          name: currentValue.category,
          products: [parsedProduct],
        },
      });
    } else {
      accumulator[categoryIndex].category.products.push(parsedProduct);
    }

    return accumulator;
  }, []);
}
