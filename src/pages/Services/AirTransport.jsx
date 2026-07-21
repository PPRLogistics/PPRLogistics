import React from 'react';
import { Plane, Calendar, Shield, Award, HelpCircle } from 'lucide-react';
import InquiryForm from '../../components/InquiryForm';

export default function AirTransport() {
  const points = [
    { title: 'Time-Critical Shipments', desc: 'Fastest delivery option for pharmaceuticals, perishables, and high-value cargo.' },
    { title: 'Secure & Insured', desc: 'Strict warehouse safety controls and end-to-end cargo insurance policies.' },
    { title: 'Global Network Access', desc: 'Partnerships with major international airlines to coordinate flights worldwide.' },
    { title: 'Custom Clearance Assistance', desc: 'Documentation handling and priority customs clearance at airport terminal hubs.' },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-navy-dark to-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white/10 px-4 py-1 rounded-full">
            Time-Critical Deliveries
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <Plane size={36} /> Air Transport
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Fast, reliable, and highly secure air freight shipping for time-sensitive cargo.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-navy-dark leading-tight">
            Premium Air Freight Solutions
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            PRP offers fast, reliable, and flexible air freight for time-sensitive and high-value cargo like pharmaceuticals and perishables. With a dedicated team, we ensure secure, transparent, and efficient delivery from start to finish—making PRP your trusted air cargo partner.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Whether you are shipping emergency medical items, high-tech electronics, or perishables, air freight minimizes transit times and warehousing overhead. We coordinate flight charters, priority cargo slots, and express customs handling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {points.map((pt) => (
              <div key={pt.title} className="space-y-1">
                <h4 className="font-bold text-navy-dark text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {pt.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Image decoration */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-150/50">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
            alt="Cargo plane transit logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/65 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-white/10 px-3 py-1 rounded-full border border-white/10">
              IATA Standard Handling
            </span>
          </div>
        </div>
      </section>

      {/* Inquiry Form Block */}
      <section className="max-w-7xl mx-auto px-6 bg-neutral-grey py-16 border-y border-gray-150/30">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl font-extrabold text-navy-dark">Air Freight Inquiry Form</h2>
          <p className="text-gray-500 text-xs">
            Complete the form with origin/destination airports, weights, and commodity info for a flight slot quote.
          </p>
        </div>
        <InquiryForm serviceType="Air Transport" />
      </section>
    </div>
  );
}
