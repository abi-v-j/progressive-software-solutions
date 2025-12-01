import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './UI';

// If you're not in Next.js, use a normal <img>
const Logo = () => (
  <img
    src="/logo.png"
    alt="EduPlatform Logo"
    width={200}
    height={40}
  />
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Optimized scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 10 && !isScrolled) setIsScrolled(true);
      if (y <= 10 && isScrolled) setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/90 backdrop-blur-lg py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? 'text-brand font-bold'
                    : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Button asLink="/contact" variant="primary" size="sm">
              Enroll Now
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="text-gray-600 hover:text-brand transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute w-full left-0 top-full">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-brand'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-brand'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Button asLink="/contact" variant="primary" className="w-full mt-3">
              Enroll Now
            </Button>

            <div className="flex items-center justify-center text-gray-500 text-sm mt-2">
              <Phone size={16} className="mr-2" />
              +1 (555) 123-4567
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
