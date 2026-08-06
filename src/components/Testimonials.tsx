import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="py-20 bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-red-500 uppercase">
            PATNA MOST TRUSTED GYM
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-serif">
            MEMBER <span className="text-red-600">REVIEWS & STORIES</span>
          </h2>

          <p className="text-zinc-400 text-sm mt-3">
            Hear what our members have to say about their fitness journey.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-4 h-4 fill-current"
                    />
                  ))}
                </div>

                <p className="text-zinc-300 text-xs italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-zinc-800">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-red-600"
                />

                <div>
                  <h4 className="text-white text-xs font-bold uppercase">
                    {testimonial.name}
                  </h4>

                  <span className="text-[10px] text-zinc-500 font-semibold block">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}