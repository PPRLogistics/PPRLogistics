import React from 'react';
import { Target, Compass, Award, Users } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Target className="text-primary" size={28} />, title: 'Our Goal', desc: 'To provide the most efficient and reliable multi-modal logistics bridges connecting global markets.' },
    { icon: <Compass className="text-primary" size={28} />, title: 'Our Strategy', desc: 'Leveraging top-tier wagon fleets, trucks, and custom networks to customize logistics routes.' },
    { icon: <Award className="text-primary" size={28} />, title: 'Quality Service', desc: 'Strict compliance with international standards (CMR, SMGS) to safeguard customer freight.' },
    { icon: <Users className="text-primary" size={28} />, title: 'Accountability', desc: 'Building long-term strategic relationships with transparency and constant feedback loops.' },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-navy-dark to-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white/10 px-4 py-1 rounded-full">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Us</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Discover the strategic infrastructure, leadership values, and logistics capability backing PPR International Transport.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-navy-dark">
            PPR International Transport & Logistics Co.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            At PPR, we are more than a transport company — we are the infrastructure that connects markets and accelerates business growth. With deep expertise, a skilled team, and an agile network across key trade corridors, we deliver integrated logistics solutions that ensure speed, transparency, and cost-efficiency.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            PPR combines full coverage of road, rail, sea, and air freight with tailored multimodal routes to handle every type of cargo — from oversized and project shipments to sensitive and time-critical goods. Our cross-border operations span Central Asia, the Caucasus, the Middle East, Turkey, Russia, and Europe, ensuring seamless end-to-end delivery.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our services go beyond transport, including international freight forwarding, full supply chain management, customs clearance, warehousing, cargo insurance, and last-mile delivery. With real-time tracking, transparent reporting, and measurable SLAs, we provide a reliable, professional experience that empowers our clients to make smarter commercial and operational decisions.
          </p>
          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-xl">
            <p className="text-navy-dark font-semibold italic text-sm">
              "What sets PPR apart is our commitment to professionalism, accountability, and industry-specific solutions — not merely moving cargo, but creating sustainable value and building long-term partnerships."
            </p>
            <span className="block mt-2 text-xs font-bold text-gray-500 uppercase tracking-wider">— Management Board</span>
          </div>
        </div>

        {/* Brand Image Grid decoration */}
        <div className="relative aspect-square md:aspect-auto md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-150/50">
          <img
            src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800"
            alt="Corporate meeting logistics planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
            <h3 className="font-bold text-xl">Logistics Becomes Strategy</h3>
            <p className="text-xs text-gray-300">We orchestrate cargo flow for enterprises worldwide.</p>
          </div>
        </div>
      </section>

      {/* Core Values / Pillar Section */}
      <section className="bg-neutral-grey py-16 border-y border-gray-150/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl font-extrabold text-navy-dark">Our Pillars of Strategy</h2>
            <p className="text-gray-500 text-xs">The underlying philosophy guiding our cargo management operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-bold text-navy-dark text-base">{v.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations summary */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div className="bg-white p-8 rounded-2xl border border-gray-150/50 shadow-md space-y-4">
          <h3 className="font-bold text-navy-dark text-lg border-b border-gray-100 pb-3">US Office</h3>
          <p className="text-gray-600">
            Conveniently situated in USA to coordinate land and rail transit crossing Central Asia and the Caucasus.
          </p>
          <div className="text-xs text-gray-500 space-y-1">
            <p><strong>Address:</strong>330 W Armory Dr, South Holland, IL 60473, USA</p>
            <p><strong>Hours:</strong> Mon - Fri (7:00 AM - 4:00 PM)</p>
          </div>
        </div>

      </section>
    </div>
  );
}
