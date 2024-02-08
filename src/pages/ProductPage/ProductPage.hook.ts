import { useParams } from 'react-router';
import { useGetProductQuery } from 'store/api/productsApi';

const useProductPage = () => {
  const { id } = useParams();
  const { data, error } = useGetProductQuery({ id });

  return {
    data,
    error,
  };
};

export default useProductPage;
