import React from 'react';
import IProductListProps from './ProductList.interface';
import ProductCard from 'components/ProductCard';

const ProductsList: React.FC<IProductListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-product-cards gap-7 p-7">
      {items &&
        items.map((productData) => (
          <ProductCard
            key={productData.key}
            imageUrl={productData.masterVariant.images[0].url}
            name={productData.name.en}
          />
        ))}
    </div>
  );
};

export default ProductsList;
