import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Clock, ArrowRight,
  Anchor, Train, Plane, Truck,
  Globe, Layers
} from 'lucide-react';
import BlogSlider from '../components/BlogSlider';
import Reveal from '../components/Reveal';
import heroTruckImg from '../assets/hero-truck.png';
import pprHeroVideo from '../assets/PPR_Video.mp4';

/* ─────────────────────────────────── DATA ─────────────────────────────── */

const services = [
  {
    id: 'road',
    icon: <Truck size={22} />,
    label: 'Road Freight',
    title: 'International Road Freight',
    caption: 'Door-to-door transportation via tilt trailers, reefers & heavy-haul equipment.',
    body: 'Operating under CMR and TIR conventions, PPR Logistics delivers dependable overland transport. Complete with direct border clearance support, temperature compliance, and real-time tracking from origin to destination.',
    metrics: ['CMR & TIR Conventions', 'Temperature Controlled', 'Door-to-Door Service'],
    link: '/services/road',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'rail',
    icon: <Train size={22} />,
    label: 'Rail Freight',
    title: 'Rail & Wagon Freight',
    caption: 'Bulk haulage and containerized rail forwarding across major corridors.',
    body: 'Covered wagons, flatbeds, liquid tanks, and reefer rail cars operating under SMGS standards. Direct intermodal hub transfers designed for economical, large-volume cargo transportation.',
    metrics: ['SMGS Standardized', 'Bulk Wagon Fleets', 'Intermodal Transfer'],
    link: '/services/rail',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'air',
    icon: <Plane size={22} />,
    label: 'Air Freight',
    title: 'Express Air Cargo',
    caption: 'Time-critical flight slots and charter cargo solutions.',
    body: 'Airport-to-airport express cargo and dedicated charter flights for perishables, high-value goods, and urgent shipments. Complete with airport customs assistance and cold-chain temperature management.',
    metrics: ['Express Priority', 'Cold-Chain Support', 'Airport Customs'],
    link: '/services/air',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'ocean',
    icon: <Anchor size={22} />,
    label: 'Ocean Freight',
    title: 'Maritime Ocean Forwarding',
    caption: 'FCL & LCL container forwarding with portside handling.',
    body: 'Full Container Load (FCL) and Less than Container Load (LCL) maritime freight forwarding. Complete container optimization, bill of lading management, portside handling, and seamless intermodal transfers.',
    metrics: ['FCL & LCL Containers', 'Portside Customs', 'Intermodal Transfer'],
    link: '/services/ocean',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200',
  },
];

const differentiators = [
  {
    icon: <Shield size={20} />,
    title: 'Standardized Governance & Compliance',
    body: 'Strict adherence to international transport conventions including CMR for road haulage and SMGS for rail freight operations.',
  },
  {
    icon: <Globe size={20} />,
    title: 'Active Regional Corridor Operations',
    body: 'Operational reach linking key regional trade routes with direct handling of cross-border customs documentation and transit procedures.',
  },
  {
    icon: <Clock size={20} />,
    title: 'Dedicated Client Support',
    body: 'Direct lines of communication with experienced freight managers to monitor shipment status and answer route queries.',
  },
  {
    icon: <Layers size={20} />,
    title: 'Integrated Multimodal Capabilities',
    body: 'Seamless combination of road, rail, air, and ocean freight to optimize transit times and cost efficiency for any commodity type.',
  },
];

/* ─────────────────────────────── COMPONENT ─────────────────────────────── */

export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden bg-[color:var(--color-bg)]">

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION — Clean video overlay, strong typography & CTAs       */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: '88vh', background: 'var(--color-navy)' }}
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

          {/* Clean legibility gradient overlay (not overly dark) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(95deg, rgba(4,16,31,0.88) 0%, rgba(4,16,31,0.65) 50%, rgba(4,16,31,0.25) 100%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(4,16,31,0.75) 0%, transparent 55%)',
            }}
          />
        </div>

        {/* ── Hero content ── */}
        <div className="relative z-10 container-site w-full py-20 md:py-28">
          <div className="max-w-2xl animate-fade-in-up space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span
                className="h-[2px] w-8 rounded-full inline-block"
                style={{ background: 'var(--color-primary)' }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--color-primary-light)' }}
              >
                PPR International Transport &amp; Logistics
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Reliable Logistics.
              <br />
              <span style={{ color: 'var(--color-primary)' }}>Efficient Transportation.</span>
              <br />
              Trusted Service.
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-[var(--color-text-on-dark)] max-w-xl leading-relaxed font-normal">
              International freight forwarding by road, rail, sea, and air — connecting vital trade routes with dedicated operational support.
            </p>

            {/* Mode pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { icon: <Truck size={14} />, label: 'Road Freight' },
                { icon: <Train size={14} />, label: 'Rail & Wagon' },
                { icon: <Plane size={14} />, label: 'Air Cargo' },
                { icon: <Anchor size={14} />, label: 'Ocean Freight' },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.20)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span style={{ color: 'var(--color-primary)' }}>{icon}</span>
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link to="/contact" className="btn btn-primary text-sm">
                Request a Quote
                <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn btn-secondary text-sm">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SERVICES — Clean 50/50 editorial presentation                     */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          {/* Section header */}
          <Reveal variant="fade-up">
            <div className="mb-16 max-w-xl space-y-2">
              <span className="eyebrow-tag inline-block">Multimodal Capabilities</span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: 800,
                  color: 'var(--color-charcoal)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.015em',
                }}
              >
                Comprehensive Transportation Services
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We offer complete freight options tailored to bulk commodities, containerized cargo, and time-critical shipments.
              </p>
            </div>
          </Reveal>

          {/* Alternating rows */}
          <div className="space-y-20">
            {services.map((svc, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={svc.id} variant="fade-up" delay={`${i * 60}ms`}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
                      isEven ? '' : 'lg:[direction:rtl]'
                    }`}
                  >
                    {/* Image */}
                    <div
                      className="relative rounded-2xl overflow-hidden img-zoom shadow-md"
                      style={{
                        aspectRatio: '16/10',
                        direction: 'ltr',
                      }}
                    >
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(to top, rgba(4,16,31,0.60) 0%, transparent 55%)',
                        }}
                      />
                      {/* Mode badge */}
                      <div
                        className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{
                          background: 'rgba(4,16,31,0.80)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.15)',
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
                            className="text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md"
                            style={{
                              background: 'rgba(255,255,255,0.15)',
                              border: '1px solid rgba(255,255,255,0.15)',
                            }}
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Text */}
                    <div style={{ direction: 'ltr' }} className="space-y-3">
                      <span
                        className="text-xs font-bold uppercase tracking-widest inline-block"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {svc.label}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                          fontWeight: 800,
                          color: 'var(--color-charcoal)',
                          lineHeight: 1.2,
                        }}
                      >
                        {svc.title}
                      </h3>
                      <p className="font-semibold text-slate-800 text-sm">
                        {svc.caption}
                      </p>
                      <p
                        style={{
                          color: 'var(--color-ink)',
                          fontSize: '0.925rem',
                          lineHeight: 1.7,
                        }}
                      >
                        {svc.body}
                      </p>
                      <div className="pt-2">
                        <Link
                          to={svc.link}
                          className="inline-flex items-center gap-2 font-bold text-sm group"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          Learn more about {svc.label}
                          <ArrowRight
                            size={15}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* WHY CHOOSE US — Clean differentiators list on navy background     */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container-site">
          <Reveal variant="fade-up">
            <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <span className="eyebrow-tag-dark mb-3 inline-block">Why PPR Logistics</span>
                <h2
                  className="text-white"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: '-0.015em',
                  }}
                >
                  Our Commitment to Safety,
                  <br />
                  Punctuality &amp; Client Support
                </h2>
              </div>
              <Link to="/about" className="btn btn-secondary shrink-0 text-xs uppercase tracking-wider">
                About PPR
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          {/* Differentiator list — clean divider layout */}
          <div>
            {differentiators.map((item, i) => (
              <Reveal key={item.title} variant="fade-up" delay={`${i * 50}ms`}>
                <div
                  className="group flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8 py-7 transition-colors duration-200"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'var(--color-primary-muted)',
                      color: 'var(--color-primary)',
                      border: '1px solid rgba(232,93,4,0.20)',
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
                    <p className="text-[var(--color-text-on-dark)] text-sm" style={{ lineHeight: 1.7 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* TRADE CORRIDORS — Connecting Markets narrative                      */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Narrative text */}
            <Reveal variant="fade-up">
              <div className="space-y-5">
                <span className="eyebrow-tag inline-block">Trade Corridors</span>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    fontWeight: 800,
                    color: 'var(--color-charcoal)',
                    lineHeight: 1.15,
                  }}
                >
                  Connecting Markets Via Active Routes
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our extensive logistics network connects diverse markets through strategic trade corridors. With direct access to major ports, border crossings, and key transit hubs, we ensure a smooth and reliable flow of goods across multiple destinations.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Whether it is steel products, industrial equipment, food commodities, or general cargo, our network covers short- and long-haul connections to support vital trade centers.
                </p>
                <div className="pt-2">
                  <Link to="/routes" className="btn btn-primary text-sm">
                    Explore Our Routes
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Video Feature Card */}
            <Reveal variant="fade-up" delay="100ms">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-video bg-navy flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-75"
                >
                  <source
                    type="video/mp4"
                    src="https://prplogistic.com/wp-content/uploads/2025/09/double_exposure_of_two_businessmen_handshake_with_world_map_and.mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-navy/60"></div>
                <div className="relative z-10 text-center p-6 text-white space-y-2">
                  <span className="text-[11px] uppercase font-bold tracking-widest text-[color:var(--color-primary-light)] bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    Trade Networks
                  </span>
                  <h3 className="font-extrabold text-xl md:text-2xl">Regional &amp; International Coverage</h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* INSIGHTS & GOOGLE MAP LOCATION                                     */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[color:var(--color-bg)]">
        <div className="container-site space-y-16">

          {/* Blog Slider */}
          <Reveal variant="fade-up">
            <BlogSlider />
          </Reveal>

          {/* Real Office Location Google Map */}
          <Reveal variant="fade-up">
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--color-charcoal)',
                  }}
                >
                  Find Our Offices
                </h2>
                <p className="text-slate-500 text-xs">
                  We operate out of regional logistics hubs in Turkmenistan and Dubai.
                </p>
              </div>

              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63244.27142449133!2d58.3970962861034!3d37.92116371375187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffb58764c981f%3A0x65e64d37212ea2b0!2zQW5kYWx5cCBrw7bDp2VzaQ!5e0!3m2!1sen!2s!4v1759348000927!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="PPR Logistics Office Location"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* QUOTE CTA STRIP — Clean Conversion Section                         */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-20 relative overflow-hidden bg-navy"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="container-site">
          <Reveal variant="fade-up">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl space-y-2">
                <span className="text-[color:var(--color-primary-light)] text-xs font-bold uppercase tracking-widest">
                  Ready to Ship?
                </span>
                <h2
                  className="text-white"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                  }}
                >
                  Ready to Move Your Cargo?
                </h2>
                <p className="text-[var(--color-text-on-dark)] text-sm leading-relaxed">
                  Connect with our freight team for custom routing, rates, and clearance support.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link to="/contact" className="btn btn-primary text-sm font-bold">
                  Request a Quote
                  <ArrowRight size={15} />
                </Link>
                <Link to="/services" className="btn btn-secondary text-sm font-semibold">
                  Explore Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
