import React from 'react';
import {  Link } from 'react-router-dom';
import backgroundImage from './assets/box-in-center-box.avif';
import iconName from './assets/shopping-cart.png';
import LeftArrow from './assets/left-arrow.png';
import RightArrow from './assets/right-arrow.png';
import Shoee1 from './assets/shoee1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Assuming your CSS is in App.css

function ShopPage() {
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
              <div className='product-cart'>
                <img src={Shoee1} alt="Product" className='product-image' />
                <div className='product-info'>
                  <p className='product-description'>This is a brief description of the product. This is a brief description of the product.</p>
                  <p className='product-price'>$99.99</p>
                </div>
              </div>

              <div className='product-cart'>
                <img src={Shoee1} alt="Product" className='product-image' />
                <div className='product-info'>
                  <p className='product-description'>This is a brief description of the product.</p>
                  <p className='product-price'>$99.99</p>
                </div>
              </div>

              <div className='product-cart'>
                <img src={Shoee1} alt="Product" className='product-image' />
                <div className='product-info'>
                  <p className='product-description'>This is a brief description of the product.</p>
                  <p className='product-price'>$99.99</p>
                </div>
              </div>

              <div className='product-cart'>
                <img src={Shoee1} alt="Product" className='product-image' />
                <div className='product-info'>
                  <p className='product-description'>This is a brief description of the product.</p>
                  <p className='product-price'>$99.99</p>
                </div>
              </div>

              <div className='product-cart'>
                <img src={Shoee1} alt="Product" className='product-image' />
                <div className='product-info'>
                  <p className='product-description'>This is a brief description of the product.</p>
                  <p className='product-price'>$99.99</p>
                </div>
              </div>

              <div className='product-cart'>
                <img src={Shoee1} alt="Product" className='product-image' />
                <div className='product-info'>
                  <p className='product-description'>This is a brief description of the product.</p>
                  <p className='product-price'>$99.99</p>
                </div>
              </div>

              <div className='product-cart'>
                <img src={Shoee1} alt="Product" className='product-image' />
                <div className='product-info'>
                  <p className='product-description'>This is a brief description of the product.</p>
                  <p className='product-price'>$99.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;