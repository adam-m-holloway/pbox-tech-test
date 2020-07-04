import React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

import Home from '../../pages/Home';
import ProductListing from '../../pages/ProductListing';
import NotFound from '../../pages/NotFound';

const App = () => (
  <div>
    <Link to="/products">Product Listing</Link>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={ProductListing} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => ({
  ...render(<Router history={history}>{ui}</Router>),
  history,
});

test('should fully render the app', () => {
  renderWithRouter(<App />);

  const pageTitle = screen.getByText('Home Page');
  expect(pageTitle).toBeInTheDocument();
});

test('Should landing on a bad page', () => {
  renderWithRouter(<App />, {
    route: '/something-that-does-not-match',
  });

  const content = screen.getByText('Page Not Found!');
  expect(content).toBeInTheDocument();
});
