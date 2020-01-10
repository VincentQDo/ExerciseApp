import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" id="navbar">
      <Link to="/" className="navbar-brand">
        Lu Exercise Tracker
      </Link>
      <NavbarToggler
        onClick={toggle}
        className="navbar-toggler custom-toggler"
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/exercise" className="nav-link">
              Exercises
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/food" className="nav-link">
              Food
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
