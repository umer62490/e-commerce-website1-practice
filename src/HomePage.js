import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Amex from './assets/amex.png';
import Mastercard from './assets/mastercard.png';
import Paypal from './assets/paypal.png'
import Visa from './assets/visa card.png'
import iconName from './assets/shopping-cart.png';
import MainShoe from './assets/main-shoe.png';
import LeftArrow from './assets/left-arrow.png';
import RightArrow from './assets/right-arrow.png';
import SSL from  './assets/ssl badge.jpeg';
import SecurePayment from './assets/secure payment.jpeg';
import PaymentGateway from './assets/payment gateway.png';
import ShoeBackground from './assets/background-img-show-ecommerce.png'; // Import the shoe image
import Slideshow from './Slideshow'; // Import the Slideshow component
import './App.css';

const products = [
  { name: 'Product 1', description: 'Description 1' },
  { name: 'Product 2', description: 'Description 2' },
  { name: 'Product 3', description: 'Description 3' },
  { name: 'Product 4', description: 'Description 4' },
  { name: 'Product 5', description: 'Description 5' },
  { name: 'Product 6', description: 'Description 6' },
  { name: 'Product 7', description: 'Description 7' },
  { name: 'Product 8', description: 'Description 8' },
  { name: 'Product 9', description: 'Description 9' },
  // Add more products as needed
];

function HomePage() {

  const reviewCartsRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const handleSubscribe = () => {
    // Implement subscription logic here
    // For example, redirect to a subscription page or show a modal
    alert("Thank you for subscribing!");
  };

  const scrollLeft = () => {
    reviewCartsRef.current.scrollBy({
      top: 0,
      left: -reviewCartsRef.current.clientWidth / 3,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    reviewCartsRef.current.scrollBy({
      top: 0,
      left: reviewCartsRef.current.clientWidth / 3,
      behavior: 'smooth',
    });
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

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
        <div className='add-to-cart-icon'>
          <img src={iconName} alt="Add to Cart" className="cart-icon"  style={{ marginRight:'-7rem' }} />
        </div>
      </div>

      <div className='main-text'>
        <div className='main-txt'>
          <h1>Welcome to <span className='main-txt-word'>ShoeShop</span>!</h1>
          <p>Explore our curated selection of top-quality products. Find the latest trends, unique items, and great deals, all in one place. Happy shopping!</p>
        </div>
        <div className='main-img'>
          <img src={MainShoe} alt="Main Shoe" />
        </div>
      </div>

      <div className='premium-message'>
        <p>Enjoy premium products at unbeatable prices.</p>
        <Slideshow />
      </div>
      
      <div className='customer-satisfaction'>
        <h1>Experience excellent customer service</h1>
        <p>We believe in treating every customer like family. We value your feedback. Share your experience with us, and let us know how we can improve. Your input helps us serve you better.</p>

        <h1 className='reviews-main-heading'>Wall of Love 🧡</h1>
        
        <div className="reviews-carts-container">
           <button className="arrow-button arrow-left" onClick={scrollLeft}>
             <img src={LeftArrow} alt="Left Arrow" />
           </button>

           <div className="reviews-carts" ref={reviewCartsRef}>
             <div className="review-cart">Customer feedback 1</div>
             <div className="review-cart">Customer feedback 2</div>
             <div className="review-cart">Customer feedback 3</div>
             <div className="review-cart">Customer feedback 4</div>
             <div className="review-cart">Customer feedback 5</div>
           </div>

           <button className="arrow-button arrow-right" onClick={scrollRight}>
             <img src={RightArrow} alt="Right Arrow" />
           </button>
         </div>

        <button>Contact Us Now</button>
      </div>
      
      <div className='trending-products'>
        <h1>Explore Trending Products</h1>

        {/* Paginated Product Display */}
        <div className="products-display">
          {currentProducts.map((product, index) => (
            <div key={index} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {/* Add more product details as needed */}
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="pagination-buttons">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={currentPage === index + 1 ? 'active' : ''}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="subscription-box">
          <div className="subscription-background">
            {/* Background image */}
            <img src={ShoeBackground} alt="Shoes Background" className="background-image" />
          </div>
          <div className="subscription-content">
            <h2>Get a New Pair of Shoes Every Month!</h2>
            <p>Subscribe to our monthly shoe box and enjoy the latest styles delivered right to your doorstep.</p>
            <button className="subscribe-button" onClick={handleSubscribe}>Subscribe Now</button>
          </div>
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

export default HomePage;