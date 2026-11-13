import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* LEFT CONTENT */}
        <div className="contact-info">
          <span className="section-tag">GET IN TOUCH</span>

          <h2>
            Let's Build a<span> Greener Future </span>
            Together.
          </h2>

          <p className="contact-description">
            Ready to make your waste management smarter? Connect with our team
            and discover how EcoTrack can help your organization become more
            sustainable.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-icon">
                <Mail size={21} />
              </div>

              <div>
                <h4>Email Us</h4>
                <p>hello@ecotrack.example</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Phone size={21} />
              </div>

              <div>
                <h4>Call Us</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin size={21} />
              </div>

              <div>
                <h4>Our Location</h4>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form-card">
          <h3>Request a Free Demo</h3>

          <p className="form-description">
            Fill out the form and our team will get in touch.
          </p>

          {success && (
            <div className="success-message" role="status">
              <CheckCircle size={20} />
              Thank you! Your demo request has been submitted.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Full Name</label>

              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>

              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-company">Organization Name</label>

              <input
                type="text"
                id="contact-company"
                name="company"
                placeholder="Enter organization name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your requirements..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
              />
            </div>

            <button type="submit" className="contact-submit">
              Request a Demo
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
