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

  const handleBrandFilterClick = (filterValue: string) => {
    handleMultipleFilterClick({
      filterTitle: 'brands',
      filterValue,
      currentFilterValues: searchBrands,
    });
  };

  const handleColorsFilterClick = (filterValue: string) => {
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

  return (
    <div className="w-[250px] bg-white">
      <Collapsible label="Brand" maxHeight={150}>
        <div
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            const value = target.value;
            handleBrandFilterClick(value);
          }}
        >
          {brands?.type.name === 'enum' &&
            brands?.type.values.map((brand) => (
              <div key={brand.key}>
                <input
                  type="checkbox"
                  name="brand"
                  value={brand.key}
                  id={brand.key}
                  defaultChecked={searchBrands?.includes(brand.key)}
                />
                <label htmlFor={brand.key} className="select-none">
                  {brand.label}
                </label>
              </div>
            ))}
        </div>
      </Collapsible>
      <Collapsible label="Colors" maxHeight={150}>
        <div
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            const value = target.value;
            handleColorsFilterClick(value);
          }}
        >
          {colors?.type.name === 'lenum' &&
            colors?.type.values.map((color) => (
              <div key={color.key}>
                <input
                  type="checkbox"
                  name="color"
                  value={color.key}
                  id={color.key}
                  defaultChecked={searchColors?.includes(color.key)}
                />
                <label htmlFor={color.key} className="select-none">
                  {color.label.en}
                </label>
              </div>
            ))}
        </div>
      </Collapsible>
      <PriceFilter
        minPriceValue={searchMinPrice}
        maxPriceValue={searchMaxPrice}
        handlePriceValuesChange={handlePriceChange}
      />
    </div>
  );
};

export default ProductFilters;
