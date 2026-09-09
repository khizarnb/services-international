import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Container } from './ui/Layout';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our History', path: '/history' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-surface/95 backdrop-blur-md shadow-subtle border-border py-3' : 'bg-transparent py-5'}`}>
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">
            <div className={`p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'bg-primary' : 'bg-primary/90'}`}>
              <Globe className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className={`font-bold text-xl tracking-tight leading-none block transition-colors duration-300 ${scrolled ? 'text-text-primary' : 'text-white'}`}>
                Services
              </span>
              <span className="font-bold text-sm tracking-widest uppercase text-primary block leading-none mt-0.5">
                International
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => `
                  px-4 py-2 font-semibold text-sm rounded-md transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${scrolled 
                    ? isActive ? 'text-primary bg-primary/5' : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted' 
                    : isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="ml-4 pl-4 border-l border-border/30">
              <Button to="/contact" variant={scrolled ? 'primary' : 'primary'} size="sm">
                Get a Quote
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${scrolled ? 'text-text-primary hover:bg-surface-muted' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-border shadow-medium overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={({ isActive }) => `
                block px-4 py-3 rounded-md font-semibold text-base transition-colors
                ${isActive ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-surface-muted hover:text-text-primary'}
              `}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="mt-4 pt-4 border-t border-border">
            <Button to="/contact" className="w-full justify-center">
              Get a Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
