import { Leaf, Recycle, Globe2, TrendingUp, ArrowUpRight } from "lucide-react";

import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-content">
          <span className="about-tag">
            <Leaf size={15} />
            ABOUT ECOTRACK
          </span>

          <h2>
            Technology Today.
            <span> A Greener Tomorrow.</span>
          </h2>

          <p className="about-description">
            EcoTrack is a smart waste management platform designed to help
            businesses and communities simplify waste collection, monitor
            recycling activities and make sustainable decisions.
          </p>

          <div className="about-benefits">
            <div className="benefit-item">
              <div className="benefit-icon">
                <Recycle size={21} />
              </div>

              <div>
                <h4>Smart Waste Management</h4>
                <p>Organize and monitor collection activities.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <TrendingUp size={21} />
              </div>

              <div>
                <h4>Data-Driven Decisions</h4>
                <p>Improve operations using useful insights.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <Globe2 size={21} />
              </div>

              <div>
                <h4>Sustainable Impact</h4>
                <p>Build cleaner and greener communities.</p>
              </div>
            </div>
          </div>

          <a href="#how-it-works" className="about-button">
            Discover How It Works
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* RIGHT 3D VISUAL */}
        <div className="about-visual">
          <div className="visual-glow"></div>

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="earth-3d">
            <div className="earth-content">
              <Globe2 size={105} strokeWidth={1.1} />
              <span>EARTH</span>
            </div>
          </div>

          <div className="floating-card floating-card-one">
            <span className="floating-icon">
              <Leaf size={20} />
            </span>
            <div>
              <strong>Eco Friendly</strong>
              <small>Think Green</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span className="floating-icon">
              <Recycle size={20} />
            </span>
            <div>
              <strong>Recycle More</strong>
              <small>Waste Less</small>
            </div>
          </div>

          <div className="floating-leaf leaf-one">🌿</div>
          <div className="floating-leaf leaf-two">🍃</div>

          <div className="about-stats">
            <strong>100%</strong>
            <span>Commitment to a greener future</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
