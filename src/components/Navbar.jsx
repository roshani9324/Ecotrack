import { useState } from "react";
import { Leaf, Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">
            <Leaf size={23} />
          </span>
          <span>
            Eco<span>Track</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile CTA */}
          <a href="#contact" className="mobile-cta" onClick={closeMenu}>
            Get Started <ArrowUpRight size={17} />
          </a>
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-cta">
          Get Started
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
