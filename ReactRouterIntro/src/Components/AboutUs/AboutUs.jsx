import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About TechStore</h1>
          <p>Your Trusted Partner in Technology Since 2015</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At TechStore, we believe that everyone deserves access to the
                latest and most reliable technology. Our mission is to bridge
                the gap between cutting-edge innovation and everyday users by
                providing high-quality phones and laptops at competitive prices,
                backed by exceptional customer service.
              </p>
            </div>
            <div className="mission-image">
              <img
                src="/images/mission-tech.jpg"
                alt="Modern technology devices"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Quality First</h3>
              <p>
                We carefully select every product to ensure it meets our high
                standards for performance and durability.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Customer Trust</h3>
              <p>
                Your satisfaction is our priority. We build lasting
                relationships through honest and transparent service.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>
                We stay ahead of tech trends to bring you the latest and most
                innovative devices on the market.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Reliability</h3>
              <p>
                Every product comes with comprehensive warranty and after-sales
                support you can count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Focus */}
      <section className="products-section">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="products-grid">
            <div className="product-category">
              <div className="category-image">
                <img
                  src="/images/smartphones-display.jpg"
                  alt="Latest smartphones"
                />
              </div>
              <div className="category-info">
                <h3>Smartphones</h3>
                <p>
                  From flagship models to budget-friendly options, we offer a
                  wide range of smartphones from top brands like Apple, Samsung,
                  Google, and more. Whether you're a photography enthusiast, a
                  mobile gamer, or need a reliable business phone, we have the
                  perfect device for you.
                </p>
                <ul>
                  <li>Latest flagship models</li>
                  <li>Budget-friendly options</li>
                  <li>5G capable devices</li>
                  <li>Accessories and cases</li>
                </ul>
              </div>
            </div>

            <div className="product-category">
              <div className="category-info">
                <h3>Laptops & Computers</h3>
                <p>
                  Discover our extensive collection of laptops for every need -
                  from powerful gaming rigs and professional workstations to
                  lightweight ultrabooks for students and everyday users. We
                  carry leading brands including Dell, HP, Lenovo, Apple, and
                  ASUS.
                </p>
                <ul>
                  <li>Gaming laptops</li>
                  <li>Business workstations</li>
                  <li>Student-friendly options</li>
                  <li>Accessories and upgrades</li>
                </ul>
              </div>
              <div className="category-image">
                <img
                  src="/images/laptops-display.jpg"
                  alt="Premium laptops collection"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="team-description">
            Our team of tech enthusiasts and customer service professionals is
            here to help you find the perfect device and provide ongoing support
            for all your technology needs.
          </p>
          <div className="team-stats">
            <div className="stat">
              <h3>8+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>10,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Brands Available</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect Device?</h2>
            <p>Visit our store or browse our online collection today</p>
            <div className="cta-buttons">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
