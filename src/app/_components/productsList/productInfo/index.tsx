import { ProductProp } from '@/app/_components/productsList/productInfo/types/productProp';

export function ProductInfo({ label, value }: ProductProp) {
  return (
    <div className={'flex flex-col gap-1'}>
      <p className={'font-bold'}>{label}:</p>
      <p className={'text-base'}>{value}</p>
    </div>
  );
}
