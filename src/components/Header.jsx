import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      submenu: [
        { name: 'Rail Transport', path: '/services/rail' },
        { name: 'Air Transport', path: '/services/air' },
        { name: 'International Road Transport', path: '/services/road' },
        { name: 'Ocean Transport', path: '/services/ocean' },
      ],
    },
    { name: 'Routes', path: '/routes' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>


      { /*   Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-white/90 backdrop-blur-md py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl tracking-wider shadow-md transition-transform group-hover:scale-105">
              PPR
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-navy-dark">
                PPR<span className="text-primary">Logistics</span>
              </span>
              <span className="block text-[8px] uppercase tracking-widest text-gray-500 -mt-1 font-semibold">
                Transport & Logistics Co.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/nav">
                {link.submenu ? (
                  <button
                    className={`flex items-center space-x-1 font-medium text-sm transition-colors py-2 ${location.pathname.startsWith(link.path)
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                      }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={14} className="transition-transform group-hover/nav:rotate-185" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium text-sm transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${location.pathname === link.path
                        ? 'text-primary after:w-full'
                        : 'text-gray-700 hover:text-primary'
                      }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Submenu Dropdown */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-150/50 py-3 hidden group-hover/nav:block animate-fade-in">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className={`block px-5 py-2.5 text-sm transition-all hover:bg-primary/5 hover:text-primary hover:translate-x-1 ${location.pathname === sub.path
                            ? 'text-primary bg-primary/5 font-medium'
                            : 'text-gray-600'
                          }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Order Transport
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl py-4 px-6 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex justify-between items-center w-full font-semibold text-gray-800 py-2 border-b border-gray-50"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-primary' : 'text-gray-500'
                            }`}
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/30 ml-1">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block font-semibold py-2 border-b border-gray-50 ${location.pathname === link.path ? 'text-primary' : 'text-gray-800 hover:text-primary'
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  to="/contact"
                  className="bg-primary hover:bg-primary-dark text-white text-center font-bold py-3 rounded-lg shadow-md transition-colors"
                >
                  Order Transport
                </Link>
                <div className="text-center text-xs text-gray-500 space-y-1 pt-2">
                  <p>+993 65892496</p>
                  <p>info@prplogistic.com</p>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
