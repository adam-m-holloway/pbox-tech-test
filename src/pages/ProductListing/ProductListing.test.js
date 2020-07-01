import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import ProductListing from './ProductListing';
import { mockProducts } from '../../__mocks__/mockProducts';

jest.mock('axios');

describe('Product Listing', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should show loading state when first loading the page', async () => {
    axios.get.mockResolvedValue({ data: mockProducts });
    render(<ProductListing />);

    expect(axios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const loading = screen.getByText('Loading...');
      expect(loading).toBeInTheDocument();
    });
  });

  it('should return product data', async () => {
    axios.get.mockResolvedValue({ data: mockProducts });
    render(<ProductListing />);

    expect(axios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const productTitle = screen.getByText('product 1');
      expect(productTitle).toBeInTheDocument();
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
