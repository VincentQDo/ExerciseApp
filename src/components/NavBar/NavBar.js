import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" id="navbar">
      <Link to="/">
        <NavbarBrand>Lu Exercise Tracker</NavbarBrand>
      </Link>
      <NavbarToggler
        onClick={toggle}
        className="navbar-toggler custom-toggler"
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/exercise">
              <NavLink>Exercises</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/food">
              <NavLink>Food</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/#contact">
              <NavLink>Contact Us</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
