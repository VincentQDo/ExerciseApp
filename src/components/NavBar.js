import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import "../style/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="mr-auto" href="/">
          {"V&A Exercise"}
        </NavbarBrand>
        <div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Exercise
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Upper Body</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Lower Body</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#">Food</NavLink>
              </NavItem>
            </Nav>
            <button className="btn btn-outline-primary">Login</button>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
