import React from 'react';
import IProductCardProps from './ProductCard.interface';
import Divider from 'components/Divider';
import useProductCard from './ProductCard.hook';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  console.log(product);
  const {
    productId,
    imgSrc,
    localeName,
    priceCurrencyCode,
    discountCurrencyCode,
    priceInEuro,
    discountPriceInEuro,
  } = useProductCard({ product });

  return (
    <Link to={`/product/${productId}`}>
      <article
        className="
        size-full
        border 
        bg-white 
        rounded-lg 
        flex 
        flex-col
        cursor-pointer
        hover:shadow-lg
        hover:scale-105
        transition
      "
      >
        <div className="relative pb-[60%]">
          <img
            className="size-full absolute top-0 left-0 object-scale-down"
            src={imgSrc}
          />
        </div>
        <div className="grow p-5 flex flex-col gap-3">
          <h2 className="grow text-center font-bold text-xl">{localeName}</h2>
          <Divider />
          <div className="flex gap-5 items-center justify-center font-extrabold text-lg">
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
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
