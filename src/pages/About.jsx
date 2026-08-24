import React from 'react';
import { Target, Compass, Award, Users, ShieldCheck, MapPin, Clock } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function About() {
  const values = [
    { icon: <Target className="text-primary" size={26} />, title: 'Our Mission', desc: 'To construct the most resilient, cost-effective, and transparent multimodal transport bridges connecting global trade corridors.' },
    { icon: <Compass className="text-primary" size={26} />, title: 'Corridor Strategy', desc: 'Deploying dedicated wagon fleets, road trucks, and port handling infrastructure to optimize end-to-end cargo transit.' },
    { icon: <Award className="text-primary" size={26} />, title: 'Quality & Governance', desc: 'Strict compliance with international standards (CMR, SMGS) and ISO safety frameworks to safeguard freight.' },
    { icon: <Users className="text-primary" size={26} />, title: 'Accountability', desc: 'Building long-term strategic relationships with total transparency, real-time dispatch reporting, and dedicated SLAs.' },
  ];

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Page Header Banner */}
      <section className="bg-[color:var(--color-navy-dark)] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[color:var(--color-primary)]/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
            <div className="badge mx-auto">Corporate Architecture & Capabilities</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About PPR Logistics</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Discover the strategic infrastructure, operational standards, and freight forwarders backing PPR International Transport.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal variant="slide-right">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10 inline-block">
              International Transport Leader
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              PPR International Transport & Logistics Co.
            </h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            At PPR, we are more than a transport company — we are the vital supply chain infrastructure that connects global enterprise markets and accelerates commercial growth. With deep expertise, skilled route dispatchers, and an agile network across strategic corridors, we deliver integrated logistics solutions that ensure speed, transparency, and cost efficiency.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            PPR combines full coverage of road, rail, sea, and air freight with tailored multimodal routes to handle every type of cargo — from oversized and heavy-lift project shipments to temperature-controlled perishables and time-critical goods. Our cross-border operations span Central Asia, the Caucasus, the Middle East, Turkey, Russia, and Europe.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our capabilities extend far beyond transport, including international freight forwarding, full supply chain management, customs clearance, warehousing, cargo insurance, and last-mile delivery.
          </p>
          <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-r-2xl border border-slate-200/80">
            <p className="text-slate-800 font-medium italic text-sm leading-relaxed">
              "What sets PPR apart is our unwavering commitment to professionalism, accountability, and industry-specific solutions — not merely moving cargo, but creating sustainable enterprise value and building long-term strategic partnerships."
            </p>
            <span className="block mt-3 text-xs font-bold text-slate-500 uppercase tracking-wider">— Management Board, PPR Logistics</span>
          </div>
        </div>
        </Reveal>

        {/* Brand Graphic Image */}
        <Reveal variant="fade-in" delay="150ms">
        <div className="relative aspect-square md:aspect-auto md:h-[520px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 img-hover-scale">
          <img
            src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800"
            alt="Corporate meeting logistics planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-dark)]/85 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[color:var(--color-primary)] bg-white/10 px-3 py-1 rounded-full border border-white/10">
              Supply Chain Execution
            </span>
            <h3 className="font-extrabold text-2xl">Logistics Engineered As Strategy</h3>
            <p className="text-xs text-slate-300">Orchestrating freight flow across global trade routes.</p>
          </div>
        </div>
        </Reveal>
      </section>

      {/* Strategic Pillars Section */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Operational Pillars</h2>
            <p className="text-slate-600 text-xs sm:text-sm">The underlying principles guiding our global cargo management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} variant="fade-up" delay={`${i * 75}ms`}>
              <div className="card">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">{v.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{v.desc}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="max-w-7xl mx-auto px-6">
        <Reveal variant="fade-up">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Regional Presence</span>
            <h3 className="text-2xl font-extrabold text-slate-900">U.S. Operational Office</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Conveniently situated in the U.S. to coordinate global freight operations, rail transit, and road forwarding across Central Asia, Europe, and the Americas.
            </p>
            <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary shrink-0" />
                <span><strong>Address:</strong> 330 W Armory Dr, South Holland, IL 60473, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary shrink-0" />
                <span><strong>Operating Hours:</strong> Monday – Friday (7:00 AM – 4:00 PM CST)</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4 text-xs text-slate-600">
            <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck size={18} className="text-primary" /> Key Operations Metrics
            </h4>
            <ul className="space-y-2.5 list-disc pl-4 text-slate-600">
              <li>Direct wagon and container fleet availability.</li>
              <li>Real-time GPS status tracking for land and sea cargo.</li>
              <li>24/7 dedicated account manager assignment.</li>
              <li>Full compliance with customs and border clearance laws.</li>
            </ul>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
