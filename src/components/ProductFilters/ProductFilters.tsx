import Collapsible from 'components/Collapsible';
import PriceFilter from 'components/PriceFilter';
import useGetAttributes from 'hook/useGetAttributes';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import isPriceFilterValid from 'utils/isPriceFilterValid';

const ProductFilters: React.FC = () => {
  const data = useGetAttributes();
  const brands = data?.find((attribute) => attribute.name === 'designer');
  const colors = data?.find((attribute) => attribute.name === 'color');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchBrands = searchParams.get('brands')?.split(',') || [];
  const searchColors = searchParams.get('colors')?.split(',') || [];
  const searchMinPrice = searchParams.get('min-price') || '';
  const searchMaxPrice = searchParams.get('max-price') || '';

  const handleMultipleFilterClick = ({
    filterTitle,
    filterValue,
    currentFilterValues,
  }: {
    filterTitle: string;
    filterValue: string;
    currentFilterValues: string[];
  }) => {
    if (currentFilterValues.includes(filterValue)) {
      currentFilterValues = currentFilterValues.filter(
        (item) => item !== filterValue
      );
    } else {
      currentFilterValues.push(filterValue);
    }
    currentFilterValues.length
      ? searchParams.set(filterTitle, currentFilterValues.join(','))
      : searchParams.delete(filterTitle);

    setSearchParams(searchParams);
  };

  const handleBrandFilterClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value;
    handleMultipleFilterClick({
      filterTitle: 'brands',
      filterValue,
      currentFilterValues: searchBrands,
    });
  };

  const handleColorsFilterClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value;
    handleMultipleFilterClick({
      filterTitle: 'colors',
      filterValue,
      currentFilterValues: searchColors,
    });
  };

  const handleSingleFilterChange = ({
    title,
    value,
  }: {
    title: string;
    value: string;
  }) => {
    if (value) {
      searchParams.set(title, value);
    } else {
      searchParams.delete(title);
    }
    setSearchParams(searchParams);
  };

  const handlePriceChange = useDebouncedCallback(
    ({ minPrice, maxPrice }: { minPrice: string; maxPrice: string }) => {
      if (isPriceFilterValid({ minPrice, maxPrice })) {
        handleSingleFilterChange({
          title: 'min-price',
          value: minPrice,
        });
        handleSingleFilterChange({
          title: 'max-price',
          value: maxPrice,
        });
      }
    },
    1000
  );

  const handleResetFiltersClick = () => {
    searchParams.delete('brands');
    searchParams.delete('colors');
    searchParams.delete('min-price');
    searchParams.delete('max-price');
    setSearchParams(searchParams);
  };

  return (
    <div className="w-[250px] bg-white flex flex-col">
      <Collapsible label="Brand" maxHeight={150}>
        {brands?.type.name === 'enum' &&
          brands?.type.values.map((brand) => (
            <div key={brand.key}>
              <input
                type="checkbox"
                name="brand"
                value={brand.key}
                id={brand.key}
                checked={searchBrands?.includes(brand.key)}
                onChange={handleBrandFilterClick}
              />
              <label htmlFor={brand.key} className="select-none">
                {brand.label}
              </label>
            </div>
          ))}
      </Collapsible>
      <Collapsible label="Colors" maxHeight={150}>
        {colors?.type.name === 'lenum' &&
          colors?.type.values.map((color) => (
            <div key={color.key}>
              <input
                type="checkbox"
                name="color"
                value={color.key}
                id={color.key}
                checked={searchColors?.includes(color.key)}
                onChange={handleColorsFilterClick}
              />
              <label htmlFor={color.key} className="select-none">
                {color.label.en}
              </label>
            </div>
          ))}
      </Collapsible>
      <PriceFilter
        minPriceValue={searchMinPrice}
        maxPriceValue={searchMaxPrice}
        handlePriceValuesChange={handlePriceChange}
        key={`${searchMinPrice}${searchMaxPrice}`}
      />
      <button
        className="
      bg-red-500 
        text-lg 
        text-white 
        tracking-wider 
        rounded-md 
        px-5
        py-2 
        self-center"
        onClick={handleResetFiltersClick}
      >
        Reset
      </button>
    </div>
  );
};

export default ProductFilters;
