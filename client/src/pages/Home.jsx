import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to UniMatch</h1>
          <p className="hero-subtitle">Find your perfect university match and connect with like-minded students</p>
          <div className="cta-buttons">
            <Link to="/matcher" className="cta-button primary">Find Your Match</Link>
            <Link to="/register" className="cta-button secondary">Join Our Community</Link>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="features-title">Why Choose UniMatch?</h2>
        <div className="features-grid">
          <Link to="/matcher" className="feature-card feature-link">
            <div className="feature-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Smart Matching</h3>
            <p>Our advanced algorithm helps you find universities that match your preferences and academic goals.</p>
          </Link>
          <Link to="/forum" className="feature-card feature-link">
            <div className="feature-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Community Forum</h3>
            <p>Connect with other students, share experiences, and get advice from those who've been there.</p>
          </Link>
          <Link to="/dashboard" className="feature-card feature-link">
            <div className="feature-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <h3>Personalized Dashboard</h3>
            <p>Track your matches, save favorites, and manage your university applications all in one place.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;