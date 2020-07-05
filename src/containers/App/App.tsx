import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Header } from '../../components/Header';
import { GlobalStyle } from './App.style';
import { Spinner } from '../../components/Spinner';

const Home = Loadable({
  loader: () => import('../../pages/Home'),
  loading: () => <Spinner />,
});

const ProductListing = Loadable({
  loader: () => import('../../pages/ProductListing'),
  loading: () => <Spinner />,
});

const NotFound = Loadable({
  loader: () => import('../../pages/NotFound'),
  loading: () => <Spinner />,
});

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductListing} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};
