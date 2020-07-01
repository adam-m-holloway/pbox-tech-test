import React from 'react';
// import { withRouter } from 'react-router';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

import ProductListing from './pages/ProductListing/ProductListing';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Link to="/">Product Listing</Link>
      <Switch>
        <Route exact path="/" component={ProductListing} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

test('should fully render the app', () => {
  renderWithRouter(<App />);

  const pageTitle = screen.getByText('Product Listing');
  expect(pageTitle).toBeInTheDocument();
});

test('Should landing on a bad page', () => {
  const { container } = renderWithRouter(<App />, {
    route: '/something-that-does-not-match',
  });
  expect(container.innerHTML).toMatch('Page Not Found!');
});
