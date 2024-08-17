import React from 'react';
import { Link } from 'react-router-dom';
import iconName from './assets/shopping-cart.png';
import './App.css'; 

function HomePage() {
  return (
    <div className="background-wrapper">
      <div className="centered-box">
        <div className='main-logo'>
          <h1>ShoeShop</h1>
        </div>
        <div className='header-options'>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/account">Account</Link>
          <div className='add-to-cart-icon'>
            <img src={iconName} alt="Add to Cart" className="cart-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;