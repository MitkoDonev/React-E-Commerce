import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer, NavWrapper } from "./StyledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ms-auto">
          <ButtonContainer>
            <span className="mr-2">
              <FontAwesomeIcon icon={faShoppingCart} fixedWidth /> My Cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
