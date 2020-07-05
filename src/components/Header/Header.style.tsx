import styled from 'styled-components';

const Header = styled.header`
  color: white;
  border-bottom: 2px solid #d3d3d3;
  text-align: center;
  background-color: #007377;
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.img`
  padding: 20px;
  background-color: #007377;
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
