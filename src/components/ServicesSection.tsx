import React from 'react';
import { SERVICES } from '../data';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenPassModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenPassModal }) => {
  return (
    <section id="services" className="py-20 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-black tracking-widest text-red-500 uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UNMATCHED LUXURY AMENITIES</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-serif">
              OUR <span className="text-red-600">PREMIUM SERVICES</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md mt-4 md:mt-0">
            From bio-mechanically tuned Matrix weight stations to post-workout steam sauna therapy, every service is engineered for peak human performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-zinc-900/90 border border-zinc-800/80 overflow-hidden hover:border-red-600/60 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  {service.subtitle}
                </span>
              </div>

              {/* Service Description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-white uppercase group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase">Included in Membership</span>
                  <button
                    onClick={onOpenPassModal}
                    className="text-xs font-bold text-red-500 hover:text-red-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase"
                  >
                    <span>Try Amenity</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
