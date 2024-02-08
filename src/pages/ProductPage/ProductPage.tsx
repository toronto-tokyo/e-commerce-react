import React from 'react';
import ProductPageContent from 'components/ProductPageContent';
import useProductPage from './ProductPage.hook';

const ProductPage: React.FC = () => {
  const { data, error } = useProductPage();

  if (error) {
    if ('status' in error) {
      const errMsg =
        'error' in error ? error.error : JSON.stringify(error.data);
      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    } else {
      return <div>{error.message}</div>;
    }
  }

  return (
    <div className="grow max-w-7xl mx-auto px-5 pt-20 pb-10">
      {data && <ProductPageContent product={data} />}
    </div>
  );
};

export default ProductPage;
