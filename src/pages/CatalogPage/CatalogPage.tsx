import React from 'react';
import ProductsList from 'components/ProductsList';
import { useGetProductsQuery } from 'store/api/productsApi';

const CatalogPage: React.FC = () => {
  const { data } = useGetProductsQuery('');
  return (
    <div className="grow max-w-7xl m-auto">
      <ProductsList items={data?.results} />
    </div>
  );
};

export default CatalogPage;
