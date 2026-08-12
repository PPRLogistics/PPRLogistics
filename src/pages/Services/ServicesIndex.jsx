import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Plane, Anchor, Train, ArrowRight } from 'lucide-react';

export default function ServicesIndex() {
  const serviceCards = [
    {
      title: 'International Road Freight',
      category: 'Land Fleet & Cross-Border Dispatch',
      badge: 'CMR & TIR Carnet Certified',
      icon: <Truck className="text-primary" size={26} />,
      whatItIs: 'High-capacity tilt trailers, refrigerated trucks (reefers), and heavy-haul low-beds operating across Central Asia, Caucasus, Middle East, Turkey, Russia, and Europe.',
      targetCustomer: 'Agricultural exporters, pharmaceutical manufacturers, heavy machinery suppliers, and retail distributors requiring direct door delivery.',
      pprValue: 'Direct border clearance assistance, daily GPS telematics tracking, refrigerated temperature compliance, and SLA route dispatch.',
      metrics: ['Door-to-Door Delivery', 'Temperature Controlled', 'TIR Border Transit'],
      link: '/services/road',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Express Air Transport Solutions',
      category: 'Time-Critical Aviation Freight',
      badge: 'IATA Priority Flight Slots',
      icon: <Plane className="text-primary" size={26} />,
      whatItIs: 'Priority air cargo, airport-to-airport express flights, and dedicated charter flights for ultra time-sensitive and high-value shipments.',
      targetCustomer: 'Pharmaceutical companies, emergency spare parts distributors, perishables, and high-value electronics manufacturers needing rapid arrival.',
      pprValue: 'SLA-guaranteed express flight booking, priority customs handling at airport terminals, cold-chain temperature control, and 24/7 flight tracking.',
      metrics: ['Express Charters', 'Cold-Chain Certified', 'Airport Priority'],
      link: '/services/air',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Maritime Ocean Container Freight',
      category: 'Global Container Forwarding',
      badge: '300+ Active Port Corridors',
      icon: <Anchor className="text-primary" size={26} />,
      whatItIs: 'Full Container Load (FCL) and Less than Container Load (LCL) maritime freight forwarding across 520 global ports in 155 countries.',
      targetCustomer: 'Global import/export enterprises, FMCG distributors, manufacturing OEMs, and raw material suppliers trading across major sea lanes.',
      pprValue: 'Strategic carrier capacity contracts, portside handling, container optimization, bill of lading management, and seamless intermodal transfer.',
      metrics: ['FCL & LCL Consolidation', '520+ Global Ports', 'Portside Customs'],
      link: '/services/ocean',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'International Rail & Wagon Freight',
      category: 'Heavy Bulk & Wagon Fleets',
      badge: 'SMGS Convention Standardized',
      icon: <Train className="text-primary" size={26} />,
      whatItIs: 'Heavy-duty wagon fleets, covered hoppers, container flatbeds, and reefer rail cars connecting Central Asia, China, Russia, Turkey, and Europe.',
      targetCustomer: 'Bulk commodity traders, steel and mineral exporters, chemical industries, and automotive suppliers requiring high-volume economical transit.',
      pprValue: 'Direct wagon fleet allocation, intermodal rail-to-sea & rail-to-road hub transfers, SMGS border clearance, and lower carbon footprint per ton-km.',
      metrics: ['Bulk Wagon Fleets', 'China-Europe Rail Corridor', 'SMGS Certified'],
      link: '/services/rail',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Page Header Banner */}
      <section className="bg-[#0b132b] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200 bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block">
            Enterprise Transport Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Transport Capabilities</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            PPR International Transport provides high-capacity freight forwarding, custom clearance, wagon allocation, and intermodal logistics planning.
          </p>
        </div>
      </section>

      {/* Services Showcase Cards */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        {serviceCards.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col lg:flex-row items-stretch gap-10 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md card-hover-elevation group ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image container */}
            <div className="w-full lg:w-5/12 aspect-video lg:aspect-auto min-h-[260px] rounded-2xl overflow-hidden shadow-md relative shrink-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md text-blue-300 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-white/15">
                {service.badge}
              </div>
            </div>

            {/* Content container */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">{service.category}</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">{service.title}</h2>
                  </div>
                </div>

                {/* 3 Explicit Communication Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-1">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-primary font-extrabold uppercase tracking-wider text-[10px] block">Capability Scope</span>
                    <p className="text-slate-600 leading-relaxed">{service.whatItIs}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-primary font-extrabold uppercase tracking-wider text-[10px] block">Target Clients</span>
                    <p className="text-slate-600 leading-relaxed">{service.targetCustomer}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-primary font-extrabold uppercase tracking-wider text-[10px] block">PPR Advantage</span>
                    <p className="text-slate-600 leading-relaxed">{service.pprValue}</p>
                  </div>
                </div>

                {/* Metric Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.metrics.map((m) => (
                    <span key={m} className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                      ✓ {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors cursor-pointer group/btn"
                >
                  Explore Mode Specifications
                  <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
