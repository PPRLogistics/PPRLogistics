import React from 'react';
import { Plane, CheckCircle2 } from 'lucide-react';
import InquiryForm from '../../components/InquiryForm';

export default function AirTransport() {
  const points = [
    { title: 'Time-Critical Shipments', desc: 'Fastest delivery option for pharmaceuticals, perishables, and high-value cargo.' },
    { title: 'Secure & Insured', desc: 'Strict warehouse safety controls and end-to-end cargo insurance policies.' },
    { title: 'Global Network Access', desc: 'Partnerships with major international airlines to coordinate flights worldwide.' },
    { title: 'Custom Clearance Assistance', desc: 'Documentation handling and priority customs clearance at airport terminal hubs.' },
  ];

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Page Header Banner */}
      <section className="bg-[color:var(--color-navy-dark)] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[color:var(--color-primary)]/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[color:var(--color-primary)] bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block">
            Express Air Freight
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <Plane size={36} className="text-primary-light" /> Air Transport Solutions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Fast, reliable, and highly secure air freight shipping for time-sensitive cargo across global air routes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10 inline-block">
              Priority Cargo Handling
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Premium Air Freight Solutions
            </h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            PRP offers fast, reliable, and flexible air freight for time-sensitive and high-value cargo like pharmaceuticals and perishables. With a dedicated team, we ensure secure, transparent, and efficient delivery from start to finish—making PPR your trusted air cargo partner.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Whether you are shipping emergency medical items, high-tech electronics, or perishables, air freight minimizes transit times and warehousing overhead. We coordinate flight charters, priority cargo slots, and express customs handling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {points.map((pt) => (
              <div key={pt.title} className="space-y-1.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  {pt.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed pl-6">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Image decoration */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
            alt="Cargo plane transit logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-dark)]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[color:var(--color-primary)] bg-white/10 px-3 py-1 rounded-full border border-white/15">
              IATA Standard Handling & Airport Charters
            </span>
          </div>
        </div>
      </section>

      {/* Inquiry Form Block */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-100/70 p-6 sm:p-12 rounded-3xl border border-slate-200/80 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="badge mx-auto">Rate Calculation</div>
            <h2 className="text-3xl font-extrabold text-slate-900">Air Freight Inquiry Form</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Complete the form with origin/destination airports, weights, and commodity info for a flight slot quote.
            </p>
          </div>
          <InquiryForm serviceType="Air Transport" />
        </div>
      </section>
    </div>
  );
}
