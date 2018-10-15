import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

class Shop extends Component {
  render() {
    return (
      <div>
        <Navigation />
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

export default Shop;
