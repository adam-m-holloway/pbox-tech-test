import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ProductCard } from '../../components/ProductCard/ProductCard';
import './ProductListing.scss';

const ProductListing = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

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
        <div className="product-listing-content">
          {products.map((product, index) => (
            <ProductCard product={product} key={`${index}-${product.name}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
