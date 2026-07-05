import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function ThemeWrapper({ children, isDarkMode, setIsDarkMode }) {
  const navLinkStyle = ({ isActive }) => ({
    padding: '8px 20px',
    borderRadius: '20px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: isActive 
      ? (isDarkMode ? 'rgba(255, 117, 143, 0.3)' : 'var(--primary)') 
      : 'transparent',
    color: isActive 
      ? (isDarkMode ? '#ffe5ec' : '#ffffff') 
      : 'var(--text-main)',
    fontWeight: isActive ? '700' : '500',
    border: isActive ? '1px solid var(--accent)' : '1px solid transparent'
  });

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'} style={{ minHeight: '100vh', width: '100%' }}>

      <nav className="navbar">
        <div className="nav-links" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <NavLink to="/" style={navLinkStyle}>Home</NavLink>
          <NavLink to="/about" style={navLinkStyle}>About</NavLink>
          <NavLink to="/education" style={navLinkStyle}>Education</NavLink>
          <NavLink to="/projects" style={navLinkStyle}>Projects</NavLink>
          <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>
        </div>

        <button className="btn-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '🌸 Light Mode' : '🖤 Dark Mode'}
        </button>
      </nav>

      <main style={{ minHeight: 'calc(100vh - 160px)' }}>
        {children}
      </main>

      <footer>
        &copy; 2026 Anastasya Br Ginting ✨
      </footer>
      
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <ThemeWrapper isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
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