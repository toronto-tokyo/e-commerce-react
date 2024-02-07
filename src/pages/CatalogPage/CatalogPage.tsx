import React from 'react';
import ProductsList from 'components/ProductsList';
import { useGetProductsQuery } from 'store/api/productsApi';
import ProductFilters from 'components/ProductFilters';
import { useSearchParams } from 'react-router-dom';
import SortPanel from 'components/SortPanel';
import { DefaultSortProductValue, SortProductsValues } from './data';
import SearchPanel from 'components/SearchPanel';

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const brands = searchParams.get('brands');
  const colors = searchParams.get('colors');
  const minPrice = searchParams.get('min-price');
  const maxPrice = searchParams.get('max-price');
  const sort = searchParams.get('sort') || DefaultSortProductValue.value;
  const searchQuery = searchParams.get('q');
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
    searchQuery,
  });

  const sortSelectedValue =
    SortProductsValues.find((item) => item.value === sort)?.label || '';

  const handleSortProductsChange = (value: string) => {
    searchParams.set('sort', value);
    setSearchParams(searchParams);
  };

  const handleSearch = (searchValue: string) => {
    searchValue ? searchParams.set('q', searchValue) : searchParams.delete('q');
    setSearchParams(searchParams);
  };

  const searchValue = searchQuery || '';

  return (
    <div className="grow max-w-7xl m-auto flex">
      <ProductFilters />
      <div>
        <SearchPanel searchValue={searchValue} handleSearch={handleSearch} />
        <SortPanel
          selectedValue={sortSelectedValue}
          values={SortProductsValues}
          handleChange={handleSortProductsChange}
        />
        <ProductsList items={data?.results} />
      </div>
    </div>
  );
};

export default CatalogPage;
