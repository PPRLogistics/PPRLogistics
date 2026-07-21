import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp, PhoneCall } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-gray-300 pt-16 pb-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Company profile */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl tracking-wider">
              PPR
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                PPR<span className="text-primary">Logistics</span>
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            PPR International Transport & Logistics Co. operates extensively in the fields of road, rail, sea, air, and multimodal freight forwarding. Leveraging its expertise and professional capabilities, the company has successfully provided comprehensive international transport services across transit routes and global destinations.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b border-white/10">Services</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/services/rail" className="hover:text-primary transition-colors">Rail Transport</Link>
            </li>
            <li>
              <Link to="/services/air" className="hover:text-primary transition-colors">Air Transport</Link>
            </li>
            <li>
              <Link to="/services/road" className="hover:text-primary transition-colors">International Road Transport</Link>
            </li>
            <li>
              <Link to="/services/ocean" className="hover:text-primary transition-colors">Ocean Transport</Link>
            </li>
          </ul>
        </div>

        {/* Any questions contact info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b border-white/10">Any Questions?</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <PhoneCall size={16} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-white">Phone numbers:</p>
                <p className="text-gray-400">+993 65892496</p>
                <p className="text-gray-400">+98 9159161665</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-white">WhatsApp:</p>
                <p className="text-gray-400">+971 50 655 1006</p>
                <p className="text-gray-400">+995 555 442557</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="text-primary mt-0.5 shrink-0" />
              <a href="mailto:info@prplogistic.com" className="hover:text-primary transition-colors text-gray-400">
                info@prplogistic.com
              </a>
            </li>
          </ul>
        </div>

        {/* Office addresses */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b border-white/10">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-white">Turkmenistan Office:</p>
                <p className="text-gray-400 leading-relaxed">
                  334, 1958 (Andalyp) Street, Berkararlyk District, Ashgabat, Turkmenistan
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-white">Emirate Office:</p>
                <p className="text-gray-400 leading-relaxed">
                  Unit 7, 20th Floor, Prime Tower, Business Bay, Dubai, United Arab Emirates
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom copyright and back to top */}
      <div className="border-t border-white/10 pt-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} PPR International Transport & Logistics Co. All Rights Reserved.
          </p>
          <a
            href="#top"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
