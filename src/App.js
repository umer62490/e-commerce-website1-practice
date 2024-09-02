import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import ContactUsPage from './ContactUsPage';
import AboutUsPage from './AboutUsPage';
import AccountPage from './AccountPage';
import CartComponent from './redux/cartComponent';
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" component={CartComponent} />
      </Routes>
    </Router>
  );
}

export default App;