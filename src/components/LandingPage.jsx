import React from 'react';
import './LandingPage.css';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        
        <img src="/Images/logo2.jpg?height=10&width=100" alt="Circle of giving logo" className="logo"/>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>
          <button className="rewards-button">Rewards</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Donate Your Used<br></br> Clothes Today</h1>
          <p>Welcome to Circle of Giving, where you can donate your used clothes and receive points and prizes in return. Our mission is to create a sustainable future by giving your pre-loved items a new life.</p>
          <button className="donate-button">
            Donate Now
            <ArrowRight className="arrow-icon" />
          </button>
        </div>
        <div className="hero-image">
          <img src="/Images/t-shirt-image.jpeg?height=300&width=300"   />
          
        </div>
      </section>

      <section className="donate-ease">
        <div className="donate-ease-content">
          <h2>Donate with Ease</h2>
          <p>At Circle of Giving, we make it simple for you to donate your used clothes. Just schedule a pickup, and our team will come to your doorstep to collect your items.</p>
          <button className="schedule-button">Schedule a Pickup</button>
        </div>
        <div className="donate-ease-image">
          <img src="/placeholder.svg?height=300&width=300" alt="Red cap" className="cap-image" />
        </div>
      </section>

      <section className="sustainable-impact">
        <h2>Sustainable Impact</h2>
        <p>By donating your used clothes through Circle of Giving, you're not only decluttering your closet but also making a positive impact on the environment. Your donations are either repurposed, recycled, or redistributed to those in need.</p>
        
        <div className="donation-categories">
          <div className="category">
            <img src="/placeholder.svg?height=200&width=300" alt="Red t-shirt" />
            <h3>Donate Clothing</h3>
            <p>Give Your Clothes a Second Life</p>
          </div>
          <div className="category">
            <img src="/placeholder.svg?height=300&width=300" alt="Green t-shirt" />
            <h3>Donate Accessories</h3>
            <p>Everything from A to Z of Your Accessories</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature pickup">
          <h3>Convenient Pickup</h3>
          <p>Our team will come to your doorstep at your convenience to collect your donations.</p>
          <button className="feature-button">Schedule Now</button>
        </div>
        <div className="feature rewards">
          <h3>Earn Rewards</h3>
          <p>For every donation you make, you'll earn points that can be redeemed for exciting prizes and discounts.</p>
          <button className="feature-button">Redeem Points</button>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>CircleOfLife</h4>
            <p>Making donation simple and rewarding</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#donate">Donate</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@circleoflife.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CircleOfLife. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

