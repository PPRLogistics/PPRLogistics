import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImg from '../assets/logo2.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-200 ease-in-out ${
        isScrolled
          ? 'shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-gray-100'
          : 'shadow-[0_2px_12px_rgba(0,0,0,0.05)] border-b border-gray-100/80'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] md:h-[80px] flex items-center justify-between gap-6">
        
        {/* Logo Container (~20-25% width) */}
        <div className="flex items-center flex-shrink-0 w-auto max-w-[260px] md:max-w-[320px]">
          <Link to="/" className="flex items-center group focus:outline-none">
            <img
              src={logoImg}
              alt="PPR Logistics Logo"
              className="h-[38px] sm:h-[42px] lg:h-[48px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 lg:space-x-9 xl:space-x-10">
          {navLinks.map((link) => {
            const isActive = link.submenu
              ? location.pathname.startsWith(link.path)
              : location.pathname === link.path;

            return (
              <div key={link.name} className="relative group/nav py-2 flex items-center">
                {link.submenu ? (
                  <button
                    className={`flex items-center space-x-1.5 font-semibold text-[15px] transition-colors duration-200 ${
                      isActive
                        ? 'text-primary font-bold'
                        : 'text-slate-700 hover:text-primary'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={15} className="transition-transform duration-200 group-hover/nav:rotate-180 opacity-80" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative font-semibold text-[15px] transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-primary font-bold after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-[2.5px] after:bg-primary after:rounded-full'
                        : 'text-slate-700 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Submenu Dropdown */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 hidden group-hover/nav:block animate-fade-in z-50">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className={`block px-4 py-2.5 text-sm font-medium transition-all duration-150 hover:bg-primary/5 hover:text-primary hover:translate-x-1 ${
                          location.pathname === sub.path
                            ? 'text-primary bg-primary/5 font-semibold'
                            : 'text-slate-600'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action CTA Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Order Transport
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-700 hover:text-primary focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl py-4 px-6 transition-all duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex justify-between items-center w-full font-semibold text-slate-800 py-2.5 border-b border-gray-100 text-[15px]"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180 text-primary' : 'text-slate-400'
                        }`}
                      />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/30 ml-1">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block py-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
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
                    className={`block font-semibold text-[15px] py-2.5 border-b border-gray-100 ${
                      location.pathname === link.path
                        ? 'text-primary font-bold'
                        : 'text-slate-800 hover:text-primary'
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
              <div className="text-center text-xs text-slate-500 space-y-1 pt-2">
                <p>+993 65892496</p>
                <p>info@prplogistic.com</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
