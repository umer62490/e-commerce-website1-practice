import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UmerPhoto2 from './assets/umer photo 2.jpeg';
import UmerPhoto3 from './assets/umer photo 3.jpeg';
import UmerPhoto4 from './assets/umer photo 9.jpeg';
import UmerPhoto5 from './assets/umer photo 5.jpeg';
import UmerPhoto6 from './assets/umer photo 6.jpeg';
import UmerPhoto7 from './assets/umer photo 10.jpeg';
import UmerPhoto8 from './assets/umer photo 11.jpeg';
import Amex from './assets/amex.png';
import Mastercard from './assets/mastercard.png';
import Paypal from './assets/paypal.png';
import Visa from './assets/visa card.png';
import SSL from './assets/ssl badge.jpeg';
import SecurePayment from './assets/secure payment.jpeg';
import PaymentGateway from './assets/payment gateway.png';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS JavaScript
import './App.css'; 

const teamPhotos = [
  // Add URLs for your photos here
  
  UmerPhoto2,
  UmerPhoto3,
  UmerPhoto4,
  UmerPhoto5,
  UmerPhoto6,
  UmerPhoto7,
  UmerPhoto8,
  
];

function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamPhotos.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);


  return (
    <div className="team-carousel">
      <img src={teamPhotos[currentIndex]} alt="Team Member" className="team-photo" />
    </div>
  );
}

function AboutUsPage() {
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

        <div className="about-us-content">
          <section className="company-history">
            <h2 data-aos="fade-up">Our History</h2>
            <p data-aos="fade-up">
              <strong>ShoeShop</strong> was founded in <strong>2024</strong> with a passion for providing high-quality footwear that combines style and comfort. Over the years, we have grown from a small boutique into a leading eCommerce platform, serving customers worldwide with our diverse range of products.
            </p>
          </section>

          <section className="vision-mission-values">
            <div className="vision">
              <h2 data-aos="fade-up">Our Vision</h2>
              <p data-aos="fade-up">
                Our vision is to become the go-to destination for footwear enthusiasts by offering a seamless shopping experience, innovative designs, and unparalleled customer service.
              </p>
            </div>

            <div className="mission" >
              <h2 >Our Mission</h2>
              <p>
                Our mission is to deliver exceptional value to our customers through a curated selection of high-quality shoes that meet the latest fashion trends and comfort needs. We aim to build lasting relationships with our customers by consistently exceeding their expectations.
              </p>
            </div>

            <div className="values">
              <h2>Our Values</h2>
              <ul>
                <li><strong>Customer Satisfaction:</strong> We prioritize our customers' needs and strive to provide an outstanding shopping experience.</li>
                <li><strong>Quality:</strong> We are committed to offering products of the highest quality that meet our rigorous standards.</li>
                <li><strong>Innovation:</strong> We continuously seek innovative solutions to enhance our product offerings and services.</li>
                <li><strong>Integrity:</strong> We conduct our business with honesty and transparency in all our interactions.</li>
                <li><strong>Sustainability:</strong> We are dedicated to reducing our environmental impact and promoting sustainable practices.</li>
              </ul>
            </div>
          </section>
        </div>

        <section className="team">
          <h2>Meet the Team</h2>
          <TeamCarousel />
          <div className="team-info">
            <h3>Muhammad Umar</h3>
            <p><span>Role:</span> I'm developing this website where I apply <strong>React.js</strong> with <strong>Redux</strong> for frontend, and <strong>Bootstrap</strong> with <strong>Chakra UI</strong> for styling. For the backend, I use <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong> for the database.</p>
          </div>
        </section>

       
        <div className="footer" style={{marginTop:'-40rem'}}>
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
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;