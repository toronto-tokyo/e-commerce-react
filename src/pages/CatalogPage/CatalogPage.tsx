import React from 'react';
import ProductsList from 'components/ProductsList';
import { useGetProductsQuery } from 'store/api/productsApi';
import ProductFilters from 'components/ProductFilters';
import { useSearchParams } from 'react-router-dom';

const CatalogPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const brands = searchParams.get('brands');
  const colors = searchParams.get('colors');
  const { data } = useGetProductsQuery({
    brands:
      brands &&
      brands
        .split(',')
        .map((item) => `"${item}"`)
        .join(','),
    colors:
      colors &&
      colors
        .split(',')
        .map((item) => `"${item}"`)
        .join(','),
  });
  return (
    <div className="grow max-w-7xl m-auto flex">
      <ProductFilters />
      <ProductsList items={data?.results} />
    </div>
  );
};

export default CatalogPage;
