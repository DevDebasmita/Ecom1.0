import React, { useState } from 'react';
import Header from '../Header';
import Footer from './Footer';
import NavBar from '../NavBar';
import './mycart.css';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleCheckout = () => {
        setShowPaymentModal(true);
    };

    const handlePay = () => {
        // Handle payment process
        setShowVerificationModal(true);
        // Simulate payment verification
        setTimeout(() => {
            setShowVerificationModal(false);
            // Show payment success modal
            setShowSuccessModal(true);
        }, 5000); 
    };

    return (
        <div>
            <Header />
            <NavBar />
            <div className="cart-container">
                <div className="left-section">
                    <h2>My Cart</h2>
                    <div className="product-item">
                        <div className="remove-btn">×</div>
                        <img src="m3.png" alt="Product 1" />
                        <div className="product-details">
                            <h3>Product Name 1</h3>
                            <div className="star">★★★★☆</div>
                            <div className="stars">(4.1k) Customer Reviews</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="quantity">
                                <button>-</button>
                                <span>01</span>
                                <button>+</button>
                            </div>
                            <div className="price">$95.5</div>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="remove-btn">×</div>
                        <img src="m3.png" alt="Product 1" />
                        <div className="product-details">
                            <h3>Product Name 2</h3>
                            <div className="star">★★★★☆</div>
                            <div className="stars">(4.1k) Customer Reviews</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="quantity">
                                <button>-</button>
                                <span>01</span>
                                <button>+</button>
                            </div>
                            <div className="price">$95.5</div>
                        </div>
                    </div>
                   
                </div>
                <div className="right-section">
                <h3>Delivery Address</h3>
                    <h2>Kolkata , orissa 1470065</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In habitant semper tristique metus hac. Consectetur tellus gravida gravida tellus risus m Vivamus vitae, erat eget et, non ullamcorperamus vitae, erat eget et, non ullamcorperLorem ipsum dolor sit amet, consectetur adipiscing elit. In habitant semper tristique metus hac. Consectetur tellus </p>
                    <Link to={'/address'}><button className="checkout-btn">Change Address</button></Link>
                    <div className="cart-summary">
                        <h3>Cart Total</h3>
                        <p>Price Details</p>
                        <div>Product×1: $95.5</div>
                        <div>Service Charge: $95.5</div>
                        <div>Delivery Charge: $95.5</div>
                        <div>GST: $95.5</div>
                        <div className="total">Total Price: $50056.00</div>
                    </div>
                    <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                </div>
            </div>

            {/* Payment Method Modal */}
            {showPaymentModal && (
    <div className="modal">
        <div className="modal-content">
    
            <span className="close" onClick={() => setShowPaymentModal(false)}>&times;</span>
            <div className="payment-method-details">
            <h3 className="payment">Payment Method</h3>
            <div style={{ height: "545px" }}><br/>
            <p className="invoice-text">Invoice (Free)</p>
                <p>Debit/Credit Card <img src="pa.png" height="17" alt="Debit Card" style={{ textAlign: "center" }} /></p>
                {/* Card details */}
                <div>
                    <input type="text" placeholder="Card Number" />
                    <input type="text" placeholder="MM/YY" />
                    <input type="text" placeholder="CVV" />
                </div>
                {/* Other payment options */}
                <h3>Other Payment Options</h3><br/>
                <label htmlFor="google-pay">
                    <input type="radio" id="google-pay" name="payment-option" />
                    Google Pay
                </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="phone-pay">
                    <input type="radio" id="phone-pay" name="payment-option" />
                    Phone Pay
                </label><br/>
                <label htmlFor="phone-pay">
                    <input type="radio" id="phone-pay" name="payment-option" />
                    UPI
                </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="phone-pay">
                    <input type="radio" id="phone-pay" name="payment-option" />
                    Bank Transfer
                </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                {/* Total Price */}
                <h4>Total Price: $50056.00</h4>
                {/* Pay button */}
                <button className="pay-btn" onClick={handlePay}>Pay</button>
            </div>
            </div>
        </div>
    </div>
)}


            {/* Payment Verification Modal */}
            {showVerificationModal && (
    <div className="modal1">
        <div className="modal-content1">
            <span className="close1" onClick={() => setShowVerificationModal(false)}>&times;</span>
            <img src="lo.jpeg" alt="Verification" className="verification-image" />
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Verifying Payment...</h2>
            <p>Process may take 1-2 minutes. Once completed, you will be redirected to the order page.</p>
        </div>
    </div>
)}


            {/* Payment Success Modal */}
            {showSuccessModal && (
    <div className="modal2">
        <div className="modal-content2">
            <span className="close2" onClick={() => setShowSuccessModal(false)}>&times;</span>
            <img src="tick.jpeg" alt="Success" className="success-image" />
            <h2 className="success-message">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Payment Successful!</h2>
            <p>Thanks for purchasing from us </p>
        </div>
    </div>
)}

            <Footer />
        </div>
    );
}

export default MyCart;
