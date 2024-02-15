import React from 'react';
import IProductListProps from './ProductList.interface';
import ProductCard from 'components/ProductCard';

const ProductsList: React.FC<IProductListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-product-cards gap-5">
      {items &&
        items.map((productData) => (
          <ProductCard key={productData.id} product={productData} />
        ))}
    </div>
  );
};

export default ProductsList;
