import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../../components/Header';
import { GlobalStyle } from './App.style';

const Home = lazy(() => import('../../pages/Home'));
const ProductListing = lazy(() => import('../../pages/ProductListing'));
const NotFound = lazy(() => import('../../pages/NotFound'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={ProductListing} />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
