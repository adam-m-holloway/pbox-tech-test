import React from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './Header.style';
import pboxLogo from '../../assets/images/pbox-logo.svg';

export const Header = () => (
  <Styled.Header>
    <Styled.HeaderLogo src={pboxLogo} alt="pbox logo" width="209" height="37" />
    <Styled.HeaderNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </Styled.HeaderNav>
  </Styled.Header>
);
