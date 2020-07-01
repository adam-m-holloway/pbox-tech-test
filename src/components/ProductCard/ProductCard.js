import React from 'react';
import './ProductCard.scss';

const formatPrice = (number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(number);
};

export const ProductCard = ({
  product: {
    image,
    productLabel,
    title,
    description,
    priceLabel,
    // currency,
    price,
    ctaLink,
    cta,
  },
}) => (
  <div className="product-card">
    <div className="product-card-header">
      <img src={image.path} alt={image.alt} />

      {/* <img
        sizes="(max-width: 596px) 100vw, 596px"
        srcset="
        product_t2kema_c_scale,w_200.jpg 200w,
        product_t2kema_c_scale,w_596.jpg 596w"
        src="product_t2kema_c_scale,w_596.jpg"
        alt=""
      /> */}

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
        {/* {currency} */}
        <span className="product-card-price">{formatPrice(price)}</span>
      </p>
      <a className="product-card-cta-link" href={ctaLink}>
        {cta}
      </a>
    </div>
  </div>
);
