import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Clock, ArrowRight,
  Anchor, Train, Plane, Truck, MapPin,
  Globe, ChevronRight, TrendingUp, Layers,
} from 'lucide-react';
import BlogSlider from '../components/BlogSlider';
import Reveal from '../components/Reveal';
import heroTruckImg from '../assets/hero-truck.png';
import pprHeroVideo from '../assets/PPR_Video.mp4';

/* ─────────────────────────────────── DATA ─────────────────────────────── */

const stats = [
  { value: '50+', label: 'Global Routes' },
  { value: '24/7', label: 'Dispatch Support' },
  { value: '4', label: 'Transport Modes' },
  { value: '100%', label: 'Cargo Coverage' },
];

const services = [
  {
    id: 'road',
    icon: <Truck size={22} />,
    label: 'Road Freight',
    title: 'International Road Freight',
    caption: 'Door-to-door across Central Asia, Middle East & Europe.',
    body: 'High-capacity tilt trailers, reefers, and heavy-haul low-beds operating under CMR and TIR conventions. Direct border clearance, real-time GPS tracking, and temperature compliance — from Ashgabat to anywhere in Europe or the Middle East.',
    metrics: ['CMR & TIR Certified', 'Temperature Controlled', 'Door-to-Door'],
    link: '/services/road',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'rail',
    icon: <Train size={22} />,
    label: 'Rail Freight',
    title: 'Rail & Wagon Transport',
    caption: 'Economical bulk haulage along major Eurasian rail corridors.',
    body: 'Covered wagons, container flatbeds, liquid tanks, and reefer rail cars connecting Central Asia, China, Russia, and Europe. SMGS-standardised operations with direct intermodal hub transfers and significantly lower carbon footprint per ton-km.',
    metrics: ['SMGS Standardised', 'China–Europe Rail', 'Bulk Wagon Fleet'],
    link: '/services/rail',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'air',
    icon: <Plane size={22} />,
    label: 'Air Freight',
    title: 'Express Air Cargo',
    caption: 'Priority flight slots for time-critical shipments worldwide.',
    body: 'Airport-to-airport express cargo and dedicated charter services for pharmaceuticals, perishables, and high-value electronics. SLA-guaranteed flight booking, priority customs at airport terminals, and cold-chain temperature control.',
    metrics: ['IATA Priority', 'Cold-Chain Certified', 'Charter Flights'],
    link: '/services/air',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'ocean',
    icon: <Anchor size={22} />,
    label: 'Ocean Freight',
    title: 'Maritime Ocean Freight',
    caption: 'FCL & LCL container forwarding across 520 global ports.',
    body: 'Full Container Load and Less than Container Load maritime forwarding across 155 countries. Strategic carrier capacity contracts, portside customs handling, container optimisation, bill of lading management, and seamless intermodal transfer.',
    metrics: ['520+ Ports', 'FCL & LCL', 'Portside Customs'],
    link: '/services/ocean',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200',
  },
];

const whyPPR = [
  {
    icon: <Shield size={20} />,
    title: 'End-to-End Accountability',
    body: 'Single point of contact from pickup to final-mile delivery. Every shipment covered by comprehensive cargo insurance and real-time tracking.',
  },
  {
    icon: <Globe size={20} />,
    title: 'Deep Corridor Expertise',
    body: 'Years of operational experience across Central Asia, Caucasus, Middle East, Russia, and Europe — including complex border crossing procedures.',
  },
  {
    icon: <Clock size={20} />,
    title: '24/7 Dispatch Operations',
    body: 'Round-the-clock logistics coordination and dedicated freight managers ensure no shipment is ever left unattended.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'SLA-Driven Performance',
    body: 'Committed service level agreements with route-optimised planning to eliminate unnecessary transit delays and cost overruns.',
  },
  {
    icon: <Layers size={20} />,
    title: 'Multimodal Flexibility',
    body: 'Road, rail, air, and ocean — combined intelligently to create the most efficient end-to-end supply chain for your cargo profile.',
  },
];

const corridors = [
  { from: 'Ashgabat', to: 'Dubai', modes: ['Road', 'Air'], type: 'Primary', desc: 'Central Asia hub to Sea & Air forwarding centre.' },
  { from: 'Ashgabat', to: 'Moscow', modes: ['Rail', 'Road'], type: 'Primary', desc: 'Rail wagon and road freight corridor to Russia.' },
  { from: 'Central Asia', to: 'Europe', modes: ['Rail', 'Ocean'], type: 'Secondary', desc: 'Via Iran & Turkey into European market hubs.' },
  { from: 'Dubai', to: 'South Asia', modes: ['Ocean', 'Air'], type: 'Secondary', desc: 'FCL/LCL and express air to South Asian markets.' },
  { from: 'China', to: 'Ashgabat', modes: ['Rail'], type: 'Secondary', desc: 'SMGS-standardised China–Europe rail corridor transit.' },
];

/* ─────────────────────────────── COMPONENT ─────────────────────────────── */

export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden" style={{ background: 'var(--color-bg)' }}>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HERO — video locked, overlay & typography redesigned              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: '92vh', background: 'var(--color-navy)' }}
      >
        {/* ── Background Hero Video (PPR_Video.mp4) ── */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroTruckImg}
            className="w-full h-full object-cover object-center"
          >
            <source src={pprHeroVideo} type="video/mp4" />
          </video>

          {/* Dynamic Lens Flare & Sunset Atmospheric Glow */}
          <div
            className="absolute top-1/3 left-1/12 w-96 h-96 rounded-full pointer-events-none animate-sun-glow"
            style={{
              background: 'radial-gradient(circle, rgba(244,91,10,0.45) 0%, rgba(232,93,4,0.15) 40%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />

          {/* Highway Motion Speed Line Streaks */}
          <div
            className="absolute bottom-12 left-0 right-0 h-16 pointer-events-none animate-road-streak opacity-30"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), rgba(244,91,10,0.6), transparent)',
              filter: 'blur(2px)',
            }}
          />

          {/* Gradient overlays for contrast and text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(100deg, rgba(4,16,31,0.92) 0%, rgba(4,16,31,0.78) 45%, rgba(4,16,31,0.35) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(4,16,31,0.90) 0%, transparent 65%)',
            }}
          />
        </div>

        {/* ── Hero content ── */}
        <div className="relative z-10 container-site w-full py-24 md:py-32">
          <div className="max-w-2xl animate-fade-in-up">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="h-[2px] w-8 rounded-full inline-block"
                style={{ background: 'var(--color-primary)' }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--color-primary-light)' }}
              >
                Global Transportation &amp; Logistics
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight tracking-tight"
              style={{
                fontFamily: 'var(--font-heading)',
              }}
            >

              <span style={{ color: 'var(--color-primary)' }}>Freight Solutions</span>
              <br />
              <span style={{ color: 'var(--color-primary)' }}>Built for Enterprise.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-[var(--color-text-on-dark)] max-w-2xl mb-8 leading-relaxed font-normal">
              SLA-backed road, rail, air &amp; ocean freight forwarding across Central Asia,
              the Middle East, Russia, and Europe — with 24/7 dispatch and full cargo insurance.
            </p>

            {/* Mode pills */}
            <div className="flex flex-wrap gap-2 mb-9">
              {[
                { icon: <Truck size={13} />, label: 'Road' },
                { icon: <Train size={13} />, label: 'Rail' },
                { icon: <Plane size={13} />, label: 'Air' },
                { icon: <Anchor size={13} />, label: 'Ocean' },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span style={{ color: 'var(--color-primary)' }}>{icon}</span>
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn btn-primary">
                Request a Quote
                <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>
          </div>

          {/* ── Stats bar pinned to bottom ── */}
          <div
            className="absolute bottom-0 left-0 right-0 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="container-site py-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-black"
                    style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[var(--color-text-on-dark)] text-xs font-semibold uppercase tracking-wide mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SERVICES — Alternating image + text (not cards)                   */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: '#fff' }}>
        <div className="container-site">
          {/* Section header */}
          <Reveal variant="fade-up">
            <div className="mb-16 max-w-xl">
              <span className="eyebrow-tag mb-3 inline-block">Transport Capabilities</span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  fontWeight: 900,
                  color: 'var(--color-charcoal)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.015em',
                }}
              >
                Multimodal Freight,
                <br />
                Engineered for Enterprise.
              </h2>
            </div>
          </Reveal>

          {/* Alternating rows */}
          <div className="space-y-24">
            {services.map((svc, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={svc.id} variant="fade-up" delay={`${i * 60}ms`}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? '' : 'lg:[direction:rtl]'
                      }`}
                  >
                    {/* Image */}
                    <div
                      className="relative rounded-2xl overflow-hidden img-zoom"
                      style={{
                        aspectRatio: '16/10',
                        boxShadow: 'var(--shadow-raised)',
                        direction: 'ltr',
                      }}
                    >
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay at bottom */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(to top, rgba(4,16,31,0.65) 0%, transparent 55%)',
                        }}
                      />
                      {/* Mode badge */}
                      <div
                        className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{
                          background: 'rgba(4,16,31,0.75)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          color: 'var(--color-primary-light)',
                        }}
                      >
                        <span style={{ color: 'var(--color-primary)' }}>{svc.icon}</span>
                        {svc.label}
                      </div>
                      {/* Metric pills at bottom */}
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                        {svc.metrics.map((m) => (
                          <span
                            key={m}
                            className="text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-md"
                            style={{
                              background: 'rgba(255,255,255,0.10)',
                              border: '1px solid rgba(255,255,255,0.12)',
                            }}
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Text */}
                    <div style={{ direction: 'ltr' }}>
                      <span
                        className="text-xs font-bold uppercase tracking-widest mb-3 inline-block"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {svc.label}
                      </span>
                      <h3
                        className="mb-3"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                          fontWeight: 800,
                          color: 'var(--color-charcoal)',
                          lineHeight: 1.18,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {svc.title}
                      </h3>
                      <p
                        className="font-semibold mb-4"
                        style={{ color: 'var(--color-ink)', fontSize: '1rem' }}
                      >
                        {svc.caption}
                      </p>
                      <p
                        style={{
                          color: 'var(--color-muted)',
                          fontSize: '0.925rem',
                          lineHeight: 1.75,
                          marginBottom: '1.75rem',
                        }}
                      >
                        {svc.body}
                      </p>
                      <Link
                        to={svc.link}
                        className="inline-flex items-center gap-2 font-bold text-sm group"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Explore {svc.label}
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* WHY PPR — horizontal list with dividers, NOT cards                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-navy)' }}>
        <div className="container-site">
          <Reveal variant="fade-up">
            <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <span className="eyebrow-tag-dark mb-3 inline-block">Why PPR Logistics</span>
                <h2
                  className="text-white"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: '-0.015em',
                  }}
                >
                  Built for Demanding
                  <br />
                  Global Supply Chains.
                </h2>
              </div>
              <Link to="/about" className="btn btn-secondary shrink-0">
                About PPR
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          {/* Differentiator list — each item separated by a horizontal rule */}
          <div>
            {whyPPR.map((item, i) => (
              <Reveal key={item.title} variant="fade-up" delay={`${i * 50}ms`}>
                <div
                  className="group flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-10 py-8 transition-colors duration-200"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  {/* Number */}
                  <span
                    className="shrink-0 text-4xl font-black"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'rgba(255,255,255,0.15)',
                      letterSpacing: '-0.05em',
                      lineHeight: 1,
                      minWidth: '2.5rem',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'var(--color-primary-muted)',
                      color: 'var(--color-primary)',
                      border: '1px solid rgba(232,93,4,0.18)',
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-white font-bold mb-1.5"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.1rem',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm" style={{ lineHeight: 1.75 }}>
                      {item.body}
                    </p>
                  </div>

                  {/* Arrow on hover */}
                  <ChevronRight
                    size={20}
                    className="hidden sm:block shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: 'var(--color-primary)' }}
                  />
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* GLOBAL CORRIDORS — SVG network + corridor list                    */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-bg)' }}>
        <div className="container-site">
          <Reveal variant="fade-up">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <span className="eyebrow-tag mb-3 inline-block">Trade Network</span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  fontWeight: 900,
                  color: 'var(--color-charcoal)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.015em',
                }}
              >
                Connecting Strategic Markets
                <br />
                Across Active Corridors.
              </h2>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                PPR operates an extensive multimodal network spanning Central Asia, the Caucasus,
                the Middle East, Russia, and Europe — built on reliable, SLA-driven transit.
              </p>
            </div>
          </Reveal>

          {/* SVG Network visualization — preserved from original */}
          <Reveal variant="fade-up" delay="80ms">
            <div
              className="relative w-full max-w-5xl mx-auto mb-12 rounded-2xl p-6 sm:p-10"
              style={{
                background: 'var(--color-navy)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: 'var(--shadow-raised)',
              }}
            >
              <svg viewBox="0 0 900 340" className="w-full h-auto" aria-hidden="true">
                <defs>
                  <style>{`
                    @keyframes dashFlow { to { stroke-dashoffset: -40; } }
                    .route-line      { animation: dashFlow 2.5s linear infinite; }
                    .route-line-slow { animation: dashFlow 4s linear infinite; }
                    @keyframes nodePulse { 0%,100%{opacity:.6;r:5} 50%{opacity:1;r:7} }
                    .hub-pulse { animation: nodePulse 2.5s ease-in-out infinite; }
                  `}</style>
                  <radialGradient id="ng" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F4985A" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#F4985A" stopOpacity="0" />
                  </radialGradient>
                  <marker id="ap" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#F4985A" opacity="0.95" />
                  </marker>
                  <marker id="as" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#64748B" opacity="0.8" />
                  </marker>
                </defs>
                {/* Route arcs */}
                <path d="M 450,170 Q 570,110 690,190" fill="none" stroke="#F4985A" strokeWidth="2.5" strokeDasharray="8 6" className="route-line" markerEnd="url(#ap)" />
                <path d="M 450,170 Q 350,80 210,110" fill="none" stroke="#F4985A" strokeWidth="2.5" strokeDasharray="8 6" className="route-line" markerEnd="url(#ap)" />
                <path d="M 450,170 Q 330,220 165,195" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="6 6" className="route-line-slow" markerEnd="url(#as)" />
                <path d="M 690,190 Q 780,140 840,150" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="6 6" className="route-line-slow" markerEnd="url(#as)" />
                <path d="M 210,110 Q 140,125 80,145" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="6 6" className="route-line-slow" markerEnd="url(#as)" />
                <path d="M 690,190 Q 730,240 760,260" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="6 6" className="route-line-slow" markerEnd="url(#as)" />
                {/* Glow halos */}
                <circle cx="450" cy="170" r="38" fill="url(#ng)" />
                <circle cx="690" cy="190" r="28" fill="url(#ng)" />
                {/* Hub nodes */}
                <circle cx="450" cy="170" r="12" fill="#04101F" stroke="#F4985A" strokeWidth="3" />
                <circle cx="450" cy="170" r="5" fill="#F4985A" />
                <circle cx="690" cy="190" r="10" fill="#04101F" stroke="#F4985A" strokeWidth="2.5" />
                <circle cx="690" cy="190" r="4" fill="#F4985A" />
                <circle cx="210" cy="110" r="8" fill="#04101F" stroke="#94a3b8" strokeWidth="2" />
                <circle cx="210" cy="110" r="3" fill="#94a3b8" />
                <circle cx="165" cy="195" r="7" fill="#04101F" stroke="#94a3b8" strokeWidth="2" />
                <circle cx="165" cy="195" r="3" fill="#94a3b8" />
                <circle cx="80" cy="145" r="6" fill="#04101F" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="80" cy="145" r="2.5" fill="#94a3b8" />
                <circle cx="840" cy="150" r="6" fill="#04101F" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="840" cy="150" r="2.5" fill="#94a3b8" />
                <circle cx="760" cy="260" r="6" fill="#04101F" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="760" cy="260" r="2.5" fill="#94a3b8" />
                <circle cx="450" cy="170" className="hub-pulse" r="5" fill="#F4985A" opacity="0.6" />
                {/* Labels */}
                <text x="450" y="150" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily="Inter,sans-serif">Ashgabat</text>
                <text x="450" y="138" textAnchor="middle" fill="#F4985A" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">CENTRAL HUB</text>
                <text x="690" y="174" textAnchor="middle" fill="#e2eaf4" fontSize="12" fontWeight="700" fontFamily="Inter,sans-serif">Dubai</text>
                <text x="690" y="162" textAnchor="middle" fill="#F4985A" fontSize="8.5" fontWeight="700" fontFamily="Inter,sans-serif">SEA &amp; AIR HUB</text>
                <text x="210" y="96" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">Moscow</text>
                <text x="165" y="182" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">Istanbul</text>
                <text x="80" y="132" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">Europe</text>
                <text x="840" y="138" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">China</text>
                <text x="770" y="276" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">Pakistan</text>
              </svg>
              {/* Legend */}
              <div className="flex items-center justify-center gap-6 mt-4 text-xs font-medium text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="w-6 h-px inline-block rounded-full" style={{ background: 'var(--color-primary)' }} />
                  Primary Corridor
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-6 h-px inline-block rounded-full bg-slate-500" />
                  Secondary Corridor
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: 'var(--color-primary)' }} />
                  Hub
                </span>
              </div>
            </div>
          </Reveal>

          {/* Corridor table-style list */}
          <Reveal variant="fade-up" delay="120ms">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid var(--color-border)',
                background: '#fff',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {corridors.map((c, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-slate-50"
                  style={{
                    borderBottom: i < corridors.length - 1 ? '1px solid var(--color-border)' : 'none',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--color-charcoal)' }}>
                      <MapPin size={14} style={{ color: 'var(--color-primary)' }} />
                      {c.from}
                    </div>
                    <ArrowRight size={14} className="text-slate-300 shrink-0" />
                    <div className="text-sm font-bold" style={{ color: 'var(--color-charcoal)' }}>
                      {c.to}
                    </div>
                  </div>
                  <div className="hidden sm:block text-sm text-slate-400" style={{ maxWidth: '260px' }}>
                    {c.desc}
                  </div>
                  <div className="flex items-center gap-2">
                    {c.modes.map((m) => (
                      <span
                        key={m}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                        style={{
                          background: 'var(--color-primary-muted)',
                          color: 'var(--color-primary)',
                          border: '1px solid rgba(232,93,4,0.15)',
                        }}
                      >
                        {m}
                      </span>
                    ))}
                    <span
                      className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ml-1"
                      style={{
                        background: c.type === 'Primary' ? 'rgba(232,93,4,0.10)' : 'rgba(100,116,139,0.10)',
                        color: c.type === 'Primary' ? 'var(--color-primary)' : '#64748B',
                        border: `1px solid ${c.type === 'Primary' ? 'rgba(232,93,4,0.18)' : 'rgba(100,116,139,0.15)'}`,
                      }}
                    >
                      {c.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CTA row */}
          <Reveal variant="fade-up" delay="100ms">
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                Need a specific corridor quote? Our route coordinators are available 24/7.
              </p>
              <Link to="/routes" className="btn btn-primary shrink-0">
                View All Routes
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* QUOTE CTA STRIP — Conversion section                                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 md:py-24 relative overflow-hidden bg-navy"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div className="relative z-10 container-site">
          <Reveal variant="fade-up">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="h-[2px] w-8 rounded-full inline-block"
                    style={{ background: 'var(--color-primary)' }}
                  />
                  <span className="text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-widest">
                    Get Started Today
                  </span>
                </div>
                <h2
                  className="text-white mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Ready to Move Your Cargo?
                </h2>
                <p className="text-[var(--color-text-on-dark)] text-sm md:text-base leading-relaxed">
                  Get a reliable logistics solution tailored to your route, cargo specifications, and delivery requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="btn btn-primary text-sm font-bold tracking-wide"
                >
                  Request a Quote
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/services"
                  className="btn btn-secondary text-sm font-semibold"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* INSIGHTS & MAP                                                     */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28" style={{ background: '#fff' }}>
        <div className="container-site space-y-20">

          {/* Blog Slider */}
          <Reveal variant="fade-up">
            <BlogSlider />
          </Reveal>

          {/* Map */}
          <Reveal variant="fade-up">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                style={{ borderBottom: '1px solid var(--color-border)' }}
              >
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Global Facilities
                  </span>
                  <h3
                    className="mt-0.5"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--color-charcoal)',
                    }}
                  >
                    PPR Logistics Facility Location
                  </h3>
                </div>
                <div
                  className="flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl"
                  style={{
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-ink)',
                  }}
                >
                  <MapPin size={14} style={{ color: 'var(--color-primary)' }} />
                  334 W Armory Dr, Thornton, IL 60476, USA
                </div>
              </div>
              <div className="h-96 md:h-[28rem]">
                <iframe
                  src="https://maps.google.com/maps?q=334%20W%20Armory%20Dr%2C%20Thornton%2C%20IL%2060476&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="PPR Logistics Facility"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
