import React from 'react';
import { Compass, Shield, Map, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoutesPage() {
  const transitHubs = [
    { name: 'Turkmenistan Office / Ashgabat', role: 'Central Asia & Caucasus coordination, rail & road junction.' },
    { name: 'Dubai Office / Prime Tower', role: 'Sea & Air freight forwarding management, corporate accounts.' },
    { name: 'Strategic Border Crossings', role: 'Seamless connection across Iran, Turkey, Russia, Europe, and China.' },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-navy-dark to-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white/10 px-4 py-1 rounded-full">
            Network Coverage
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Routes</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Connecting key economic zones, transit ports, and border crossings across the Middle East, Central Asia, Europe, and beyond.
          </p>
        </div>
      </section>

      {/* Corridor Details Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-navy-dark leading-tight">
            Strategic Logistics Network & Trade Corridors
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our extensive logistics network connects diverse markets through strategic trade corridors. With direct access to major ports, border crossings, and key transit hubs, we ensure a smooth and reliable flow of goods across multiple destinations.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Through our road, rail, sea, and air transport solutions, every shipment is delivered with speed, safety, and cost efficiency. Clients can explore active routes, identify key hubs, and select the most suitable transport option tailored to their needs.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Whether it is steel products, industrial equipment, food commodities, or general cargo, our network covers a wide range of short- and long-haul connections, enabling fast and secure access to vital trade centers.
          </p>
          <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl space-y-4">
            <h4 className="font-bold text-navy-dark text-sm flex items-center gap-2">
              <Compass size={18} className="text-primary" /> Key Transit Advantages
            </h4>
            <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
              <li>Direct rail access crossing Central Asia and the Caucasus.</li>
              <li>Multi-modal cargo shipping (Rail-to-Sea & Rail-to-Road).</li>
              <li>SLA-monitored border crossing custom documentation.</li>
              <li>Consolidated logistics hubs reducing storage overheads.</li>
            </ul>
          </div>
        </div>

        {/* Visual Map/Video representation */}
        <div className="space-y-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-navy-dark flex items-center justify-center border border-gray-200">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            >
              <source
                type="video/mp4"
                src="https://prplogistic.com/wp-content/uploads/2025/09/double_exposure_of_two_businessmen_handshake_with_world_map_and.mp4"
              />
            </video>
            <div className="absolute inset-0 video-mask opacity-60"></div>
            <div className="relative z-10 text-center p-6 text-white space-y-2">
              <h3 className="font-bold text-lg md:text-2xl uppercase">Trade Corridors</h3>
              <p className="text-xs text-gray-300">Connecting East and West seamlessly</p>
            </div>
          </div>

          {/* List of Hubs */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-navy-dark">Primary Operations Hubs</h3>
            <div className="space-y-3">
              {transitHubs.map((hub, idx) => (
                <div key={idx} className="flex gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-sm">
                  <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center font-bold text-primary text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-dark">{hub.name}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{hub.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-6 text-center bg-primary/5 rounded-3xl border border-primary/10 p-10 space-y-4">
        <h2 className="text-2xl font-bold text-navy-dark">Ready to Schedule a Shipment?</h2>
        <p className="text-gray-600 text-sm max-w-lg mx-auto">
          Contact our route coordinators for specific shipping rates, border crossing schedules, and custom clearance support.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-md transition-colors"
          >
            Get Route Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
