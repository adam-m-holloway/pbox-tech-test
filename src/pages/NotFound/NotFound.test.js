import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';

describe('Not Found Page', () => {
  it('should render the page', () => {
    render(<NotFound />);

    const text = screen.getByText('Page Not Found!');
    expect(text).toBeInTheDocument();
  });
});
