import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Award, CheckCircle, ArrowRight, Anchor, Train, Plane, Truck } from 'lucide-react';
import BlogSlider from '../components/BlogSlider';
import heroTruckImg from '../assets/hero-truck.png';
import pprHeroVideo from '../assets/PPR_Video.mp4';

export default function Home() {
  const features = [
    { icon: <Clock size={32} className="text-primary" />, title: 'Contact 24h', desc: 'Round-the-clock logistical support for shipments.' },
    { icon: <Shield size={32} className="text-primary" />, title: 'Security of packages', desc: 'Utmost care and cargo insurance for every transit.' },
    { icon: <Award size={32} className="text-primary" />, title: 'We have permissions', desc: 'Fully licensed and custom-compliant operations.' },
    { icon: <CheckCircle size={32} className="text-primary" />, title: 'Delivery on time', desc: 'SLA-backed punctual transit schedules.' },
  ];

  const services = [
    {
      title: 'International Road Transport',
      icon: <Truck size={24} className="text-white" />,
      desc: 'PRP is a trusted leader in international road freight, connecting markets across Central Asia, the Caucasus, Middle East, Turkey, Russia, and Europe.',
      link: '/services/road',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Air Transport',
      icon: <Plane size={24} className="text-white" />,
      desc: 'PRP offers fast, reliable, and flexible air freight for time-sensitive and high-value cargo like pharmaceuticals and perishables.',
      link: '/services/air',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Ocean Transport',
      icon: <Anchor size={24} className="text-white" />,
      desc: 'No matter what you are importing or exporting – from everyday goods to specialized cargo – our ocean freight solutions ensure secure and timely arrivals.',
      link: '/services/ocean',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Rail Transport',
      icon: <Train size={24} className="text-white" />,
      desc: 'PRP is a leading provider of international rail freight, connecting businesses across Central Asia, China, Russia, Turkey, and Europe.',
      link: '/services/rail',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center overflow-hidden">
        {/* Background Hero Video */}
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
          {/* Dark overlay - preserved for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10 pointer-events-none"></div>
        </div>

        {/* Hero Left Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full">
          <div className="max-w-[580px] text-left space-y-7 text-white animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-white bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Global Transit & Supply Chain
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              PPR International <br />
              <span className="text-primary font-black">
                Transport & Logistics
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
              Connecting global markets with end-to-end road, rail, air, and ocean freight forwarding. Reliable, SLA-backed transit solutions engineered for modern supply chains.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-base flex items-center justify-center gap-2.5 group"
              >
                Get a Quote
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/25 backdrop-blur-md hover:-translate-y-0.5 transition-all text-base flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">Why Choose Us</span>
          <h2 className="text-3xl font-extrabold text-navy-dark">
            Our Commitment to Safety, Punctuality, and Support
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            By combining diverse resources and integrating them effectively, PPR has positioned itself among the leading international freight forwarders connecting regions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => (
            <div
              key={feat.title}
              className="bg-white p-8 rounded-2xl border border-gray-150/50 shadow-md hover:shadow-lg transition-all text-center space-y-4 hover:-translate-y-1 duration-300"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto">
                {feat.icon}
              </div>
              <h3 className="font-bold text-lg text-navy-dark">{feat.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services List Section */}
      <section className="bg-navy-dark text-white py-24 relative overflow-hidden">
        {/* Subtle decorative background gradients */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block">Our Capabilities</span>
            <h2 className="text-3xl font-extrabold">List of Our Services</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We offer comprehensive transportation methods, tailored to the demands of bulk and time-sensitive commodities alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((ser) => (
              <div
                key={ser.title}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all group flex flex-col h-full"
              >
                {/* Image header */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={ser.image}
                    alt={ser.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-60"></div>
                </div>

                {/* Service Text */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md">
                        {ser.icon}
                      </div>
                      <h3 className="font-bold text-lg text-white">{ser.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {ser.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <Link
                      to={ser.link}
                      className="text-primary font-semibold text-sm hover:text-white flex items-center gap-1.5 transition-colors group/link w-fit"
                    >
                      Learn more
                      <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Area */}
        <div className="space-y-6">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Trade Corridors</span>
            <h2 className="text-3xl font-extrabold text-navy-dark leading-tight">
              Connecting Markets Via Active Routes
            </h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Our extensive logistics network connects diverse markets through strategic trade corridors. With direct access to major ports, border crossings, and key transit hubs, we ensure a smooth and reliable flow of goods across multiple destinations.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Whether it is steel products, industrial equipment, food commodities, or general cargo, our network covers a wide range of short- and long-haul connections, enabling fast and secure access to vital trade centers.
          </p>
          <div className="pt-2">
            <Link
              to="/routes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-md transition-all group"
            >
              Explore our routes
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Video Overlay Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-150/50 aspect-video bg-navy-dark flex items-center justify-center">
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
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-white/10 px-3 py-1 rounded-full border border-white/10">
              Corridor Hubs
            </span>
            <h3 className="font-extrabold text-lg md:text-2xl uppercase">Global Coverage</h3>
          </div>
        </div>
      </section>

      {/* Insights / Blog Slider */}
      <section className="max-w-7xl mx-auto px-6">
        <BlogSlider />
      </section>

      {/* Map Embed Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl font-extrabold text-navy-dark">Find Our Location</h2>
          <p className="text-gray-500 text-xs">
            PPR Logistics — 334 W Armory Dr, Thornton, IL 60476
          </p>
        </div>
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://maps.google.com/maps?q=334%20W%20Armory%20Dr%2C%20Thornton%2C%20IL%2060476&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Falcon Papers and Plastics - Thornton, IL"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
