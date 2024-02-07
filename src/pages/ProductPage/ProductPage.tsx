import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  return <div>ProductPage {id}</div>;
};

export default ProductPage;
