import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Award, CheckCircle, ArrowRight, Anchor, Train, Plane, Truck, MapPin } from 'lucide-react';
import BlogSlider from '../components/BlogSlider';
import Reveal from '../components/Reveal';
import heroTruckImg from '../assets/hero-truck.png';
import pprHeroVideo from '../assets/PPR_Video.mp4';

export default function Home() {
  const features = [
    {
      icon: <Clock size={28} className="text-primary" />,
      title: '24/7 Dispatch Control',
      desc: 'Round-the-clock logistical coordination, continuous tracking, and dedicated freight managers for every shipment.',
    },
    {
      icon: <Shield size={28} className="text-primary" />,
      title: 'Cargo Security & Insurance',
      desc: 'Comprehensive cargo insurance, SMGS/CMR standardization, and strict safety protocols across all transit routes.',
    },
    {
      icon: <Award size={28} className="text-primary" />,
      title: 'Certified Customs Compliance',
      desc: 'Fully licensed international freight forwarder with direct border clearance capabilities across major trade hubs.',
    },
    {
      icon: <CheckCircle size={28} className="text-primary" />,
      title: 'SLA-Backed On-Time Delivery',
      desc: 'Punctual schedule execution with optimized route planning to eliminate unnecessary transit delays.',
    },
  ];

  const services = [
    {
      id: 'road',
      title: 'International Road Freight',
      category: 'Land Fleet & Cross-Border Dispatch',
      badge: 'CMR & TIR Carnet Certified',
      icon: <Truck size={24} className="text-blue-400" />,
      whatItIs: 'High-capacity door-to-door tilt trailers, reefers, and heavy-haul low-beds operating across Central Asia, Caucasus, Middle East, Turkey, Russia & Europe.',
      targetCustomer: 'Agricultural exporters, pharmaceutical manufacturers, heavy machinery suppliers, and retail distributors requiring direct door delivery.',
      pprValue: 'Direct border clearance assistance, daily GPS telematics tracking, refrigerated temperature compliance, and SLA route dispatch.',
      metrics: ['Door-to-Door Delivery', 'Temperature Controlled', 'TIR Border Transit'],
      link: '/services/road',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'rail',
      title: 'International Rail & Wagon Freight',
      category: 'Heavy Bulk & Wagon Fleets',
      badge: 'SMGS Convention Standardized',
      icon: <Train size={22} className="text-blue-400" />,
      whatItIs: 'Heavy-duty wagon fleets, covered hoppers, container flatbeds, and reefer rail cars connecting Central Asia, China, Russia, Turkey, and Europe.',
      targetCustomer: 'Bulk commodity traders, steel and mineral exporters, chemical industries, and automotive suppliers requiring high-volume economical transit.',
      pprValue: 'Direct wagon fleet allocation, intermodal rail-to-sea & rail-to-road hub transfers, SMGS border clearance, and lower carbon footprint per ton-km.',
      metrics: ['Bulk Wagon Fleets', 'China-Europe Rail Corridor', 'SMGS Certified'],
      link: '/services/rail',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'air',
      title: 'Express Air Freight Solutions',
      category: 'Time-Critical Aviation Freight',
      badge: 'IATA Priority Flight Slots',
      icon: <Plane size={22} className="text-blue-400" />,
      whatItIs: 'Priority air cargo, airport-to-airport express flights, and dedicated charter flights for ultra time-sensitive and high-value shipments.',
      targetCustomer: 'Pharmaceutical companies, emergency spare parts distributors, perishables, and high-value electronics manufacturers needing rapid arrival.',
      pprValue: 'SLA-guaranteed express flight booking, priority customs handling at airport terminals, cold-chain temperature control, and 24/7 flight tracking.',
      metrics: ['Express Charters', 'Cold-Chain Certified', 'Airport Priority'],
      link: '/services/air',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'ocean',
      title: 'Maritime Ocean Container Freight',
      category: 'Global Container Forwarding',
      badge: '300+ Active Port Corridors',
      icon: <Anchor size={22} className="text-blue-400" />,
      whatItIs: 'Full Container Load (FCL) and Less than Container Load (LCL) maritime freight forwarding across 520 global ports in 155 countries.',
      targetCustomer: 'Global import/export enterprises, FMCG distributors, manufacturing OEMs, and raw material suppliers trading across major sea lanes.',
      pprValue: 'Strategic carrier capacity contracts, portside handling, container optimization, bill of lading management, and seamless intermodal transfer.',
      metrics: ['FCL & LCL Consolidation', '520+ Global Ports', 'Portside Customs'],
      link: '/services/ocean',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=600',
    },
  ];

  const stats = [
    { value: '50+', label: 'Active Trade Corridors' },
    { value: '99.4%', label: 'SLA Delivery Precision' },
    { value: '24/7', label: 'Global Dispatch Desk' },
    { value: '100%', label: 'Insured Freight Transit' },
  ];

  return (
    <div className="space-y-24 pb-20 font-sans">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[660px] max-h-[900px] flex items-center overflow-hidden bg-[#0b132b]">
        {/* Background Hero Video - READ-ONLY UNTOUCHED IMPLEMENTATION */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroTruckImg}
            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          >
            <source src={pprHeroVideo} type="video/mp4" />
          </video>
          {/* Sophisticated multi-layered read-only background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b132b] via-[#0b132b]/80 to-[#0b132b]/35 pointer-events-none z-[1]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-[#0b132b]/40 pointer-events-none z-[1]"></div>
        </div>

        {/* Hero Left Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full py-12">
          <div className="max-w-[620px] text-left space-y-6 text-white animate-fade-in-up">
            
            {/* Category / Context Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-xl border border-white/15 shadow-sm text-slate-200">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                Global Transportation & Logistics
              </span>
            </div>

            {/* Headline Hierarchy: Company -> Category -> Core Promise */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              PPR Logistics
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 tracking-normal mt-2 leading-tight">
                Reliable International Freight Solutions
              </span>
            </h1>

            {/* Subtle Transport Modes Layer */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-slate-300 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15 text-white shadow-sm">
                <Truck size={13} className="text-blue-300 shrink-0" /> Road
              </span>
              <span className="text-slate-500 font-bold">•</span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15 text-white shadow-sm">
                <Train size={13} className="text-blue-300 shrink-0" /> Rail
              </span>
              <span className="text-slate-500 font-bold">•</span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15 text-white shadow-sm">
                <Plane size={13} className="text-blue-300 shrink-0" /> Air
              </span>
              <span className="text-slate-500 font-bold">•</span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15 text-white shadow-sm">
                <Anchor size={13} className="text-blue-300 shrink-0" /> Ocean
              </span>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-[580px]">
              Connecting cross-border supply chains with SLA-backed freight forwarding, custom clearance, and real-time cargo monitoring across Central Asia, Dubai, Europe, and Asia.
            </p>

            {/* CTA Hierarchy: Primary Dominant vs Secondary Subordinate */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-extrabold rounded-xl shadow-xl shadow-primary/30 hover:-translate-y-0.5 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 group active:scale-95 cursor-pointer ring-2 ring-primary/50"
              >
                Request a Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/25 backdrop-blur-md hover:-translate-y-0.5 transition-all text-xs uppercase tracking-wider flex items-center justify-center cursor-pointer hover:border-white/40"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Metrics Ticker Bar */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-[11px] text-slate-300 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-6">
        <Reveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10 inline-block">
              Why Choose PPR Logistics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Safety, Punctuality & Global Cargo Protection
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              By integrating multimodal fleets and deep corridor expertise, PPR delivers high-efficiency logistics solutions across international trade routes.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feat, i) => (
            <Reveal key={feat.title} variant="fade-up" delay={`${i * 70}ms`}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md card-hover-elevation space-y-4 h-full">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="font-extrabold text-lg text-slate-900">{feat.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{feat.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services List Section - Modern Editorial Capabilities */}
      <section className="bg-[#0b132b] text-white py-24 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[160px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
          {/* Header */}
          <Reveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-blue-300 font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block shadow-sm">
                Enterprise Transportation Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Multimodal Logistics Engineered for Enterprise Supply Chains
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                High-capacity freight forwarding modes structured around your exact cargo requirements, industry standards, and global SLA commitments.
              </p>
            </div>
          </Reveal>

          {/* Editorial Card Layout */}
          <div className="space-y-8">
            {/* 1. Featured Service Card: International Road Freight (Hero Split Card) */}
            {services.filter(s => s.id === 'road').map((ser) => (
              <Reveal key={ser.id} variant="fade-up" delay="80ms">
              <div
                className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden hover:border-primary-light/60 transition-all duration-500 group shadow-2xl card-hover-elevation grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image side (5 cols) */}
                <div className="lg:col-span-5 relative overflow-hidden min-h-[300px] lg:min-h-[460px]">
                  <img
                    src={ser.image}
                    alt={ser.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0f172a] opacity-90"></div>
                  <div className="absolute top-5 left-5 bg-slate-950/85 backdrop-blur-md text-blue-300 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/15 shadow-md flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-light"></span>
                    {ser.badge}
                  </div>
                </div>

                {/* Content side (7 cols) */}
                <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary-light flex items-center justify-center shrink-0 border border-primary/30 shadow-md">
                        {ser.icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">{ser.category}</span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-blue-200 transition-colors">{ser.title}</h3>
                      </div>
                    </div>

                    {/* 3 Explicit Communication Elements */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
                        <span className="text-blue-300 font-extrabold uppercase tracking-wider text-[10px] block">What It Is</span>
                        <p className="text-slate-300 leading-relaxed font-normal">{ser.whatItIs}</p>
                      </div>
                      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
                        <span className="text-blue-300 font-extrabold uppercase tracking-wider text-[10px] block">Target Customer</span>
                        <p className="text-slate-300 leading-relaxed font-normal">{ser.targetCustomer}</p>
                      </div>
                      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
                        <span className="text-blue-300 font-extrabold uppercase tracking-wider text-[10px] block">Why PPR</span>
                        <p className="text-slate-300 leading-relaxed font-normal">{ser.pprValue}</p>
                      </div>
                    </div>

                    {/* Metric Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {ser.metrics.map((m) => (
                        <span key={m} className="text-[11px] font-bold text-slate-300 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">
                          ✓ {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <Link
                      to={ser.link}
                      className="text-primary-light font-extrabold text-xs uppercase tracking-wider hover:text-white flex items-center gap-2 transition-colors group/link cursor-pointer"
                    >
                      Explore Road Transport Capabilities
                      <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}

            {/* 3 Grid Cards: Rail, Air, Ocean (Asymmetric & Non-Identical Styling) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.filter(s => s.id !== 'road').map((ser, index) => {
                // Distinct visual styling per card to prevent identical appearance
                const styleVariants = [
                  'bg-slate-900/90 border-slate-800 hover:border-blue-500/50', // Rail: Slate
                  'bg-slate-950/90 border-slate-800/80 hover:border-primary-light/60 backdrop-blur-xl', // Air: Glass
                  'bg-[#0c1a3a] border-slate-800 hover:border-blue-400/60', // Ocean: Marine
                ];

                return (
                  <Reveal key={ser.id} variant="scale-in" delay={`${index * 100}ms`}>
                  <div
                    className={`rounded-3xl overflow-hidden border transition-all duration-500 group flex flex-col justify-between h-full card-hover-elevation p-6 sm:p-8 space-y-6 ${styleVariants[index % 3]}`}
                  >
                    <div className="space-y-5">
                      {/* Image header thumbnail */}
                      <div className="h-44 rounded-2xl overflow-hidden relative shadow-md">
                        <img
                          src={ser.image}
                          alt={ser.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-transparent opacity-85"></div>
                        <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-blue-300 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                          {ser.badge}
                        </div>
                      </div>

                      {/* Header */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center shrink-0 border border-primary/30">
                          {ser.icon}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">{ser.category}</span>
                          <h3 className="font-extrabold text-xl text-white group-hover:text-blue-200 transition-colors">{ser.title}</h3>
                        </div>
                      </div>

                      {/* 3 Explicit Communication Blocks */}
                      <div className="space-y-3 text-xs border-t border-slate-800/80 pt-4">
                        <div>
                          <span className="text-blue-300 font-extrabold uppercase tracking-wider text-[10px] block mb-0.5">Capability</span>
                          <p className="text-slate-300 leading-relaxed font-normal">{ser.whatItIs}</p>
                        </div>
                        <div>
                          <span className="text-blue-300 font-extrabold uppercase tracking-wider text-[10px] block mb-0.5">Primary Clients</span>
                          <p className="text-slate-300 leading-relaxed font-normal">{ser.targetCustomer}</p>
                        </div>
                        <div>
                          <span className="text-blue-300 font-extrabold uppercase tracking-wider text-[10px] block mb-0.5">PPR Advantage</span>
                          <p className="text-slate-300 leading-relaxed font-normal">{ser.pprValue}</p>
                        </div>
                      </div>

                      {/* Metric Tag Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {ser.metrics.map((m) => (
                          <span key={m} className="text-[10px] font-semibold text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded-md border border-slate-700/80">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80">
                      <Link
                        to={ser.link}
                        className="text-primary-light font-extrabold text-xs uppercase tracking-wider hover:text-white flex items-center gap-2 transition-colors group/link cursor-pointer"
                      >
                        Mode Specifications
                        <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section — Premium Network Visualization */}
      <section className="relative overflow-hidden bg-[#07101f] py-24 text-white">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-16">

          {/* Section Header */}
          <Reveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 inline-block">
                Global Trade Corridors
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Connecting Strategic Markets Across Active Corridors
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                PPR Logistics operates an extensive multimodal network across Central Asia, the Caucasus, the Middle East, Russia, Europe, and beyond — connecting key economic zones through reliable, SLA-driven transit corridors.
              </p>
            </div>
          </Reveal>

          {/* SVG Network Visualization */}
          <Reveal variant="fade-up" delay="100ms">
          <div className="relative w-full max-w-4xl mx-auto select-none">
            <svg
              viewBox="0 0 900 340"
              className="w-full h-auto"
              aria-hidden="true"
            >
              <defs>
                {/* Animated dash pattern for route lines */}
                <style>{`
                  @keyframes dashFlow {
                    to { stroke-dashoffset: -40; }
                  }
                  .route-line { animation: dashFlow 2.5s linear infinite; }
                  .route-line-slow { animation: dashFlow 4s linear infinite; }
                  @keyframes nodePulse {
                    0%, 100% { opacity: 0.6; r: 5; }
                    50% { opacity: 1; r: 7; }
                  }
                  .hub-pulse { animation: nodePulse 2.5s ease-in-out infinite; }
                `}</style>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
                <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#60a5fa" opacity="0.9" />
                </marker>
                <marker id="arrowSlate" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" opacity="0.7" />
                </marker>
              </defs>

              {/* ── Route arcs (curved paths between hubs) ── */}
              {/* Ashgabat → Dubai */}
              <path d="M 450,170 Q 570,110 690,190" fill="none" stroke="#3b82f6" strokeWidth="1.5"
                strokeDasharray="8 6" className="route-line" markerEnd="url(#arrowBlue)" />
              {/* Ashgabat → Moscow */}
              <path d="M 450,170 Q 350,80 210,110" fill="none" stroke="#3b82f6" strokeWidth="1.5"
                strokeDasharray="8 6" className="route-line" markerEnd="url(#arrowBlue)" />
              {/* Ashgabat → Istanbul */}
              <path d="M 450,170 Q 330,220 165,195" fill="none" stroke="#94a3b8" strokeWidth="1.2"
                strokeDasharray="6 6" className="route-line-slow" markerEnd="url(#arrowSlate)" />
              {/* Dubai → China (Shanghai) */}
              <path d="M 690,190 Q 780,140 840,150" fill="none" stroke="#94a3b8" strokeWidth="1.2"
                strokeDasharray="6 6" className="route-line-slow" markerEnd="url(#arrowSlate)" />
              {/* Moscow → Warsaw */}
              <path d="M 210,110 Q 140,125 80,145" fill="none" stroke="#94a3b8" strokeWidth="1.2"
                strokeDasharray="6 6" className="route-line-slow" markerEnd="url(#arrowSlate)" />
              {/* Dubai → Karachi */}
              <path d="M 690,190 Q 730,240 760,260" fill="none" stroke="#94a3b8" strokeWidth="1.2"
                strokeDasharray="6 6" className="route-line-slow" markerEnd="url(#arrowSlate)" />

              {/* ── Hub glow halos ── */}
              <circle cx="450" cy="170" r="28" fill="url(#nodeGlow)" />
              <circle cx="690" cy="190" r="20" fill="url(#nodeGlow)" />
              <circle cx="210" cy="110" r="14" fill="url(#nodeGlow)" />

              {/* ── Hub nodes ── */}
              {/* Central Hub: Ashgabat */}
              <circle cx="450" cy="170" r="9" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2.5" />
              <circle cx="450" cy="170" r="4" fill="#60a5fa" />

              {/* Dubai */}
              <circle cx="690" cy="190" r="7" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="690" cy="190" r="3" fill="#60a5fa" />

              {/* Moscow */}
              <circle cx="210" cy="110" r="6" fill="#1e3a5f" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="210" cy="110" r="2.5" fill="#94a3b8" />

              {/* Istanbul */}
              <circle cx="165" cy="195" r="5.5" fill="#1e3a5f" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="165" cy="195" r="2" fill="#94a3b8" />

              {/* Warsaw / Europe Gateway */}
              <circle cx="80" cy="145" r="5" fill="#1e3a5f" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="80" cy="145" r="2" fill="#94a3b8" />

              {/* China (East Asia) */}
              <circle cx="840" cy="150" r="5" fill="#1e3a5f" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="840" cy="150" r="2" fill="#94a3b8" />

              {/* Karachi / Pakistan */}
              <circle cx="760" cy="260" r="5" fill="#1e3a5f" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="760" cy="260" r="2" fill="#94a3b8" />

              {/* ── Pulsing rings on main hubs ── */}
              <circle cx="450" cy="170" className="hub-pulse" r="5" fill="#3b82f6" opacity="0.6" />

              {/* ── Labels ── */}
              <text x="450" y="155" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Inter, sans-serif">Ashgabat</text>
              <text x="450" y="145" textAnchor="middle" fill="#60a5fa" fontSize="8" fontFamily="Inter, sans-serif">CENTRAL HUB</text>

              <text x="690" y="178" textAnchor="middle" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="Inter, sans-serif">Dubai</text>
              <text x="690" y="168" textAnchor="middle" fill="#60a5fa" fontSize="7.5" fontFamily="Inter, sans-serif">SEA &amp; AIR HUB</text>

              <text x="210" y="100" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif">Moscow</text>
              <text x="165" y="184" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif">Istanbul</text>
              <text x="80" y="134" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontWeight="600" fontFamily="Inter, sans-serif">Europe</text>
              <text x="840" y="140" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontWeight="600" fontFamily="Inter, sans-serif">China</text>
              <text x="770" y="278" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontWeight="600" fontFamily="Inter, sans-serif">Pakistan</text>
            </svg>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-2 text-[11px] font-semibold text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-6 h-0.5 bg-blue-400 inline-block rounded-full" />
                Primary Corridor
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-6 h-0.5 bg-slate-500 inline-block rounded-full" />
                Secondary Corridor
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                Operations Hub
              </span>
            </div>
          </div>
          </Reveal>

          {/* Corridor Cards Grid */}
          <Reveal variant="fade-up" delay="80ms">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Card 1: Ashgabat ↔ Dubai */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4 hover:bg-white/8 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-lg">Primary Corridor</span>
                <div className="flex gap-1.5">
                  <span title="Road" className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[9px]">🚛</span>
                  <span title="Air" className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[9px]">✈️</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  Ashgabat, Turkmenistan
                </div>
                <div className="flex items-center gap-1 pl-1">
                  <div className="flex flex-col gap-0.5 pl-0.5">
                    <span className="w-px h-3 bg-slate-600 block ml-0.5" />
                    <span className="w-px h-3 bg-slate-600 block ml-0.5" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0" />
                  Dubai, UAE
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">Central Asia coordination hub to Sea &amp; Air forwarding center. Road and express air cargo transit.</p>
            </div>

            {/* Card 2: Ashgabat ↔ Moscow */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4 hover:bg-white/8 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-lg">Primary Corridor</span>
                <div className="flex gap-1.5">
                  <span title="Rail" className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[9px]">🚂</span>
                  <span title="Road" className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[9px]">🚛</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  Ashgabat, Turkmenistan
                </div>
                <div className="pl-1">
                  <div className="flex flex-col gap-0.5 pl-0.5">
                    <span className="w-px h-3 bg-slate-600 block ml-0.5" />
                    <span className="w-px h-3 bg-slate-600 block ml-0.5" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  Moscow, Russia
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">Rail wagon and road freight corridor connecting Central Asia with Russian market access points.</p>
            </div>

            {/* Card 3: Central Asia → Europe */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4 hover:bg-white/8 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-700/40 px-2.5 py-1 rounded-lg">Secondary Corridor</span>
                <div className="flex gap-1.5">
                  <span title="Rail" className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[9px]">🚂</span>
                  <span title="Ocean" className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[9px]">🚢</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  Central Asia
                </div>
                <div className="pl-1">
                  <div className="flex flex-col gap-0.5 pl-0.5">
                    <span className="w-px h-3 bg-slate-600 block ml-0.5" />
                    <span className="w-px h-3 bg-slate-600 block ml-0.5" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  Turkey &amp; Europe Gateway
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">Rail and ocean multimodal route via Iran and Turkey crossing into European market hubs.</p>
            </div>

            {/* Card 4: Dubai → Pakistan / South Asia */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4 hover:bg-white/8 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-700/40 px-2.5 py-1 rounded-lg">Secondary Corridor</span>
                <div className="flex gap-1.5">
                  <span title="Ocean" className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[9px]">🚢</span>
                  <span title="Air" className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[9px]">✈️</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0" />
                  Dubai, UAE
                </div>
                <div className="pl-1">
                  <div className="flex flex-col gap-0.5 pl-0.5">
                    <span className="w-px h-3 bg-slate-600 block ml-0.5" />
                    <span className="w-px h-3 bg-slate-600 block ml-0.5" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  Pakistan / South Asia
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">Ocean FCL/LCL container and express air freight forwarding to South Asian markets via Dubai hub.</p>
            </div>

            {/* Card 5: China ↔ Central Asia */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4 hover:bg-white/8 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-700/40 px-2.5 py-1 rounded-lg">Secondary Corridor</span>
                <div className="flex gap-1.5">
                  <span title="Rail" className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[9px]">🚂</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  China (East Asia)
                </div>
                <div className="pl-1">
                  <div className="flex flex-col gap-0.5 pl-0.5">
                    <span className="w-px h-3 bg-slate-600 block ml-0.5" />
                    <span className="w-px h-3 bg-slate-600 block ml-0.5" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  Ashgabat, Turkmenistan
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">China–Europe rail corridor transit through Central Asia. SMGS-standardized wagon fleet operations.</p>
            </div>

            {/* Card 6: Operations Hubs Summary */}
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/25 rounded-2xl p-5 space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-lg inline-block">Operations Hubs</span>
              <div className="space-y-3">
                {[
                  { city: 'Ashgabat, Turkmenistan', role: 'Central Asia & Caucasus coordination hub, major rail & highway junction.' },
                  { city: 'Dubai, UAE — Prime Tower', role: 'Sea & Air freight forwarding management, enterprise corporate accounts.' },
                  { city: 'Cross-Border Customs Points', role: 'Iran, Turkey, Russia, Europe, and China border clearance support.' },
                ].map((hub, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[9px] font-extrabold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <div>
                      <div className="text-white text-xs font-bold">{hub.city}</div>
                      <div className="text-slate-400 text-[11px] leading-relaxed">{hub.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Reveal>

          {/* CTA Row */}
          <Reveal variant="fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/10">
            <p className="text-slate-400 text-sm max-w-lg">
              Need a specific corridor quote or custom route planning? Our route coordinators are available 24/7.
            </p>
            <Link
              to="/routes"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-primary/30 transition-all group whitespace-nowrap"
            >
              View All Active Routes
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Insights / Blog Slider */}
      <section className="max-w-7xl mx-auto px-6">
        <Reveal variant="fade-up">
          <BlogSlider />
        </Reveal>
      </section>

      {/* Map Embed Section */}
      <section className="max-w-7xl mx-auto px-6">
        <Reveal variant="fade-up">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Global Facilities</span>
              <h2 className="text-2xl font-extrabold text-slate-900">PPR Logistics Facility Location</h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <MapPin size={16} className="text-primary shrink-0" />
              <span>334 W Armory Dr, Thornton, IL 60476, USA</span>
            </div>
          </div>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-inner border border-slate-200">
            <iframe
              src="https://maps.google.com/maps?q=334%20W%20Armory%20Dr%2C%20Thornton%2C%20IL%2060476&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="PPR Logistics Facility"
            ></iframe>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
