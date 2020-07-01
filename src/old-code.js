const getProducts = async () => {
  const response = await fetch('/api/products');
  return response.json();
};

export const ProductListing = () => {
  const { isLoading, isError, data: products, error } = useQuery(
    'products',
    getProducts
  );
