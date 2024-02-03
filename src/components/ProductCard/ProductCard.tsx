import React from 'react';
import IProductCardProps from './ProductCard.interface';

const ProductCard: React.FC<IProductCardProps> = ({ imageUrl, name }) => {
  return (
    <article className="border bg-white rounded-lg">
      <div className="relative pb-[60%]">
        <img
          className="size-full absolute top-0 left-0 object-scale-down"
          src={imageUrl}
        />
      </div>
      <div className="p-5">
        <h2 className="text-center font-bold text-xl">{name}</h2>
      </div>
    </article>
  );
};

export default ProductCard;
