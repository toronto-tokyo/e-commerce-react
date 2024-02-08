import React from 'react';
import IProductPageContentProps from './ProductPageContent.interface';
import useProductPageContent from './ProductPageContent.hook';
import CollapsibleFilter from 'components/CollapsibleWithLabel';

const ProductPageContent: React.FC<IProductPageContentProps> = ({
  product,
}) => {
  console.log(product);
  const {
    localeName,
    mainImgSrc,
    priceInEuro,
    priceCurrencyCode,
    discountPriceInEuro,
    discountCurrencyCode,
    localeMetaDescription,
    gender,
    color,
  } = useProductPageContent({ product });

  return (
    <section className="grow flex gap-10">
      <div className="relative self-start basis-2/5 pb-[30%] bg-white rounded">
        <img
          className="absolute top-0 left-0 size-full object-contain"
          src={mainImgSrc}
        />
      </div>
      <div className="relative basis-3/5">
        <h2 className="text-2xl font-bold mb-2">{localeName}</h2>
        <div className="flex gap-5 font-extrabold text-lg text-indigo-900 mb-7">
          <div className="flex gap-1 font-bold text-xl">
            <span>{discountPriceInEuro || priceInEuro}</span>
            <span>{discountCurrencyCode || priceCurrencyCode}</span>
          </div>
          {discountPriceInEuro && (
            <div className="flex gap-1 font-bold text-lg text-gray-500 line-through">
              <span>{priceInEuro}</span>
              <span>{priceCurrencyCode}</span>
            </div>
          )}
        </div>
        <div className="bg-gray-200 rounded">
          <CollapsibleFilter label="Description" colorMode="gray">
            <p className="px-6 py-4">{localeMetaDescription}</p>
          </CollapsibleFilter>
          <CollapsibleFilter label="Attributes" colorMode="gray">
            <ul className="px-6 py-2">
              <li className="px-6 py-2">
                <span className="font-bold">Gender: </span>
                <span>{gender}</span>
              </li>
              <li className="px-6 py-2">
                <span className="font-bold">Color: </span>
                <span>{color}</span>
              </li>
            </ul>
          </CollapsibleFilter>
        </div>
      </div>
    </section>
  );
};

export default ProductPageContent;
