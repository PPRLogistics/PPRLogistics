import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Plane, Anchor, Train, ArrowRight } from 'lucide-react';

export default function ServicesIndex() {
  const serviceCards = [
    {
      title: 'Land Transport',
      icon: <Truck className="text-primary" size={32} />,
      desc: 'PRP is a trusted leader in international road freight, connecting markets across Central Asia, the Caucasus, the Middle East, Turkey, Russia, and Europe. With a state-of-the-art fleet and certified expertise, we move everything from perishables and pharmaceuticals to hazardous, heavy-lift, and oversized cargo.',
      link: '/services/road',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Air Transport',
      icon: <Plane className="text-primary" size={32} />,
      desc: 'PRP offers fast, reliable, and flexible air freight for time-sensitive and high-value cargo like pharmaceuticals and perishables. With a dedicated team, we ensure secure, transparent, and efficient delivery from start to finish—making PRP your trusted air cargo partner.',
      link: '/services/air',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Ocean Transport',
      icon: <Anchor className="text-primary" size={32} />,
      desc: 'No matter what you are importing or exporting – from everyday goods to specialized cargo – our ocean freight solutions ensure that your products reach their destination securely and on time. From selecting the right container, to safe portside handling, and continuous monitoring throughout the sea journey, PPR supports you at every stage.',
      link: '/services/ocean',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Rail Transport',
      icon: <Train className="text-primary" size={32} />,
      desc: 'PRP is a leading provider of international rail freight, connecting businesses across Central Asia, the Caucasus, Afghanistan, Pakistan, Turkey, Russia, China, and Europe. With modern fleets, diverse wagon options, and expertise in handling bulk, petrochemicals, food, vehicles, and sensitive goods, we ensure secure operations.',
      link: '/services/rail',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-navy-dark to-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white/10 px-4 py-1 rounded-full">
            Our Expertise
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Services</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            PPR International Transport offers a complete spectrum of cargo forwarding modes, custom clearance, warehousing, and logistics planning.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        {serviceCards.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col lg:flex-row items-center gap-10 bg-white p-6 md:p-10 rounded-3xl border border-gray-150/50 shadow-md hover:shadow-xl transition-all duration-300 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto lg:h-72 rounded-2xl overflow-hidden shadow-md">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Description */}
            <div className="w-full lg:w-1/2 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-navy-dark">{service.title}</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
              <div className="pt-2">
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-xs rounded-lg shadow-md transition-colors"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
