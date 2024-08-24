import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Amex from './assets/amex.png';
import Mastercard from './assets/mastercard.png';
import Paypal from './assets/paypal.png';
import Visa from './assets/visa card.png';
import SSL from './assets/ssl badge.jpeg';
import SecurePayment from './assets/secure payment.jpeg';
import PaymentGateway from './assets/payment gateway.png';
import './App.css'; 

function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password,
      });
      alert('Signup successful');
    } catch (error) {
      console.error('Signup error:', error); // Log the entire error object
      alert('Signup failed: ' + (error.response?.data?.msg || error.message || 'An unknown error occurred.'));
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      alert('Login successful');
      localStorage.setItem('token', response.data.token);
      navigate('/home'); // Redirect to home page or another page after successful login
    } catch (error) {
      // Check if error.response is defined before accessing its properties
      if (error.response && error.response.data) {
        alert('Login failed: ' + error.response.data.msg);
      } else {
        alert('Login failed: An unknown error occurred.');
      }
      console.error('Login error', error); // Log the complete error object for debugging
    }
  };

  return (
    <div className="background-wrapper">
      <div className="centered-box">
        <div className='main-logo'>
          <h1>ShoeShop</h1>
        </div>
        <div className='header-options' style={{ marginTop:'1rem' , marginRight: '15rem' }}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/account">Account</Link>
          
        </div>
        <div className="form-container">
          {!isLogin ? (
            <div className="signup-form">
              <h2>Sign Up</h2>
              <form onSubmit={handleSignup}>
                <div className="form-group">
                  <label>Name:</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
                <button type="submit">Sign Up</button>
              </form>
              <p>
                Already have an account?{' '}
                <span className="toggle-link" onClick={toggleForm}>
                  Login here
                </span>
              </p>
            </div>
          ) : (
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email:</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
                <button type="submit">Login</button>
              </form>
              <p>
                Don't have an account?{' '}
                <span className="toggle-link" onClick={toggleForm}>
                  Sign up here
                </span>
              </p>
            </div>
          )}
        </div>

        <div className="footer">
          <div className="footer-content">
            <div className="recent-posts">
              <h3>Recent Blog Posts</h3>
              <div className="posts-list">
                <div className="post-item">
                  <h4><a href="/blog/post1">Latest Trends in Footwear Fashion</a></h4>
                  <p>A brief overview of the latest trends in the world of footwear. Discover what's new and what's coming next.</p>
                </div>
                <div className="post-item">
                  <h4><a href="/blog/post2">Our Journey to Sustainability</a></h4>
                  <p>Learn about our efforts and initiatives towards creating a more sustainable and eco-friendly brand.</p>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <h3>About Us</h3>
              <p>Learn more about our company, mission, and values. We are dedicated to providing top-quality shoes and exceptional service.</p>
              <Link to="/about-us">Read More</Link>
            </div>

            <div className="footer-section">
              <h3>Customer Service</h3>
              <ul>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/returns">Returns & Exchanges</Link></li>
                <li><Link to="/shipping">Shipping Information</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Follow Us</h3>
              <ul className="social-media">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>

            <div className="security-payment">
              <div className="security-badges">
                <h3>Secure Checkout</h3>
                <div className="badges">
                  <img src={SSL} alt="SSL Secure" />
                  <img src={PaymentGateway} alt="Payment Gateway" />
                  <img src={SecurePayment} alt="Secure Payment" />
                </div>
              </div>

              <div className="payment-options">
                <h3>Accepted Payment Methods</h3>
                <div className="payment-logos">
                  <img src={Visa} alt="Visa" />
                  <img src={Mastercard} alt="MasterCard" />
                  <img src={Paypal} alt="PayPal" />
                  <img src={Amex} alt="American Express" />
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter to get the latest updates and offers directly to your inbox.</p>
              <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} ShoeShop. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;