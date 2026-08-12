import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Truck,
  Train,
  Plane,
  Anchor,
  ArrowRight
} from 'lucide-react';
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
        { name: 'International Road Transport', path: '/services/road', icon: <Truck size={18} className="text-primary" />, desc: 'End-to-end road freight across Central Asia & Europe' },
        { name: 'Rail Transport', path: '/services/rail', icon: <Train size={18} className="text-primary" />, desc: 'Bulk & container wagon shipping corridors' },
        { name: 'Air Transport', path: '/services/air', icon: <Plane size={18} className="text-primary" />, desc: 'Express time-critical cargo & charters' },
        { name: 'Ocean Transport', path: '/services/ocean', icon: <Anchor size={18} className="text-primary" />, desc: 'FCL & LCL maritime freight forwarding' },
      ],
    },
    { name: 'Routes', path: '/routes' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 font-sans">
      {/* Top Utility Bar (Enterprise Contact & SLA Info) */}
      <div className="bg-[#0b132b] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Phone size={13} className="text-primary-light shrink-0" />
              <span>+993 65892496</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Mail size={13} className="text-primary-light shrink-0" />
              <a href="mailto:info@prplogistic.com">info@prplogistic.com</a>
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <Clock size={13} className="text-slate-400 shrink-0" />
              <span>24/7 Dispatch Desk</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 bg-primary/20 text-blue-300 px-2.5 py-0.5 rounded-full border border-primary/30 font-medium">
              <ShieldCheck size={12} className="text-primary-light" />
              ISO 9001 & SMGS Standardized
            </span>
            <span className="text-slate-400">Global Corridor Freight</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Logo Container */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center group focus:outline-none">
              <img
                src={logoImg}
                alt="PPR Logistics Logo"
                className="h-[42px] sm:h-[46px] lg:h-[50px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => {
              const isActive = link.submenu
                ? location.pathname.startsWith(link.path)
                : location.pathname === link.path;

              return (
                <div key={link.name} className="relative group/nav py-2 flex items-center">
                  {link.submenu ? (
                    <div className="relative">
                      <Link
                        to={link.path}
                        className={`flex items-center space-x-1.5 text-sm font-semibold transition-colors duration-200 py-1 ${
                          isActive
                            ? 'text-primary font-bold'
                            : 'text-slate-700 hover:text-primary'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={15} className="transition-transform duration-200 group-hover/nav:rotate-180 text-slate-400 group-hover/nav:text-primary" />
                      </Link>

                      {/* Submenu Dropdown Panel */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 hidden group-hover/nav:block animate-fade-in-up z-50">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-100 mb-1">
                          Logistics Modes
                        </div>
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group/sub ${
                              location.pathname === sub.path
                                ? 'bg-primary/5 text-primary font-semibold'
                                : 'hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <div className="p-2 rounded-lg bg-slate-100 group-hover/sub:bg-primary/10 group-hover/sub:text-primary transition-colors shrink-0">
                              {sub.icon}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 group-hover/sub:text-primary transition-colors">
                                {sub.name}
                              </div>
                              <div className="text-xs text-slate-500 font-normal leading-tight mt-0.5">
                                {sub.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${
                        isActive
                          ? 'text-primary font-bold after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-[2.5px] after:bg-primary after:rounded-full'
                          : 'text-slate-700 hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all duration-200 flex items-center gap-2 group active:scale-95"
            >
              Order Transport
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:text-primary hover:bg-slate-200 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl py-5 px-6 animate-fade-in-up">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex justify-between items-center w-full font-bold text-slate-800 py-2.5 border-b border-slate-100 text-base"
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
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/40 ml-1 py-1">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                          >
                            {sub.icon}
                            <span>{sub.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`block font-bold text-base py-2.5 border-b border-slate-100 ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-slate-800 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary-dark text-white text-center font-bold py-3.5 rounded-xl shadow-md text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                Order Transport
                <ArrowRight size={16} />
              </Link>
              <div className="text-center text-xs text-slate-500 space-y-1 pt-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="font-semibold text-slate-700">24/7 Logistics Desk</p>
                <p>Phone: +993 65892496</p>
                <p>Email: info@prplogistic.com</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
