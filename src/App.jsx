import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function ThemeWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkStyle = ({ isActive }) => ({
    padding: '8px 24px',
    borderRadius: '25px',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    fontWeight: isActive ? '700' : '500',
    letterSpacing: '1px',

    backgroundColor: isActive ? '#F5E6CA' : 'transparent',
    color: isActive ? '#2A080C' : '#F5E6CA', 

    border: isActive ? '2px solid #ffffff' : '1px solid rgba(245, 230, 202, 0.3)',
    boxShadow: isActive ? '0 0 20px rgba(245, 230, 202, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.5)' : 'none',
  });

  return (
    <div className="portfolio-theme" style={{ minHeight: '100vh', width: '100%' }}>
      
      <nav className="navbar">
        <div className="nav-brand dynamic-crimson-blink">
          Anastasya
        </div>

        <div className="hamburger-text-icon" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>

        <div className={`nav-container ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <NavLink to="/" style={navLinkStyle} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" style={navLinkStyle} onClick={closeMenu}>About</NavLink>
            <NavLink to="/education" style={navLinkStyle} onClick={closeMenu}>Education</NavLink>
            <NavLink to="/projects" style={navLinkStyle} onClick={closeMenu}>Projects</NavLink>
            <NavLink to="/contact" style={navLinkStyle} onClick={closeMenu}>Contact</NavLink>
          </div>
        </div>
      </nav>

      <main style={{ minHeight: 'calc(100vh - 160px)', paddingTop: '100px', paddingBottom: '40px' }}>
        {children}
      </main>

      <footer>
        &copy; 2026 Anastasya Br Ginting
      </footer>
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeWrapper>
    </Router>
  );
}

export default App;