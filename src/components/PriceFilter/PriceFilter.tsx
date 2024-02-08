import React, { useEffect, useState } from 'react';
import IPriceFilterProps from './PriceFilter.interface';
import CollapsibleWithLabel from 'components/CollapsibleWithLabel';
import isPriceFilterValid from 'utils/isPriceFilterValid';

const PriceFilter: React.FC<IPriceFilterProps> = ({
  minPriceValue,
  maxPriceValue,
  handlePriceValuesChange,
}) => {
  const [minPrice, setMinPrice] = useState(minPriceValue || '');
  const [maxPrice, setMaxPrice] = useState(maxPriceValue || '');

  useEffect(() => {
    handlePriceValuesChange({
      minPrice: minPrice,
      maxPrice: maxPrice,
    });
  }, [minPrice, maxPrice, handlePriceValuesChange]);

  return (
    <CollapsibleWithLabel label="Price" maxHeight={150} colorMode="blue">
      <div className="flex justify-around items-center">
        <input
          className="outline-none w-[45%] border p-2"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="from"
        />
        <span>-</span>
        <input
          className="outline-none w-[45%] border p-2"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="to"
        />
      </div>
      <div>
        {!isPriceFilterValid({ minPrice, maxPrice }) && (
          <p className="text-red-500">
            Min price cannot be greater then max price
          </p>
        )}
      </div>
    </CollapsibleWithLabel>
  );
};

export default PriceFilter;
