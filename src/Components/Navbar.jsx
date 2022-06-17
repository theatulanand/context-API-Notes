import React from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  background: ${({ theme }) => (theme === "dark" ? "black" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

const Navbar = () => {
  const { cartCount } = React.useContext(CartContext);
  const { theme } = React.useContext(ThemeContext);

  return <NavbarWrapper theme={theme}>Cart Count : {cartCount}</NavbarWrapper>;
};

export default Navbar;
