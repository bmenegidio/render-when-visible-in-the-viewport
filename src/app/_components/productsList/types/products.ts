export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

type Category = {
  name: string;
  products: Product[];
};

export type Products = {
  category: Category;
}[];
