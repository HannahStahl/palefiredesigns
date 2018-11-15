import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {
    render() {
      return (
        <div>
            <Navbar collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="/" style={{'fontSize': '25px'}}>Pale Fire Designs</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="/">
                Shop
                </NavItem>
                <NavItem eventKey={2} href="/About">
                About
                </NavItem>
                <NavItem eventKey={3} href="/Events">
                Events
                </NavItem>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
      );
    }
}

export default Navigation;
