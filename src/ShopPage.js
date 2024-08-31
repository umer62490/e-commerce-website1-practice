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
import Shoee2 from './assets/shoee2.png';
import Shoee3 from './assets/shoee3.png';
import Shoee4 from './assets/shoee4.png';
import Shoee5 from './assets/shoee5.png';
import Shoee6 from './assets/shoee6.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS JavaScript
import './App.css'; // Assuming your CSS is in App.css


function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(''); // Default no color selected

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = [
        { id: 1, name: 'brown Shoe', price: 99.99, image: Shoee1, colors: ['red', 'blue', 'black'] },
        { id: 2, name: 'red Shoe', price: 89.99, image: Shoee2, colors: ['red', 'blue', 'black'] },
        { id: 3, name: 'white Shoe', price: 89.99, image: Shoee3, colors: ['red', 'blue', 'black'] },
        { id: 4, name: 'blue Shoe', price: 89.99, image: Shoee4, colors: ['red', 'blue', 'black'] },
        { id: 5, name: 'green Shoe', price: 89.99, image: Shoee5, colors: ['red', 'blue', 'black'] },
        { id: 6, name: 'black Shoe', price: 89.99, image: Shoee6, colors: ['red', 'blue', 'black'] },
      ];
      setProducts(productList);

      
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0,1,2,3,4,5]); // Set the first available color as the default
  };
  
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  
  const handleSmallBoxClick = (color) => {
    setSelectedColor(color);
  };
  
  const getColorImage = (color, product) => {
    // Ensure each color has a specific image
    switch (color) {
      case 'red':
        return Shoee2; // Replace with the specific image for red
      case 'blue':
        return Shoee4; // Replace with the specific image for blue
      case 'black':
        return Shoee6; // Replace with the specific image for black
      default:
        return product.image; // Return default product image
    }
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
        <div className='overall-price' ></div>
        <div className="box-in-center-box" >
          <h1 data-aos="fade-up">Product Details</h1>
          <div data-aos="fade-up" id='change-product' className='d-flex align-items-center' >
            <img  src={LeftArrow} alt="Previous" className="img-fluid" style={{ width: '20px', height: 'auto', marginRight: '8px' }} />
            <h6 className='m-0'>Next Product</h6>
            <img src={RightArrow} alt="Next" className="img-fluid" style={{ width: '20px', height: 'auto', marginLeft: '8px' }} />
          </div>

          <div className='box-on-center-box' >
            {selectedProduct && (
              <div  className='box-on-center-box-ColorSelection'>
                <div data-aos="fade-up" className="color-selection-container">
                  <p data-aos="fade-up" style={{ marginBottom: '.5rem' }}>Color :</p>
                  <div className="color-options">
                    {selectedProduct.colors.map(color => (
                      <label key={color}>
                        <input
                          type="radio"
                          name="color"
                          value={color}
                          checked={selectedColor === color}
                          onChange={handleColorChange}
                        />
                        <span className="color-circle" style={{ backgroundColor: color }}></span>
                      </label>
                    ))}
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
            )}
            {selectedProduct && (
              <button data-aos="fade-up" className='add-to-cart-btn'>Add to Cart</button>
            )}
            <div className='circle-on-center-box'>
              {selectedProduct ? (
                <img data-aos="fade-up" src={getColorImage(selectedColor, selectedProduct)} alt={selectedProduct.name} className="product-image" />
              ) : (
                <p data-aos="fade-up">Select a product</p>
              )}
            </div>
            {selectedProduct && (
              <div data-aos="fade-up" className="bottom-left-boxes">
                {selectedProduct.colors.map(color => (
                  <div 
                    key={color}
                    className={`small-box ${color}-shoes`} 
                    style={{ backgroundColor: color }}
                    onClick={() => handleSmallBoxClick(color)}
                  ></div>
                ))}
              </div>
            )}
          </div>

          <div className='related-products'>
            <h2 >Related Products</h2>
            <div  className='product-carts'>
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="product-cart"
                    onClick={() => handleProductClick(product)}
                  >
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-info">
                      <p className="product-description">{product.name}</p>
                      <p className="product-price">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>
    
        </div>

        <div className="footer" style={{top:'100rem'}}>
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