import React, { FC } from 'react';
import './ProductCard.scss';
import { formatPrice } from '../../utils';

export interface ProductCardProps {
  product: {
    image: {
      path: string;
      alt: string;
    };
    productLabel?: string;
    title: string;
    description: string;
    priceLabel: string;
    price: number;
    ctaLink: string;
    cta: string;
  };
}

export const ProductCard: FC<ProductCardProps> = ({
  product: {
    image,
    productLabel,
    title,
    description,
    priceLabel,
    price,
    ctaLink,
    cta,
  },
}) => (
  <div className="product-card">
    <div className="product-card-header">
      <img src={image.path} alt={image.alt} />
      {productLabel && (
        <span className="product-card-label">{productLabel}</span>
      )}
    </div>
    <div className="product-card-body">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="product-card-footer">
      <p>
        {priceLabel}
        <span className="product-card-price">{formatPrice(price)}</span>
      </p>
      <a className="product-card-cta-link" href={ctaLink}>
        {cta}
      </a>
    </div>
  </div>
);
