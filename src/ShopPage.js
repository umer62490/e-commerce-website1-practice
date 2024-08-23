import React, { useState, useEffect } from 'react';  // Add useEffect here

import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';  // Import the SearchBar component
import Amex from './assets/amex.png';
import Mastercard from './assets/mastercard.png';
import Paypal from './assets/paypal.png';
import Visa from './assets/visa card.png';
import SSL from './assets/ssl badge.jpeg';
import SecurePayment from './assets/secure payment.jpeg';
import PaymentGateway from './assets/payment gateway.png';
import backgroundImage from './assets/box-in-center-box.avif';
import iconName from './assets/shopping-cart.png';
import LeftArrow from './assets/left-arrow.png';
import RightArrow from './assets/right-arrow.png';
import Shoee1 from './assets/shoee1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Assuming your CSS is in App.css

function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or other source
    const fetchProducts = async () => {
      // Example: Replace with actual API call or static data
      const productList = [
        { id: 1, name: 'Red Shoe', description: 'A stylish red shoe', price: 99.99, image: Shoee1 },
        { id: 2, name: 'Blue Shoe', description: 'A comfortable blue shoe', price: 89.99, image: Shoee1 },
        // Add more products here
      ];
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };


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
          <SearchBar onSearch={handleSearch} />  {/* Add the SearchBar here */}
        </div>
        
        {/* The rest of your component code remains unchanged */}
        <div className='overall-price'></div>
        <div className="box-in-center-box">
          <h1>Product Details</h1>
          <div id='change-product' className='d-flex align-items-center'>
            <img src={LeftArrow} alt="Previous" className="img-fluid" style={{ width: '20px', height: 'auto', marginRight: '8px' }} />
            <h6 className='m-0'>Next Product</h6>
            <img src={RightArrow} alt="Next" className="img-fluid" style={{ width: '20px', height: 'auto', marginLeft: '8px' }} />
          </div>

          <div className='box-on-center-box'>
            <div className='box-on-center-box-ColorSelection'>
              <div className="color-selection-container">
                <p style={{ marginBottom: '.5rem' }}>Color :</p>
                <div className="color-options">
                  <label>
                    <input type="radio" name="color" value="red" />
                    <span className="color-circle" style={{ backgroundColor: 'red' }}></span>
                  </label>
                  <label>
                    <input type="radio" name="color" value="blue" />
                    <span className="color-circle" style={{ backgroundColor: 'blue' }}></span>
                  </label>
                  <label>
                    <input type="radio" name="color" value="black" />
                    <span className="color-circle" style={{ backgroundColor: 'black' }}></span>
                  </label>
                </div>
                <div className="show-size">
                  <p>Size :</p>
                  <div className="size-buttons">
                    <div className='upper-size-button'>
                      <button>37</button>
                      <button>38</button>
                      <button>39</button>
                    </div>

                    <div className='lower-size-button'>
                      <button>40</button>
                      <button>41</button>
                      <button>42</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className='add-to-cart-btn'>Add to Cart</button>
            <div className='circle-on-center-box'></div>
          </div>
          <div className='related-products'>
            <h2>Related Products</h2>
            <div className='product-carts'>
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className='product-cart'>
                    <img src={product.image} alt="Product" className='product-image' />
                    <div className='product-info'>
                      <p className='product-description'>{product.description}</p>
                      <p className='product-price'>${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
           

           {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className='product-cart'>
                    <img src={product.image} alt="Product" className='product-image' />
                    <div className='product-info'>
                      <p className='product-description'>{product.description}</p>
                      <p className='product-price'>${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            

            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className='product-cart'>
                    <img src={product.image} alt="Product" className='product-image' />
                    <div className='product-info'>
                      <p className='product-description'>{product.description}</p>
                      <p className='product-price'>${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
          
          {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className='product-cart'>
                    <img src={product.image} alt="Product" className='product-image' />
                    <div className='product-info'>
                      <p className='product-description'>{product.description}</p>
                      <p className='product-price'>${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
          

          {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className='product-cart'>
                    <img src={product.image} alt="Product" className='product-image' />
                    <div className='product-info'>
                      <p className='product-description'>{product.description}</p>
                      <p className='product-price'>${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            

            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className='product-cart'>
                    <img src={product.image} alt="Product" className='product-image' />
                    <div className='product-info'>
                      <p className='product-description'>{product.description}</p>
                      <p className='product-price'>${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            

            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className='product-cart'>
                    <img src={product.image} alt="Product" className='product-image' />
                    <div className='product-info'>
                      <p className='product-description'>{product.description}</p>
                      <p className='product-price'>${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            
            </div>
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

export default ShopPage;