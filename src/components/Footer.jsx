import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp, PhoneCall, Shield, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo3.png';

const navSections = [
  {
    label: 'Company',
    links: [
      { name: 'Home',    path: '/' },
      { name: 'About PPR', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  {
    label: 'Services',
    links: [
      { name: 'Road Freight',        path: '/services/road' },
      { name: 'Rail & Wagon Freight', path: '/services/rail' },
      { name: 'Express Air Cargo',   path: '/services/air' },
      { name: 'Ocean Freight',       path: '/services/ocean' },
      { name: 'All Services',        path: '/services' },
    ],
  },
  {
    label: 'Network',
    links: [
      { name: 'Trade Corridors',  path: '/routes' },
      { name: 'Global Routes',    path: '/routes' },
    ],
  },
];

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{ background: 'var(--color-navy)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
      className="text-slate-400 font-sans"
    >
      {/* ── Main footer grid ── */}
      <div className="container-site pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand column — 4 cols */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block focus:outline-none">
              <img
                src={logoImg}
                alt="PPR Logistics"
                className="h-10 w-auto object-contain"
                style={{ filter: 'brightness(1)' }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-300 max-w-xs">
              PPR International Transport &amp; Logistics — specialist freight forwarder
              covering road, rail, sea, and air across Central Asia, the Middle East,
              Russia, and Europe.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(232,93,4,0.10)',
                color: 'var(--color-primary-light)',
                border: '1px solid rgba(232,93,4,0.18)',
              }}
            >
              <Shield size={13} style={{ color: 'var(--color-primary)' }} />
              Licensed &amp; SMGS/CMR Certified Carrier
            </div>
          </div>

          {/* Nav sections — 2 cols each */}
          {navSections.map((section) => (
            <div key={section.label} className="lg:col-span-2">
              <h5
                className="text-white text-xs font-bold uppercase tracking-widest mb-5"
                style={{ letterSpacing: '0.1em' }}
              >
                {section.label}
              </h5>
              <ul className="space-y-2.5">
                {section.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.path}
                      className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                        style={{ color: 'var(--color-primary)' }}
                      />
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column — 2 cols */}
          <div className="lg:col-span-2">
            <h5
              className="text-white text-xs font-bold uppercase tracking-widest mb-5"
              style={{ letterSpacing: '0.1em' }}
            >
              Contact
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+99365892496"
                  className="flex items-start gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
                >
                  <PhoneCall
                    size={15}
                    className="shrink-0 mt-0.5"
                    style={{ color: 'var(--color-primary)' }}
                  />
                  <div>
                    <p className="font-medium text-slate-300">Dispatch Hotline</p>
                    <p className="text-xs mt-0.5">+993 65892496</p>
                    <p className="text-xs">+98 9159161665</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <Phone
                    size={15}
                    className="shrink-0 mt-0.5"
                    style={{ color: 'var(--color-primary)' }}
                  />
                  <div>
                    <p className="font-medium text-slate-300">WhatsApp</p>
                    <p className="text-xs mt-0.5">+971 50 655 1006</p>
                    <p className="text-xs">+995 555 442557</p>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="mailto:info@prplogistic.com"
                  className="flex items-start gap-3 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <Mail
                    size={15}
                    className="shrink-0 mt-0.5"
                    style={{ color: 'var(--color-primary)' }}
                  />
                  <div>
                    <p className="font-medium text-slate-300">Email</p>
                    <p className="text-xs mt-0.5 underline decoration-slate-700 hover:decoration-current">
                      info@prplogistic.com
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Office addresses strip ── */}
        <div
          className="mt-12 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-start gap-3">
            <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
            <div>
              <p className="text-white text-xs font-semibold mb-0.5">Turkmenistan Office</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                334, 1958 (Andalyp) Street, Berkararlyk District, Ashgabat, Turkmenistan
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: 'var(--color-primary-light)' }} />
            <div>
              <p className="text-white text-xs font-semibold mb-0.5">Emirates Office</p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Unit 7, 20th Floor, Prime Tower, Business Bay, Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} PPR International Transport &amp; Logistics Co. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-slate-500 text-xs hidden sm:inline">Enterprise Logistics Architecture</span>
            <a
              href="#top"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
