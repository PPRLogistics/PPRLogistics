import React from 'react';
import { Train, Shield, Award, HelpCircle, ArrowRight, Layers, Map } from 'lucide-react';
import InquiryForm from '../../components/InquiryForm';

export default function RailTransport() {
  const specs = [
    { title: 'Extensive Coverage', desc: 'Direct rail connections to key Central Asia, Caucasus, Europe, and China destinations.' },
    { title: 'Diverse Fleet', desc: 'Covered wagons, flatbeds for containers, reefer wagons, liquid tanks, and heavy-duty oversized wagons.' },
    { title: 'Cargo Expertise', desc: 'Petrochemicals, bulk raw materials, industrial machinery, food products, and vehicles.' },
    { title: 'Value Added Services', desc: 'Customs clearance coordination, warehousing, cargo insurance, and daily wagon tracking.' },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-navy-dark to-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white/10 px-4 py-1 rounded-full">
            Specialized Cargo Shipping
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <Train size={36} /> Rail Transport
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Economical and eco-friendly long-haul bulk shipping connecting Central Asia, China, and Europe.
          </p>
        </div>
      </section>

      {/* Detail Block */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-navy-dark leading-tight">
            International Rail Freight Forwarding
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            PRP is a leading provider of international rail freight services, offering secure, efficient, and cost-effective transport solutions across major trade corridors. With a modern fleet, specialized expertise, and strong partnerships, PRP connects businesses to Central Asia, the Caucasus, Afghanistan, Pakistan, Turkey, Russia, China, and Europe.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Rail freight is the most economical solution for large volumes over long distances. It offers high capacity to move significant loads in a single operation, with lower fuel consumption and a reduced carbon footprint compared to road transport.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {specs.map((item) => (
              <div key={item.title} className="space-y-1">
                <h4 className="font-bold text-navy-dark text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Image decoration */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-150/50">
          <img
            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800"
            alt="Cargo train freight logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/65 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-white/10 px-3 py-1 rounded-full border border-white/10">
              SMGS Convention Standards
            </span>
          </div>
        </div>
      </section>

      {/* Inquiry Form Block */}
      <section className="max-w-7xl mx-auto px-6 bg-neutral-grey py-16 border-y border-gray-150/30">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl font-extrabold text-navy-dark">Rail Freight Inquiry</h2>
          <p className="text-gray-500 text-xs">
            Submit your cargo specifications, wagon type requirements, and routes for a detailed proposal.
          </p>
        </div>
        <InquiryForm serviceType="Rail Transport" />
      </section>
    </div>
  );
}
