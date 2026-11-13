import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  // Instagram,
  // Linkedin,
  // Facebook,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-icon">
              <Leaf size={23} />
            </span>
            Eco<span>Track</span>
          </a>

          <p>
            Making waste management smarter, simpler, and more sustainable for a
            better tomorrow.
          </p>

          <div className="footer-socials">
            {/* <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={19} />
            </a> */}

            {/* <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a> */}

            {/* <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={19} />
            </a> */}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About Us</a>
          <a href="#pricing">Pricing</a>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h4>Our Services</h4>

          <a href="#features">Waste Tracking</a>
          <a href="#features">Smart Collection</a>
          <a href="#features">Route Monitoring</a>
          <a href="#features">Eco Analytics</a>
          <a href="#contact">Request a Demo</a>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h4>Contact Us</h4>

          <p>
            <Mail size={17} />
            hello@ecotrack.example
          </p>

          <p>
            <Phone size={17} />
            +91 98765 43210
          </p>

          <p>
            <MapPin size={17} />
            Mumbai, Maharashtra, India
          </p>

          <a href="#contact" className="footer-contact-link">
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EcoTrack. All rights reserved.</p>

        <p>Built for a Greener Tomorrow 🌱</p>
      </div>
    </footer>
  );
}

export default Footer;
