interface IPriceFilterProps {
  minPriceValue: string | null;
  maxPriceValue: string | null;
  handlePriceValuesChange: (value: IPriceValues) => void;
}

interface IPriceValues {
  minPrice: string;
  maxPrice: string;
}

export default IPriceFilterProps;
