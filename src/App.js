import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';
// import { ProductListing } from './pages/ProductListing/ProductListing';
// import { NotFound } from './pages/NotFound';

// const LoadableProductListing = Loadable({
//   loader: () => import('./pages/ProductListing'), // ensure ProductListing has default export
//   loading: Loader,
//   delay: 500,
// });

// const LoadableNotFoundPage = Loadable({
//   loader: () => import('./pages/NotFoundPage'),
//   loading: Loader,
// });

const ProductListing = lazy(() =>
  import('./pages/ProductListing/ProductListing')
);

const NotFound = lazy(() => import('./pages/NotFound'));

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
