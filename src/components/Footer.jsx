import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp, PhoneCall, Shield, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo2.png';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b132b] text-slate-300 pt-16 pb-8 border-t border-slate-800 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Company Profile */}
        <div className="space-y-5">
          <Link to="/" className="inline-block focus:outline-none">
            <img 
              src={logoImg} 
              alt="PPR Logistics" 
              className="h-[48px] w-auto object-contain bg-transparent border-none shadow-none p-0 m-0" 
            />
          </Link>
          <p className="text-xs leading-relaxed text-slate-400">
            PPR International Transport & Logistics Co. operates extensively in road, rail, sea, air, and multimodal freight forwarding. Delivering SLA-backed, secure global transport across Central Asia, Dubai, Europe, and Asia-Pacific trade corridors.
          </p>
          <div className="flex items-center gap-2 pt-1 text-[11px] text-blue-300 font-medium bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
            <Shield size={14} className="text-primary-light shrink-0" />
            <span>Fully Licensed & SMGS/CMR Certified Carrier</span>
          </div>
        </div>

        {/* Quick Links & Services */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5 pb-2 border-b border-slate-800/80 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Transport Services
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <Link to="/services/road" className="hover:text-primary-light transition-colors flex items-center gap-1.5 group">
                <ChevronRight size={12} className="text-slate-600 group-hover:text-primary-light transition-colors" />
                International Road Freight
              </Link>
            </li>
            <li>
              <Link to="/services/rail" className="hover:text-primary-light transition-colors flex items-center gap-1.5 group">
                <ChevronRight size={12} className="text-slate-600 group-hover:text-primary-light transition-colors" />
                Rail & Wagon Transport
              </Link>
            </li>
            <li>
              <Link to="/services/air" className="hover:text-primary-light transition-colors flex items-center gap-1.5 group">
                <ChevronRight size={12} className="text-slate-600 group-hover:text-primary-light transition-colors" />
                Express Air Cargo Solutions
              </Link>
            </li>
            <li>
              <Link to="/services/ocean" className="hover:text-primary-light transition-colors flex items-center gap-1.5 group">
                <ChevronRight size={12} className="text-slate-600 group-hover:text-primary-light transition-colors" />
                Ocean & Sea Freight Forwarding
              </Link>
            </li>
            <li>
              <Link to="/routes" className="hover:text-primary-light transition-colors flex items-center gap-1.5 group pt-1">
                <ChevronRight size={12} className="text-slate-600 group-hover:text-primary-light transition-colors" />
                Trade Corridors & Network Routes
              </Link>
            </li>
          </ul>
        </div>

        {/* Dispatch Contact Info */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5 pb-2 border-b border-slate-800/80 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            24/7 Dispatch Desk
          </h4>
          <ul className="space-y-4 text-xs">
            <li className="flex items-start gap-3">
              <PhoneCall size={16} className="text-primary-light mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-200">Hotline Phone Numbers:</p>
                <p className="text-slate-400 mt-0.5">+993 65892496</p>
                <p className="text-slate-400">+98 9159161665</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-primary-light mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-200">Direct WhatsApp Desk:</p>
                <p className="text-slate-400 mt-0.5">+971 50 655 1006</p>
                <p className="text-slate-400">+995 555 442557</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="text-primary-light mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-200">General Inquiries:</p>
                <a href="mailto:info@prplogistic.com" className="hover:text-primary-light transition-colors text-slate-400 underline decoration-slate-700">
                  info@prplogistic.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Global Operations Hubs */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5 pb-2 border-b border-slate-800/80 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Global Operations Hubs
          </h4>
          <ul className="space-y-4 text-xs">
            <li className="flex gap-3">
              <MapPin size={16} className="text-primary-light mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-200">Turkmenistan Office:</p>
                <p className="text-slate-400 leading-relaxed mt-0.5">
                  334, 1958 (Andalyp) Street, Berkararlyk District, Ashgabat, Turkmenistan
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="text-primary-light mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-200">Emirates Office:</p>
                <p className="text-slate-400 leading-relaxed mt-0.5">
                  Unit 7, 20th Floor, Prime Tower, Business Bay, Dubai, United Arab Emirates
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom copyright and scroll */}
      <div className="border-t border-slate-800/80 pt-6 mt-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} PPR International Transport & Logistics Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-500 hidden sm:inline">Enterprise Logistics Architecture</span>
            <a
              href="#top"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center shadow-lg transition-all duration-200 border border-slate-700"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
