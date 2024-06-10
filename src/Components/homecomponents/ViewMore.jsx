
import React from 'react';
import Header from '../Header';
import Footer from './Footer';
import NavBar from '../NavBar';
import './viewmore.css';

const ViewMore = () => {
    const products = [
        {
            brand: 'Vivo',
            name: 'Vivo Phone 1',
            description: 'Smartphone with amazing features',
            price: '$95.50',
            rating: '★★★★',
            reviews: '(4.1k) customer reviews',
            image: 'v1.png'
        },
        {
            brand: 'Vivo',
            name: 'Vivo Phone 2',
            description: 'Smartphone with amazing features',
            price: '$95.50',
            rating: '★★★★',
            reviews: '(4.1k) customer reviews',
            image: 'v2.jpeg'
        },
        {
            brand: 'Vivo',
            name: 'Vivo Phone 3',
            description: 'Smartphone with amazing features',
            price: '$95.50',
            rating: '★★★★',
            reviews: '(4.1k) customer reviews',
            image: 'v3.png'
        },
        {
            brand: 'Redmi',
            name: 'Redmi Phone 1',
            description: 'Affordable and powerful',
            price: '$95.50',
            rating: '★★★★',
            reviews: '(4.1k) customer reviews',
            image: 'v1.png'
        },
        {
            brand: 'Redmi',
            name: 'Redmi Phone 2',
            description: 'Affordable and powerful',
            price: '$95.50',
            rating: '★★★★',
            reviews: '(4.1k) customer reviews',
            image: 'v2.jpeg'
        },
        {
            brand: 'Redmi',
            name: 'Redmi Phone 3',
            description: 'Affordable and powerful',
            price: '$95.50',
            rating: '★★★★',
            reviews: '(4.1k) customer reviews',
            image: 'v3.png'
        }
    ];

    return (
        <div className="view-more-container">
            <Header />
            <NavBar />
            <div className="content">
                <div className="sidebar">
                    <div className="sidebar-section">
                        <h3>Department</h3>
                        <ul>
                            <li>Smart Phones</li>
                            <li>Basic Mobiles</li>
                    
                        </ul>
                    </div>
                    <div className="sidebar-section">
                        <h3>Brand</h3>
                        <ul>
                            <li><input type="checkbox" /> Samsung</li>
                            <li><input type="checkbox" /> Realme</li>
                            <li><input type="checkbox" /> Vivo</li>
                            <li><input type="checkbox" /> Oppo</li>
                            <li><input type="checkbox" /> Apple</li>
                            <li><input type="checkbox" /> Xiaomi</li>
                            <li><input type="checkbox" /> Sony</li>
                        </ul>
                    </div>
                    <div className="sidebar-section">
                        <h3>Operating System</h3>
                        <ul>
                            <li><input type="checkbox" /> Android</li>
                            <li><input type="checkbox" /> Bada</li>
                            <li><input type="checkbox" />Blackberry</li>
                            <li><input type="checkbox" /> iOS</li>
                            <li><input type="checkbox" /> Symbian</li>
                        </ul>
                    </div>
                    <div className="sidebar-section">
                        <h3>Price</h3>
                        <ul>
                            <li><input type="checkbox" /> Under Rs.1000</li>
                            <li><input type="checkbox" /> Rs.1000-Rs5000</li>
                            <li><input type="checkbox" /> Rs5000-Rs10000</li>
                            <li><input type="checkbox" /> Rs10,000-Rs20000</li>
                            <li><input type="checkbox" /> Over Rs20,000</li>
                        </ul>
                    </div>
                    <div className="sidebar-section">
                        <h3>Deals</h3>
                        <li><input type="checkbox" /> Today's Deals</li>
                    </div>
                    <div className="sidebar-section">
                        <h3>Internal Memory</h3>
                        <li><input type="checkbox" /> Less than 3.9GB</li>
                        <li><input type="checkbox" /> 4GB</li>
                        <li><input type="checkbox" />8GB</li>
                        <li><input type="checkbox" /> 16GB</li>
                        <li><input type="checkbox" /> 32GB</li>
                        <li><input type="checkbox" /> 64GB</li>
                        <li><input type="checkbox" /> 128GB</li>
                        <li><input type="checkbox" /> 256GB &above</li>
                    </div>
                    <div className="sidebar-section">
                        <h3>RAM</h3>
                        <li><input type="checkbox" /> Less than 3.9GB</li>
                        <li><input type="checkbox" /> 4GB</li>
                        <li><input type="checkbox" /> 8GB</li>
                        <li><input type="checkbox" /> 16GB</li>
                        <li><input type="checkbox" /> 32GB</li>
                        <li><input type="checkbox" /> 64GB</li>
                        <li><input type="checkbox" /> 128GB</li>
                        <li><input type="checkbox" /> 256GB &above</li>
                    </div>
                </div>
                <div className="main-content">
                    <h2>Vivo Mobiles</h2>
                    <div className="product-row">
                        {products.filter(product => product.brand === 'Vivo').map((product, index) => (
                            <div className="product-card1" key={index}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <p>{product.rating}</p>
                                <p>{product.reviews}</p>
                                <button>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                    <h2>Redmi Phones</h2>
                    <div className="product-row">
                        {products.filter(product => product.brand === 'Redmi').map((product, index) => (
                            <div className="product-card1" key={index}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <p>{product.rating}</p>
                                <p>{product.reviews}</p>
                                <button>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ViewMore;
