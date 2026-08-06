import React from "react";
import { SERVICES } from "../data";
import { Sparkles, ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  onOpenPassModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenPassModal,
}) => {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

          <div>
            <span className="inline-flex items-center gap-2 text-red-500 text-xs font-black uppercase tracking-[0.3em]">
              <Sparkles className="w-4 h-4" />
              Premium Fitness Experience
            </span>

            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight">
              WORLD-CLASS
              <br />
              <span className="text-red-600">
                FITNESS SERVICES
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-zinc-400 text-base leading-8">
            Experience Patna's finest fitness destination with cutting-edge
            Matrix equipment, certified personal trainers, premium recovery
            facilities, functional training, group fitness programs, and
            luxury wellness amenities—all designed to help you perform at
            your absolute best.
          </p>

        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-red-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(220,38,38,0.18)]"
            >

              {/* Image */}
              <div className="relative h-60 overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <span className="absolute top-5 left-5 px-4 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold uppercase tracking-widest">
                  {service.subtitle}
                </span>

              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-black text-white uppercase group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-7">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-5">

                  <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                    Included In Membership
                  </span>

                  <button
                    onClick={onOpenPassModal}
                    className="flex items-center gap-2 text-red-500 font-bold uppercase text-sm hover:text-red-400 transition-all group-hover:translate-x-1"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4" />
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