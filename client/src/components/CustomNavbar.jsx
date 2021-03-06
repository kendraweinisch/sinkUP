import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import sinkUpLogo from './sinkUpLogo.PNG';

export default class CustomNavbar extends Component {
render() {
    return (
        <Navbar default collapseOnSelect>
<Navbar.Header>
    <Navbar.Brand>
        <div id="navlogo"></div>
        <a href="/">   <img src={sinkUpLogo} height="50" width="55" className="navlogo" alt="Sink Up logo" />
        </a>

          </Navbar.Brand>
          <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav pullRight>
        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
        Home
        </NavItem>
        <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
        About
        </NavItem>
        <NavItem eventKey={3} componentClass={Link} href="/authentication" to="/authentication">
        Sign In
        </NavItem>

        </Nav>
    </Navbar.Collapse>
            </Navbar>
    )
}

}