import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home Page', () => {
  it('should render the page', () => {
    render(<Home />);

    const text = screen.getByText('Home Page');
    expect(text).toBeInTheDocument();
  });
});
