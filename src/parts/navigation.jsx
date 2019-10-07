import React from "react";
import { Container } from "react-bootstrap/";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Container className="top_navigation">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item large">
          <NavLink exact className="nav-link" to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </Container>
  );
}

export default Navigation;
