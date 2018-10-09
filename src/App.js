import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem, Grid, Row, Col, Thumbnail } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand" style={{'fontSize': '25px'}}>Pale Fire Designs</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Shop
              </NavItem>
              <NavItem eventKey={2} href="#">
                About
              </NavItem>
              <NavItem eventKey={3} href="#">
                Events
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail href="#" alt="necklace" src="./necklace.jpg">
                <h3>Necklace</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail href="#" alt="necklace" src="./necklace.jpg">
                <h3>Necklace</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail href="#" alt="necklace" src="./necklace.jpg">
                <h3>Necklace</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail href="#" alt="necklace" src="./necklace.jpg">
                <h3>Necklace</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail href="#" alt="necklace" src="./necklace.jpg">
                <h3>Necklace</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail href="#" alt="necklace" src="./necklace.jpg">
                <h3>Necklace</h3>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
