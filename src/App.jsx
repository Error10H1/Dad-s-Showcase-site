/* ============================================
   BUSINESS SHOWCASE WEBSITE - MULTI-PAGE
   
   EASY EDITING GUIDE:
   - Edit page content in /src/pages/ folder
   - Each page has clearly marked sections to edit
   - Navigation links are defined below
   ============================================ */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { applyTextColors } from './data/textColors';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Apply global text colors on mount
  useEffect(() => {
    applyTextColors();
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  /* ==========================================
     EDIT NAVIGATION HERE
     Add or remove links as needed
     ========================================== */
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  /* ==========================================
     EDIT BUSINESS NAME HERE
     ========================================== */
  const businessName = "Michael's Portfolio";

  return (
    <Router>
      <div className="app">
        {/* NAVIGATION BAR */}
        <nav className="navbar">
          <div className="logo">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={handleLinkClick}>
              {businessName}
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Navigation Links */}
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} onClick={handleLinkClick}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>
        )}

        {/* PAGE ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:projectId" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
