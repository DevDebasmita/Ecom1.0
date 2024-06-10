import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from '../Header';
import Footer from './Footer';
import NavBar from '../NavBar';
import './myorder.css';
import { Link } from 'react-router-dom';

const orders = [
  { image: '../m3.png', name: 'Product 1', description: 'Durable mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 2', description: 'Great mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 3', description: 'Awesome mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 4', description: 'Stylish mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 5', description: 'Durable mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 6', description: 'Great mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 7', description: 'Awesome mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 8', description: 'Stylish mobile phone', reviews: '(4.1k)', price: '$95.50' },
  { image: '../m3.png', name: 'Product 8', description: 'Stylish mobile phone', reviews: '(4.1k)', price: '$95.50' }
];

const MyOrder = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = (order) => {
    setSelectedOrder(order);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedOrder(null);
  }

  return (
    <div>
      <Header />
      <NavBar />
      <div className="container">
        <Link to={'/orderhistory'}>
          <h2>My Orders</h2>
        </Link>
        <div className="order-product-container">
          {orders.map((order, index) => (
            <div className="order-product-card" key={index} onClick={() => openModal(order)}>
              <div className="order-product-info">
                <div className="order-cross">&times;</div>
                <img src={order.image} alt={order.name} className="order-product-image" />
                <h3 className="order-product-name">{order.name}</h3>
                <p className="order-product-description">{order.description}</p>
                <div className="star">★★★★☆</div>
                <p className="order-product-reviews">{order.reviews} Customer Reviews</p>
                <p className="order-product-price">{order.price}</p>
                {index % 2 === 0 ? (
                  <button className="order-ship-button">Delivered</button>
                ) : (
                  <button className="order-deliver-button">Shipped</button>
                )}
              </div>
            </div>
          ))}
        </div>
        {selectedOrder && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Order Details"
            className="order-modal"
            overlayClassName="order-modal-overlay"
          >
            <div className="modal-content">
              <div className="modal-left">
                <img src={selectedOrder.image} alt={selectedOrder.name} className="modal-product-image" />
                
                <h3>{selectedOrder.name}</h3>
                <p className="modal-product-price">{selectedOrder.price}</p>
                <div className="modal-stars">★★★★☆</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> 2pcs<br/>Wednesday ,20 march 2020</p>
                <button className="modal-purchase-button">Purchase</button>
                
              </div>
              <div className="modal-right">
                
                <h3>Cart Total</h3>
                <div className="price-details">
                  <p>Product×1: {selectedOrder.price}</p>
                  <p>Service Charge: $95.5</p>
                  <p>Delivery Charge: $95.5</p>
                  <p>GST: $95.5</p>
                  <h4>Total Price: $50056.00</h4>
                </div>
                <button className="modal-purchase-button">Paid Sucessfully</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MyOrder;
