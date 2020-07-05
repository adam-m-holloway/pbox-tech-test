import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ProductListing } from './ProductListing';
import { mockProducts } from '../../__mocks__/mockProducts';
import { formatPrice } from '../../utils';

jest.mock('axios');

describe('Product Listing', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should show loading spinner when first loading the page', async () => {
    axios.get.mockResolvedValue({ data: mockProducts });
    render(<ProductListing />);

    expect(axios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const loading = screen.getByTestId('spinner');
      expect(loading).toBeInTheDocument();
    });
  });

  it('should return product data', async () => {
    axios.get.mockResolvedValue({ data: mockProducts });
    render(<ProductListing />);

    expect(axios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      mockProducts.forEach(
        ({
          productLabel,
          title,
          description,
          priceLabel,
          price,
          cta,
          ctaLink,
          image,
        }) => {
          expect(screen.getByAltText(image.alt)).toBeInTheDocument();
          expect(screen.getByAltText(image.alt).src).toBe(image.path);
          expect(screen.getByText(productLabel)).toBeInTheDocument();
          expect(screen.getByText(title)).toBeInTheDocument();
          expect(screen.getByText(description)).toBeInTheDocument();
          expect(screen.getByText(priceLabel)).toBeInTheDocument();
          expect(screen.getByText(formatPrice(price))).toBeInTheDocument();
          expect(screen.getByText(cta)).toBeInTheDocument();
          expect(screen.getByText(cta).href).toBe(ctaLink);
        }
      );
    });
  });

  it('should return an error message if no/bad data', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));
    render(<ProductListing />);

    expect(axios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const errorMessage = screen.getByText('Error: Network Error');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
