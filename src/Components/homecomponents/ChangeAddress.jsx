import React from 'react';
import Header from '../Header';
import Footer from './Footer';
import NavBar from '../NavBar';
import './changeaddress.css';

const ChangeAddress = () => {
    return (
        <div className="container">
            <Header />
            <NavBar />
            <div className="main-content">
                <h2>Add New Address</h2>
                <div className="image-and-form">
                    <div className="image-section">
                        <img src="map.png" alt="Map" className="map-image" />
                        <button className="choose-map-btn">Choose from Map</button>
                    </div>
                    <div className="address-form">
                    <div className="input-group">
        <input type="text" placeholder="State" />
        <input type="text" placeholder="House Number" />
    
    </div>
    <div className="input-group">
        <input type="text" placeholder="Town/City" />
        <input type="text" placeholder="Street" />
    </div>
    <div className="input-group">
        <input type="text" placeholder="Pincode" />
        <input type="text" placeholder="ID" />
    </div>
                        <button className="add-btn">Add</button>
                    </div>
                </div>
                <div className="choose-address">
                    <h3>Choose from Address</h3>
                    <div className="address-options">
                        <div className="column">
                            <label htmlFor="option1">
                                <input type="radio" id="option1" name="address-option" />
                                
                                    <span className="content-outside-circle">
                                        <strong>Kolkata, Orissa 1470065</strong>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In habitant semper tristique metus hac. Consectetur tellus gravida gravida tellus risus mattis. Vivamus vitae, erat eget et, non ullamcorper.</p>
                                    </span>
                                
                            </label>
                            <label htmlFor="option2">
                                <input type="radio" id="option2" name="address-option" />
                            
                                    <span className="content-outside-circle">
                                        <strong>Kolkata, Orissa 1470065</strong>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In habitant semper tristique metus hac. Consectetur tellus gravida gravida tellus risus mattis. Vivamus vitae, erat eget et, non ullamcorper.</p>
                                    </span>
                                
                            </label>
                        </div>
                        <div className="column">
                            <label htmlFor="option3">
                                <input type="radio" id="option3" name="address-option" />
                            
                                    <span className="content-outside-circle">
                                        <strong>Kolkata, Orissa 1470065</strong>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In habitant semper tristique metus hac. Consectetur tellus gravida gravida tellus risus mattis. Vivamus vitae, erat eget et, non ullamcorper.</p>
                                    </span>
                                
                            </label>
                            <label htmlFor="option4">
                                <input type="radio" id="option4" name="address-option" />
                                
                                    <span className="content-outside-circle">
                                        <strong>Kolkata, Orissa 1470065</strong>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In habitant semper tristique metus hac. Consectetur tellus gravida gravida tellus risus mattis. Vivamus vitae, erat eget et, non ullamcorper.</p>
                                    </span>
                                
                            </label>
                        </div>
                        <div className="column">
                            <label htmlFor="option5">
                                <input type="radio" id="option5" name="address-option" />
                                
                                    <span className="content-outside-circle">
                                        <strong>Kolkata, Orissa 1470065</strong>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In habitant semper tristique metus hac. Consectetur tellus gravida gravida tellus risus mattis. Vivamus vitae, erat eget et, non ullamcorper.</p>
                                    </span>
                                
                            </label>
                            <label htmlFor="option6">
                                <input type="radio" id="option6" name="address-option" />
                            
                                    <span className="content-outside-circle">
                                        <strong>Kolkata, Orissa 1470065</strong>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In habitant semper tristique metus hac. Consectetur tellus gravida gravida tellus risus mattis. Vivamus vitae, erat eget et, non ullamcorper.</p>
                                    </span>
                                
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ChangeAddress;
