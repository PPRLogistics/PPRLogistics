import React from 'react';
import { Anchor, CheckCircle2 } from 'lucide-react';
import InquiryForm from '../../components/InquiryForm';

export default function OceanTransport() {
  const containerSpecs = [
    { title: 'Global Port Connections', desc: 'Over 300 active shipping routes and 520 ports across 155 countries.' },
    { title: 'Specialized Dry Containers', desc: 'Standard 20’ and 40’ dry vans, 40’ high-cubes, open-tops, and flat-racks.' },
    { title: 'End-to-End Intermodal Logistics', desc: 'Pre-carriage, custom clearance, port handling, ocean transit, and last-mile delivery.' },
    { title: 'Cargo Protection Services', desc: 'Comprehensive cargo protection policies and security audits for high-value dry goods.' },
  ];

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Page Header Banner */}
      <section className="bg-[#0b132b] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200 bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block">
            Global Maritime Freight
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <Anchor size={36} className="text-primary-light" /> Ocean Transport Solutions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Flexible containerized ocean freight connecting major global ports and trading terminals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10 inline-block">
              FCL & LCL Maritime Shipping
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Dry Cargo Shipping Made Simple and Secure
            </h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            With extensive experience and the strong capacity of our global fleet, PPR International Transport & Logistics Co. is recognized as a trusted partner in shipping dry cargo worldwide. Our network covers more than 300 routes and 520 ports across 155 countries, giving you reliable access to your core markets.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Whether you are moving agricultural commodities, industrial raw materials, or retail merchandise, our intermodal shipping container solutions ensure that your cargo remains securely packed, protected, and monitored throughout its ocean transit.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {containerSpecs.map((spec) => (
              <div key={spec.title} className="space-y-1.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  {spec.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed pl-6">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Image decoration */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800"
            alt="Ocean cargo ship shipping containers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="text-[11px] uppercase font-bold tracking-widest text-blue-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              FCL & LCL Port-to-Port Operations
            </span>
          </div>
        </div>
      </section>

      {/* Inquiry Form Block */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-100/70 p-6 sm:p-12 rounded-3xl border border-slate-200/80 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Rate Calculation</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Sea Freight Inquiry Form</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Submit your container counts, load types (FCL/LCL), and port directions to get a sea freight offer.
            </p>
          </div>
          <InquiryForm serviceType="Ocean Transport" />
        </div>
      </section>
    </div>
  );
}
