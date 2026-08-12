import React from 'react';
import { Train, CheckCircle2 } from 'lucide-react';
import InquiryForm from '../../components/InquiryForm';

export default function RailTransport() {
  const specs = [
    { title: 'Extensive Coverage', desc: 'Direct rail connections to key Central Asia, Caucasus, Europe, and China destinations.' },
    { title: 'Diverse Fleet Options', desc: 'Covered wagons, flatbeds for containers, reefer wagons, liquid tanks, and heavy-duty oversized wagons.' },
    { title: 'Cargo Specialization', desc: 'Petrochemicals, bulk raw materials, industrial machinery, food products, and vehicles.' },
    { title: 'Value-Added Services', desc: 'Customs clearance coordination, warehousing, cargo insurance, and daily wagon tracking.' },
  ];

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Page Header Banner */}
      <section className="bg-[#0b132b] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200 bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block">
            Specialized Wagon & Rail Shipping
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <Train size={36} className="text-primary-light" /> Rail Transport Solutions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Economical and eco-friendly long-haul bulk shipping connecting Central Asia, China, Russia, and Europe.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10 inline-block">
              Wagon & Container Logistics
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              International Rail Freight Forwarding
            </h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            PRP is a leading provider of international rail freight services, offering secure, efficient, and cost-effective transport solutions across major trade corridors. With a modern fleet, specialized expertise, and strong partnerships, PPR connects businesses to Central Asia, the Caucasus, Afghanistan, Pakistan, Turkey, Russia, China, and Europe.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Rail freight is the most economical solution for large volumes over long distances. It offers high capacity to move significant loads in a single operation, with lower fuel consumption and a reduced carbon footprint compared to road transport.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {specs.map((item) => (
              <div key={item.title} className="space-y-1.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Image decoration */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800"
            alt="Cargo train freight logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="text-[11px] uppercase font-bold tracking-widest text-blue-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              SMGS Convention & Wagon Fleet Operations
            </span>
          </div>
        </div>
      </section>

      {/* Inquiry Form Block */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-100/70 p-6 sm:p-12 rounded-3xl border border-slate-200/80 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Rate Calculation</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Rail Freight Inquiry Form</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Submit your cargo specifications, wagon type requirements, and routes for a detailed proposal.
            </p>
          </div>
          <InquiryForm serviceType="Rail Transport" />
        </div>
      </section>
    </div>
  );
}
