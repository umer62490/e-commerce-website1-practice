import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button, FormControl, FormLabel, Input, Textarea, Text, useToast } from '@chakra-ui/react';
import Amex from './assets/amex.png';
import Mastercard from './assets/mastercard.png';
import Paypal from './assets/paypal.png';
import Visa from './assets/visa card.png';
import SSL from './assets/ssl badge.jpeg';
import SecurePayment from './assets/secure payment.jpeg';
import PaymentGateway from './assets/payment gateway.png';
import LeftLamp from './assets/left-lamp.png';
import RightLamp from './assets/right-lamp.png';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS JavaScript
import './App.css';



function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!name.trim()) {
      formErrors.name = 'Name is necessary.';
      valid = false;
    }

    if (!email) {
      formErrors.email = 'Email is necessary.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Enter valid email.';
      valid = false;
    }

    if (!message.trim()) {
      formErrors.message = 'Message field cannot be empty.';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const contactData = { name, email, message };

      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        });

        if (response.ok) {
          toast({
            title: 'Message submitted.',
            description: 'Your message has been successfully submitted.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          setName('');
          setEmail('');
          setMessage('');
          setErrors({});
        } else {
          toast({
            title: 'Error',
            description: 'Something went wrong. Please try again.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.error('Error:', error);
        toast({
          title: 'Server Error',
          description: 'Unable to connect to the server.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <div className="background-wrapper ">
      
      <div className="centered-box">
      <img data-aos="fade-up" src={LeftLamp} alt="Left Lamp" className="left-lamp" />
      <img data-aos="fade-up" src={RightLamp} alt="Right Lamp" className="right-lamp" />
        <div className="main-logo">
          <h1>ShoeShop</h1>
        </div>
        <div className="header-options" style={{ marginTop: '1rem', marginRight: '15rem' }}>

      
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/account">Account</Link>
        </div>
        
        <form  sclassName="form-container" style={{ width: '60rem' }} onSubmit={handleSubmit}>
       
  <FormControl style={{
        background: 'linear-gradient(135deg, #f1a655, #f9d29d, #f1a655)', // Removed white color
      }} id="name" isInvalid={!!errors.name} className="form-control">
    <FormLabel className="form-label">Name</FormLabel>
    <Input
      
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
      className="form-input"
    />
    {errors.name && <Text className="form-error">{errors.name}</Text>}
  </FormControl>


          <FormControl style={{
        background: 'linear-gradient(135deg, #f1a655, #f9d29d, #f1a655)', // Removed white color
      }} id="email" isInvalid={!!errors.email} className="form-control">
            <FormLabel className="form-label">Email</FormLabel>
            <Input
            
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-input"
            />
            {errors.email && <Text className="form-error">{errors.email}</Text>}
          </FormControl>

          <FormControl style={{
        background: 'linear-gradient(135deg, #f1a655, #f9d29d, #f1a655)', // Removed white color
      }} id="message" isInvalid={!!errors.message} className="form-control">
            <FormLabel className="form-label">Message</FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="form-textarea"
            />
            {errors.message && <Text className="form-error">{errors.message}</Text>}
          </FormControl>

          <Button type="submit" className="submit-button">
            Submit
          </Button>
        </form>

        <div className="footer" style={{marginTop:'-120rem'}}>
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

export default ContactUsPage;