import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import { Carousel, Thumbnail, Modal, Button } from 'react-bootstrap';

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
            <Modal.Title className="h3">Lampwork Drop Pendant Multistrand Necklace with Beaded Bails, Tricut Seed Beads and Solid Bronze Disc</Modal.Title>
            <Button className="add-to-cart button">$145 - Add to Cart</Button>
            <br/><a className='details-link' href="#">View full details</a>
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
        </Modal>
          <div className='items'>
            <Thumbnail href="#" onClick={this.handleShowModal} alt="necklace" src="./necklace.jpg" className="centered">
            </Thumbnail>
            <Thumbnail href="#" alt="bracelet" src="./bracelet.jpg" className="centered">
            </Thumbnail>
            <Thumbnail href="#" alt="necklace" src="./necklace.jpg" className="centered">
            </Thumbnail>
            <Thumbnail href="#" alt="necklace" src="./necklace.jpg" className="centered">
            </Thumbnail>
            <Thumbnail href="#" alt="necklace" src="./necklace.jpg" className="centered">
            </Thumbnail>
            <Thumbnail href="#" alt="bracelet" src="./bracelet.jpg" className="centered">
            </Thumbnail>
          </div>
      </div>
    );
  }
}

export default Shop;
