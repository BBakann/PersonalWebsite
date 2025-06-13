import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Anasayfa', href: '#home' },
    { name: 'Hakkımda', href: '#about' },
    { name: 'Projelerim', href: '#projects' },
    { name: 'Mini Oyunlar', href: '#games' },
    { name: 'İletişim', href: '#contact' },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-brand">
            <a href="#home">Berdan Bakan</a>
          </div>

          {/* Desktop Menu */}
          <div className="nav-menu">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="nav-actions">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 