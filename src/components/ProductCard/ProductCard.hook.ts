import { IProduct } from 'types/api';
import transformCentToEuro from 'utils/transformCentToEuro';

interface IUseProductProps {
  product: IProduct;
}

const useProductCard = ({ product }: IUseProductProps) => {
  const { name, masterVariant, id } = product;
  const { images, prices } = masterVariant;
  if (!images) {
    throw new Error(`There's no images in product ${id}`);
  }
  if (!prices) {
    throw new Error(`There's no prices in product ${id}`);
  }

  const imgSrc = images[0].url;
  const localeName = name.en;
  const priceValue = prices[0].value.centAmount;
  const priceCurrencyCode = prices[0].value.currencyCode;
  const discountValue = prices[0].discounted?.value.centAmount || null;
  const discountCurrencyCode = prices[0].discounted?.value.currencyCode || null;
  const priceInEuro = transformCentToEuro(priceValue);
  const discountPriceInEuro =
    discountValue && transformCentToEuro(discountValue);

  return {
    imgSrc,
    localeName,
    priceValue,
    priceCurrencyCode,
    discountValue,
    discountCurrencyCode,
    priceInEuro,
    discountPriceInEuro,
  };
};

export default useProductCard;
