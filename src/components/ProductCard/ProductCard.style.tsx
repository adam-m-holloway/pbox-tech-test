import styled from 'styled-components';

const ProductCard = styled.div`
  border: 1px solid #ddd;
  height: 100%;
  margin-bottom: 20px;
`;

const ProductCardHeader = styled.div`
  position: relative;
`;

const ProductCardBody = styled.div`
  padding: 0 30px;
`;

const ProductCardFooter = styled.div`
  padding: 30px;
`;

const ProductCardLabel = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  background: red;
  padding: 10px 10px 10px 30px;
  color: white;
  font-weight: bold;
`;

const ProductCardCtaLink = styled.a`
  border: 5px solid limegreen;
  display: block;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

export const Styled = {
  ProductCard,
  ProductCardHeader,
  ProductCardBody,
  ProductCardFooter,
  ProductCardLabel,
  ProductCardCtaLink,
};
