import { IProduct } from 'types/api';
import transformCentToEuro from 'utils/transformCentToEuro';

interface IUseProductPageContentProps {
  product: IProduct;
}

const useProductPageContent = ({ product }: IUseProductPageContentProps) => {
  console.log(product);
  const { current } = product?.masterData;
  const { name, masterVariant, metaDescription } = current;

  const mainImgSrc = masterVariant.images[0].url;
  const localeName = name.en;
  const priceValue = masterVariant.prices?.[0].value.centAmount;
  const priceCurrencyCode = masterVariant.prices?.[0].value.currencyCode;
  const discountValue = masterVariant.prices?.[0].discounted?.value.centAmount;
  const discountCurrencyCode =
    product?.masterData.current.masterVariant.prices?.[0].discounted?.value
      .currencyCode;
  const localeMetaDescription = metaDescription?.en || '';
  const gender =
    masterVariant?.attributes?.find((attribute) => attribute.name === 'gender')
      ?.value.key || '';
  const color =
    masterVariant?.attributes?.find((attribute) => attribute.name === 'color')
      ?.value.key || '';

  if (!priceValue) {
    throw new Error('');
  }

  const priceInEuro = transformCentToEuro(priceValue);
  const discountPriceInEuro =
    discountValue && transformCentToEuro(discountValue);

  return {
    mainImgSrc,
    localeName,
    discountPriceInEuro,
    priceInEuro,
    priceCurrencyCode,
    discountCurrencyCode,
    localeMetaDescription,
    gender,
    color,
  };
};

export default useProductPageContent;
