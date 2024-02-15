import { useGetProductTypesQuery } from 'store/api/productsApi';

const useGetAttributes = () => {
  const { data } = useGetProductTypesQuery('');
  if (data) {
    const { attributes } = data.results[0];
    return attributes;
  }
};

export default useGetAttributes;
