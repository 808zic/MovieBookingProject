/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img src="/logo.png" alt="logo" height="60" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ marginLeft: 'auto' }}>
          <Nav.Link href="/#">Home</Nav.Link>
          <Nav.Link href="/#movies">Movies</Nav.Link>
          <Nav.Link href="/#booking">My Bookings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
