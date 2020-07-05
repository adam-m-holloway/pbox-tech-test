import React from 'react';
import { screen } from '@testing-library/react';
import { Header } from './Header';
import { renderWithRouter } from '../../utils/testUtils';

describe('Header', () => {
  it('should all links', () => {
    renderWithRouter(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Home').href).toBe('http://localhost/');

    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Products').href).toBe('http://localhost/products');
  });
});
