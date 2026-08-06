import React from "react";

interface FitnessClass {
  id: string;
  name: string;
  image: string;
  intensity: string;
  duration: string;
  caloriesBurned: string;
  description: string;
}

interface FitnessClassesProps {
  classes: FitnessClass[];
  onReserveClass: (className: string) => void;
}

export function FitnessClasses({
  classes,
  onReserveClass,
}: FitnessClassesProps) {
  return (
    <section
      id="classes"
      className="py-20 bg-black relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-black tracking-widest text-red-500 uppercase">
              HIGH ENERGY LIVE STUDIO
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-serif">
              100+ <span className="text-red-600">GROUP CLASSES</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm max-w-md mt-4 md:mt-0">
            Transform your cardiovascular endurance and core stability with
            electrifying Bhangra beats, Zumba, Power Vinyasa, and HIIT circuits.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-red-600/60 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-110 brightness-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Badges */}

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase">
                    {item.intensity} Intensity
                  </span>

                  <span className="px-3 py-1 rounded-full bg-black/80 border border-white/10 text-zinc-300 text-[10px] font-bold">
                    {item.duration}
                  </span>
                </div>

                {/* Bottom */}

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white uppercase font-serif tracking-tight">
                    {item.name}
                  </h3>

                  <p className="text-red-400 text-xs font-bold mt-0.5">
                    Avg. Burn: {item.caloriesBurned}
                  </p>
                </div>
              </div>

              {/* Content */}

              <div className="p-5 bg-zinc-900">
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {item.description}
                </p>
                                <button
                  onClick={() => onReserveClass(item.name)}
                  className="mt-4 w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300"
                >
                  Reserve Free Class Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}