import React from 'react';
import { Anchor, Shield, Award, HelpCircle, Layers } from 'lucide-react';
import InquiryForm from '../../components/InquiryForm';

export default function OceanTransport() {
  const containerSpecs = [
    { title: 'Global Port Connections', desc: 'Over 300 active shipping routes and 520 ports across 155 countries.' },
    { title: 'Specialized Dry Containers', desc: 'Standard 20’ and 40’ dry vans, 40’ high-cubes, open-tops, and flat-racks.' },
    { title: 'End-to-End Intermodal Logistics', desc: 'Pre-carriage, custom clearance, port handling, ocean transit, and last-mile delivery.' },
    { title: 'Cargo Protection Services', desc: 'Comprehensive cargo protection policies and security audits for high-value dry goods.' },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-navy-dark to-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white/10 px-4 py-1 rounded-full">
            Global Maritime Freight
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <Anchor size={36} /> Ocean Transport
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Flexible containerized ocean freight connecting major global ports and trading terminals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-navy-dark leading-tight">
            Dry Cargo Shipping Made Simple and Secure
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            With extensive experience and the strong capacity of our global fleet, PPR International Transport & Logistics Co. is recognized as a trusted partner in shipping dry cargo worldwide. Our network covers more than 300 routes and 520 ports across 155 countries, giving you reliable access to your core markets. Enjoy consistent and dependable services, powered by the scale and efficiency of our operations.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Whether you are moving agricultural commodities, industrial raw materials, or retail merchandise, our intermodal shipping container solutions ensure that your cargo remains securely packed, protected, and monitored throughout its ocean transit.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {containerSpecs.map((spec) => (
              <div key={spec.title} className="space-y-1">
                <h4 className="font-bold text-navy-dark text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {spec.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Image decoration */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-150/50">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800"
            alt="Ocean cargo ship shipping containers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/65 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-white/10 px-3 py-1 rounded-full border border-white/10">
              FCL & LCL Sea Shipping
            </span>
          </div>
        </div>
      </section>

      {/* Inquiry Form Block */}
      <section className="max-w-7xl mx-auto px-6 bg-neutral-grey py-16 border-y border-gray-150/30">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl font-extrabold text-navy-dark">Sea Freight Inquiry Form</h2>
          <p className="text-gray-500 text-xs">
            Submit your container counts, load types (FCL/LCL), and port directions to get a sea freight offer.
          </p>
        </div>
        <InquiryForm serviceType="Ocean Transport" />
      </section>
    </div>
  );
}
