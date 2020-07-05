import styled from 'styled-components';
import { config } from '../../config';

const { breakpoint } = config;

const ProductListingContent = styled.div`
  display: grid;
  grid-gap: 16px;

  ${breakpoint.sm_to_md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${breakpoint.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Styled = { ProductListingContent };
