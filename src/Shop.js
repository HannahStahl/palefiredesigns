import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import { Grid, Row, Col, Carousel, Thumbnail, Modal, Button, Collapse } from 'react-bootstrap';

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showText: false
    };
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleShowModal() {
    this.setState({ showModal: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Navigation />
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header className="modal-header" closeButton>
            <Modal.Title className="h3">Lampwork Drop Pendant</Modal.Title>
            <div>
              <p>Once I held Sheri Fisher's beautiful lampwork glass drop... </p>
              <a className="read-more" onClick={() => this.setState({ showText: !this.state.showText })}>Read more</a>
              <Collapse in={this.state.showText}>
                <div><span><p>
                    (simply can't capture the true beauty if a photo!) in my hand and moved it around in the light, I knew I had to hang it from several strands of rainbow metallic tri-cut seed beads I'd been hoarding until just the right piece came along! I also recently acquired a tribal-looking solid bronze ring bead that also needed to be worked into the mix. My beadwoven bails of cranberry luster seed beads to gather the seed beads and connect to the ring and another, smaller bail of tiny bronze seed beads to connect the ring to the lampwork pendant pull it all together. And don't overlook the lovely textured bronze cones and the fabulous organic bronze toggle clasp by Russian metalsmith, Anna Chernykh of AnnaBronze! A nice 16-inch length, with a 2-inch pendant, including the hand beaded bails.        
                </p></span></div>
              </Collapse>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Carousel interval={null}>
              <Carousel.Item>
                <img alt="necklace" src="/necklace.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="necklace" src="/necklace.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="necklace" src="/necklace.jpg" />
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
          <Modal.Footer className="modal-footer centered">
            <Button className="button">Add to Cart</Button>
            <p style={{"paddingTop": "10px"}}>$145</p>
          </Modal.Footer>
        </Modal>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail href="#" onClick={this.handleShowModal} alt="necklace" src="./necklace.jpg" className="centered">
                <h3>Lampwork Drop Pendant</h3>
                <p>$145</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail href="#" alt="bracelet" src="./bracelet.jpg" className="centered">
                <h3>Wings of Desire</h3>
                <p>$145</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail href="#" alt="necklace" src="./necklace.jpg" className="centered">
                <h3>Lampwork Drop Pendant</h3>
                <p>$145</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail href="#" alt="necklace" src="./necklace.jpg" className="centered">
                <h3>Lampwork Drop Pendant</h3>
                <p>$145</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail href="#" alt="necklace" src="./necklace.jpg" className="centered">
                <h3>Lampwork Drop Pendant</h3>
                <p>$145</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail href="#" alt="bracelet" src="./bracelet.jpg" className="centered">
                <h3>Wings of Desire</h3>
                <p>$145</p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Shop;
