import React from 'react';
import { Truck, CheckCircle2 } from 'lucide-react';
import InquiryForm from '../../components/InquiryForm';

export default function RoadTransport() {
  const points = [
    { title: 'Cross-Border Corridors', desc: 'Direct road routes connecting Turkey, Middle East, Caucasus, Russia, Central Asia, and Europe.' },
    { title: 'Specialized Trailer Fleets', desc: 'Refrigerated trucks (reefers), tilt trailers, flatbeds, and heavy load low-bed trailers.' },
    { title: 'Custom Clearance Care', desc: 'Full assistance at border terminals, transit declarations (TIR Carnet, T1/T2), and document handling.' },
    { title: 'Tracking & Telematics', desc: 'Real-time GPS tracking and temperature monitoring updates throughout the road journey.' },
  ];

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Page Header Banner */}
      <section className="bg-[color:var(--color-navy-dark)] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[color:var(--color-primary)]/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[color:var(--color-primary)] bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block">
            Door-to-Door Delivery
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <Truck size={36} className="text-primary-light" /> International Road Transport
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Reliable road shipping connecting Central Asia, Caucasus, Middle East, and European trade centers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10 inline-block">
              Full & Partial Truckloads (FTL/LTL)
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Flexible Cross-Border Road Freight
            </h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            PRP is a trusted leader in international road freight, connecting markets across Central Asia, the Caucasus, the Middle East, Turkey, Russia, and Europe. With a state-of-the-art fleet and certified expertise, we move everything from perishables and pharmaceuticals to hazardous, heavy-lift, and oversized cargo.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our road transport services guarantee flexible routing, consolidated door-to-door delivery, and full security. We coordinate TIR transits, manage custom clearance at border gates, and ensure temperature controls for delicate shipments.
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
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800"
            alt="Logistics transport truck on road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-dark)]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[color:var(--color-primary)] bg-white/10 px-3 py-1 rounded-full border border-white/15">
              TIR Carnet & CMR Convention Compliance
            </span>
          </div>
        </div>
      </section>

      {/* Inquiry Form Block */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-100/70 p-6 sm:p-12 rounded-3xl border border-slate-200/80 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="badge mx-auto">Rate Calculation</div>
            <h2 className="text-3xl font-extrabold text-slate-900">Road Transport Inquiry Form</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Submit your trailer preferences, truck cargo details, and border custom routes for an estimate.
            </p>
          </div>
          <InquiryForm serviceType="Road Transport" />
        </div>
      </section>
    </div>
  );
}
