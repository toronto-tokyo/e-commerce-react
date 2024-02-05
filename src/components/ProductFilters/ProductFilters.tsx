import Collapsible from 'components/Collapsible';
import useGetAttributes from 'hook/useGetAttributes';
import { useAppDispatch, useAppSelector } from 'hook/useRedux';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { setFilters, toggleBrand, toggleColor } from 'store/slice/filterSlice';

const ProductFilters: React.FC = () => {
  const data = useGetAttributes();
  const dispatch = useAppDispatch();
  const brands = data?.find((attribute) => attribute.name === 'designer');
  const colors = data?.find((attribute) => attribute.name === 'color');
  const { brands: filterBrands, colors: filterColors } = useAppSelector(
    (store) => store.filterSlice
  );
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const brands = searchParams.get('brands');
    const colors = searchParams.get('colors');
    const filters = {
      brands: brands?.split(',') || [],
      colors: colors?.split(',') || [],
    };
    dispatch(setFilters(filters));
  }, [searchParams, dispatch]);

  return (
    <div className="w-[250px] bg-white">
      <Collapsible label="Brand" maxHeight={150}>
        {brands?.type.name === 'enum' &&
          brands?.type.values.map((brand) => (
            <div key={brand.key}>
              <input
                type="checkbox"
                name="brand"
                value={brand.key}
                id={brand.key}
                checked={filterBrands.includes(brand.key)}
                onChange={(e) => dispatch(toggleBrand(e.target.value))}
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
                checked={filterColors.includes(color.key)}
                onChange={(e) => dispatch(toggleColor(e.target.value))}
              />
              <label htmlFor={color.key} className="select-none">
                {color.label.en}
              </label>
            </div>
          ))}
      </Collapsible>
      <button
        className="p-5 bg-blue-500"
        onClick={() => {
          filterBrands.length
            ? searchParams.set('brands', filterBrands.join(','))
            : searchParams.delete('brands');
          filterColors.length
            ? searchParams.set('colors', filterColors.join(','))
            : searchParams.delete('colors');
          setSearchParams(searchParams);
        }}
      >
        apply
      </button>
    </div>
  );
};

export default ProductFilters;
