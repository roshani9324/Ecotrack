import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        {/* Left Content */}
        <div className="about-hero-content">
          <div className="hero-tag">
            <span>🌿</span>
            Smart Solutions for a Cleaner Planet
          </div>

          <h1>
            Smarter Waste
            <br />
            Management.
            <br />
            <span>Greener Tomorrow.</span>
          </h1>

          <p>
            EcoTrack helps you monitor, manage, and reduce waste using smart
            technology — for a cleaner and healthier planet.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-primary-btn">
              Get Started <span>→</span>
            </a>

            <a href="#how-it-works" className="hero-secondary-btn">
              <span>▶</span> Explore How It Works
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="about-hero-visual">
          <div className="hero-image-bg"></div>

          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1000&q=85"
            alt="EcoTrack smart waste management"
            className="hero-main-image"
          />

          <div className="hero-floating-card">
            <span className="floating-icon">♻</span>
            <div>
              <strong>Smart Monitoring</strong>
              <small>Waste management made easier</small>
            </div>
          </div>

          <div className="hero-leaf-decoration">🌱</div>
        </div>
      </div>

      {/* Feature Strip */}
      <div className="hero-feature-strip">
        <div className="hero-feature">
          <span>🌿</span>
          <div>
            <strong>Smart Monitoring</strong>
            <small>Real-time waste insights</small>
          </div>
        </div>

        <div className="hero-feature">
          <span>♻️</span>
          <div>
            <strong>Better Collection</strong>
            <small>Efficient waste management</small>
          </div>
        </div>

        <div className="hero-feature">
          <span>🌍</span>
          <div>
            <strong>Greener Future</strong>
            <small>Cleaner communities</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
