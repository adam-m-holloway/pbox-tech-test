import React, { FC } from 'react';
import { formatPrice } from '../../utils';
import { Styled } from './ProductCard.style';

export interface ProductCardProps {
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
}

export const ProductCard: FC<ProductCardProps> = ({
  image,
  productLabel,
  title,
  description,
  priceLabel,
  price,
  ctaLink,
  cta,
}) => (
  <Styled.ProductCard>
    <Styled.ProductCardHeader>
      <img src={image.path} alt={image.alt} />
      {productLabel && (
        <Styled.ProductCardLabel>{productLabel}</Styled.ProductCardLabel>
      )}
    </Styled.ProductCardHeader>
    <Styled.ProductCardBody>
      <h3>{title}</h3>
      <p>{description}</p>
    </Styled.ProductCardBody>
    <Styled.ProductCardFooter>
      <p>
        {priceLabel}
        <Styled.ProductCardPrice>{formatPrice(price)}</Styled.ProductCardPrice>
      </p>
      <Styled.ProductCardCtaLink href={ctaLink}>
        {cta}
      </Styled.ProductCardCtaLink>
    </Styled.ProductCardFooter>
  </Styled.ProductCard>
);
