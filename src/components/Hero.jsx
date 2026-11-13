import {
  ArrowRight,
  Play,
  Leaf,
  Recycle,
  Truck,
  TrendingUp,
} from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">
            <Leaf size={16} />
            Smart Waste Management Platform
          </span>

          <h1>
            Make Your City
            <span> Cleaner & Greener.</span>
          </h1>

          <p>
            Manage waste collection smarter with EcoTrack. Monitor collection
            activities, optimize routes and build a cleaner, sustainable future.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-primary-btn">
              Get Started <ArrowRight size={18} />
            </a>

            <a href="#how-it-works" className="hero-secondary-btn">
              <Play size={17} /> How It Works
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-icon">
              <Recycle size={22} />
            </div>
            <div>
              <strong>Smarter Waste Solutions</strong>
              <span>Technology for a greener tomorrow</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="hero-dashboard">
            <div className="dashboard-top">
              <div>
                <span className="dashboard-label">EcoTrack Overview</span>
                <h3>Waste Management</h3>
              </div>
              <span className="live-status">● Live Demo</span>
            </div>

            <div className="dashboard-stats">
              <div className="dashboard-stat">
                <span>Waste Collected</span>
                <h2>
                  2,450 <small>kg</small>
                </h2>
                <p>
                  <TrendingUp size={14} /> Sample dashboard data
                </p>
              </div>

              <div className="dashboard-stat">
                <span>Active Vehicles</span>
                <h2>08</h2>
                <p>
                  <Truck size={14} /> Collection fleet
                </p>
              </div>
            </div>

            <div className="dashboard-map">
              <div className="map-heading">
                <strong>Collection Activity</strong>
                <span>Today's overview</span>
              </div>

              <div className="map-art">
                <div className="map-road road-one"></div>
                <div className="map-road road-two"></div>
                <div className="map-road road-three"></div>
                <div className="map-pin pin-one">
                  <Truck size={17} />
                </div>
                <div className="map-pin pin-two">
                  <Recycle size={17} />
                </div>
                <div className="map-pin pin-three">
                  <Leaf size={17} />
                </div>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card-one">
            <span className="floating-icon">
              <Leaf size={20} />
            </span>
            <div>
              <strong>Eco Friendly</strong>
              <small>Smarter operations</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span className="floating-icon">
              <Truck size={20} />
            </span>
            <div>
              <strong>Route Tracking</strong>
              <small>Fleet overview</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
