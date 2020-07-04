import React, { ReactNode } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

export const renderWithRouter = (
  ui: ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => ({
  ...render(<Router history={history}>{ui}</Router>),
  history,
});
