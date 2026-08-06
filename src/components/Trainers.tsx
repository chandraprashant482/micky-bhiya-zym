import React from "react";
import { Star } from "lucide-react";

interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
  rating: number;
  bio: string;
  specialties: string[];
}

interface TrainersProps {
  trainers: Trainer[];
}

export function Trainers({ trainers }: TrainersProps) {
  return (
    <section
      id="trainers"
      className="py-20 bg-black border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-black tracking-widest text-red-500 uppercase">
            CERTIFIED MASTER COACHES
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-serif">
            MEET OUR <span className="text-red-600">ELITE TRAINERS</span>
          </h2>

          <p className="text-zinc-400 text-sm mt-3">
            Certified ACSM & Yoga Alliance masters with proven transformation
            records.
          </p>
        </div>

        {/* Trainer Cards */}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-red-600/60 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Rating */}

                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-bold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{trainer.rating}</span>
                </div>

                {/* Info */}

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 block">
                    {trainer.experience} Experience
                  </span>

                  <h3 className="text-xl font-black text-white uppercase font-serif">
                    {trainer.name}
                  </h3>

                  <p className="text-xs text-zinc-300 font-medium">
                    {trainer.role}
                  </p>
                </div>
              </div>

              {/* Bottom */}

              <div className="p-4 bg-zinc-900 border-t border-zinc-800">
                <p className="text-zinc-400 text-xs line-clamp-2">
                  {trainer.bio}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {trainer.specialties.map((item, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}