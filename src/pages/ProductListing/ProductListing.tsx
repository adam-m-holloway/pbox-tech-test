import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ProductCard, ProductCardProps } from '../../components/ProductCard';
import { Styled } from './ProductListing.style';

export const ProductListing = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        setLoading(false);
        setProducts(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-listing">
      <h1>Listing Page</h1>

      {loading && <span>Loading...</span>}

      {error && <span>Error: {error.message}</span>}

      {products && (
        <Styled.ProductListingContent>
          {products.map((product: ProductCardProps, index: number) => (
            <ProductCard {...product} key={`${index}-${product.title}`} />
          ))}
        </Styled.ProductListingContent>
      )}
    </div>
  );
};
