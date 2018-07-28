import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
render() {
    return (
        <Navbar default collapseOnSelect>
<Navbar.Header>
    <Navbar.Brand>
        <div id="navlogo"></div>
        <a href="/">   <img src="assets/sinkUpLogo.jpg" height="50" width="50" className="navlogo" />
        </a>

          </Navbar.Brand>
          <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav pullRight>
        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
        Home
        </NavItem>
        <NavItem eventKey={2} componentClass={Link} href="/match" to="/match">
        About
        </NavItem>
        <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
        Sign In
        </NavItem>

        </Nav>
    </Navbar.Collapse>
            </Navbar>
    )
}

}