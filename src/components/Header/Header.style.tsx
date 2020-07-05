import styled from 'styled-components';
import { config } from '../../config';

const {
  styles: { spacing, colour },
} = config;

const Header = styled.header`
  color: white;
  border-bottom: 2px solid ${colour.border};
  text-align: center;
  background-color: ${colour.teal};
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.img`
  padding: ${spacing};
  background-color: ${colour.teal};
`;

const HeaderNav = styled.nav`
  margin-left: auto;

  ul {
    display: flex;
    justify-content: space-evenly;
  }

  li {
    display: block;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    display: block;
    font-weight: bold;
    padding: 30px;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Styled = {
  Header,
  HeaderLogo,
  HeaderNav,
};
