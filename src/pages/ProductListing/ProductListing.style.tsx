import styled from 'styled-components';

const ProductListingContent = styled.div`
  display: grid;
  grid-gap: 16px;

  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Styled = { ProductListingContent };
