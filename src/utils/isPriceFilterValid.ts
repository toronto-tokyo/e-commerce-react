interface IIsPriceFilterValidProps {
  minPrice: string;
  maxPrice: string;
}

const isPriceFilterValid = ({
  minPrice,
  maxPrice,
}: IIsPriceFilterValidProps) => {
  return minPrice <= maxPrice;
};

export default isPriceFilterValid;
