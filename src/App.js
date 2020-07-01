import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const ProductListing = lazy(() =>
  import('./pages/ProductListing/ProductListing')
);

const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={ProductListing} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
