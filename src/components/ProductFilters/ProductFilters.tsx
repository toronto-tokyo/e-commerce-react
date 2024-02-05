import Collapsible from 'components/Collapsible';
import useGetAttributes from 'hook/useGetAttributes';
import { useAppDispatch, useAppSelector } from 'hook/useRedux';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { setFilters, toggleBrand } from 'store/slice/filterSlice';

const ProductFilters: React.FC = () => {
  const data = useGetAttributes();
  const dispatch = useAppDispatch();
  const brands = data?.find((attribute) => attribute.name === 'designer');
  const { brands: filterBrands } = useAppSelector((store) => store.filterSlice);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const brands = searchParams.get('brands');
    const filters = {
      brands: brands?.split(',') || [],
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
      <button
        className="p-5 bg-blue-500"
        onClick={() => {
          filterBrands.length
            ? searchParams.set('brands', filterBrands.join(','))
            : searchParams.delete('brands');
          setSearchParams(searchParams);
        }}
      >
        apply
      </button>
    </div>
  );
};

export default ProductFilters;
