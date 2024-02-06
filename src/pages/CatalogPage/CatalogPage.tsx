import React from 'react';
import ProductsList from 'components/ProductsList';
import { useGetProductsQuery } from 'store/api/productsApi';
import ProductFilters from 'components/ProductFilters';
import { useSearchParams } from 'react-router-dom';
import SortPanel from 'components/SortPanel';
import { DefaultSortProductValue, SortProductsValues } from './data';

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const brands = searchParams.get('brands');
  const colors = searchParams.get('colors');
  const minPrice = searchParams.get('min-price');
  const maxPrice = searchParams.get('max-price');
  const sort = searchParams.get('sort') || DefaultSortProductValue.value;
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
    minPrice,
    maxPrice,
    sort,
  });

  const sortSelectedValue =
    SortProductsValues.find((item) => item.value === sort)?.label || '';

  const handleSortProductsChange = (value: string) => {
    searchParams.set('sort', value);
    setSearchParams(searchParams);
  };

  return (
    <div className="grow max-w-7xl m-auto flex">
      <ProductFilters />
      <div>
        <div className="flex">
          <div className="grow"></div>
          <SortPanel
            selectedValue={sortSelectedValue}
            values={SortProductsValues}
            handleChange={handleSortProductsChange}
          />
        </div>
        <ProductsList items={data?.results} />
      </div>
    </div>
  );
};

export default CatalogPage;
