import React from 'react';
import { Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoutesPage() {
  const transitHubs = [
    { name: 'Turkmenistan Central Junction / Ashgabat', role: 'Central Asia & Caucasus coordination hub, major rail & highway junction.' },
    { name: 'Dubai Commercial Logistics Hub / Prime Tower', role: 'Sea & Air freight forwarding management, enterprise corporate accounts.' },
    { name: 'Strategic Border Crossings & Customs Points', role: 'Seamless connection across Iran, Turkey, Russia, Europe, and China.' },
  ];

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* Page Header Banner */}
      <section className="bg-[#0b132b] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200 bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block">
            Global Trade Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Active Trade Corridors & Routes</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Connecting key economic zones, transit sea ports, and border crossings across the Middle East, Central Asia, Europe, and Asia-Pacific.
          </p>
        </div>
      </section>

      {/* Corridor Details Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10 inline-block">
              Network Optimization
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Strategic Logistics Network & Trade Corridors
            </h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our extensive logistics network connects diverse markets through strategic trade corridors. With direct access to major ports, border crossings, and key transit hubs, we ensure a smooth and reliable flow of goods across multiple destinations.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Through our road, rail, sea, and air transport solutions, every shipment is delivered with speed, safety, and cost efficiency. Clients can explore active routes, identify key hubs, and select the most suitable transport option tailored to their needs.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Whether moving heavy industrial equipment, steel products, food commodities, or general cargo, our network covers a wide range of short- and long-haul connections, enabling fast and secure access to vital trade centers.
          </p>
          <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl space-y-4">
            <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
              <Compass size={18} className="text-primary" /> Key Corridor Advantages
            </h4>
            <ul className="text-xs text-slate-600 space-y-2.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-primary shrink-0" />
                <span>Direct wagon rail access crossing Central Asia and the Caucasus.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-primary shrink-0" />
                <span>Multi-modal cargo transfer (Rail-to-Sea & Rail-to-Road).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-primary shrink-0" />
                <span>SLA-monitored border crossing custom documentation.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-primary shrink-0" />
                <span>Consolidated logistics hubs reducing storage overheads.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Visual Map/Video representation */}
        <div className="space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-[#0b132b] flex items-center justify-center border border-slate-200">
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
            <div className="absolute inset-0 video-mask opacity-70"></div>
            <div className="relative z-10 text-center p-6 text-white space-y-2">
              <h3 className="font-extrabold text-xl md:text-2xl uppercase tracking-tight">Active Trade Corridors</h3>
              <p className="text-xs text-slate-300">Connecting East and West seamlessly</p>
            </div>
          </div>

          {/* List of Hubs */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-lg text-slate-900">Primary Operations Hubs</h3>
            <div className="space-y-3">
              {transitHubs.map((hub, idx) => (
                <div key={idx} className="flex gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm card-hover-elevation text-sm">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center font-extrabold text-primary text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900">{hub.name}</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">{hub.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-[#0b132b] text-white rounded-3xl p-10 text-center space-y-5 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to Schedule a Route Transit?</h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Contact our route coordinators for specific shipping rates, border crossing schedules, and custom clearance support.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg hover:shadow-primary/30 transition-all cursor-pointer group"
            >
              Get Custom Route Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
