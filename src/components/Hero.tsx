import React from "react";
import {
  Play,
  ShieldCheck,
  Clock,
  Award,
  Flame,
  ArrowRight,
  Zap,
} from "lucide-react";

interface HeroProps {
  onOpenPassModal: () => void;
  onOpenCoachModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenPassModal,
  onOpenCoachModal,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ================= Background Video ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bagground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Red Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/60"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.30),transparent_60%)]"></div>

      {/* ================= Hero Content ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/40 bg-red-900/20 backdrop-blur-md text-red-300 uppercase tracking-[0.25em] text-xs font-bold mb-8">
          <Flame className="w-4 h-4 animate-pulse text-red-500" />
          PATNA • OPEN 24×7 • PREMIUM FITNESS GYM
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] drop-shadow-2xl">
          <span className="text-white">
            PATNA'S
          </span>

          <br />

          <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
            MOST PREMIUM
          </span>

          <br />

          <span className="italic font-light text-white">
            FITNESS DESTINATION
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-zinc-200 leading-relaxed">
          Experience Patna's most luxurious fitness destination featuring
          world-class Matrix equipment, certified personal trainers,
          strength & cardio zones, functional training, steam spa,
          premium group classes, and 24×7 unlimited access.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

          <button
            onClick={onOpenPassModal}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold uppercase tracking-wider flex items-center gap-3 shadow-2xl shadow-red-600/40 transition-all duration-300 hover:scale-105"
          >
            Claim Free Trial
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#videos"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-300"
          >
            <Play className="w-5 h-5 fill-red-500 text-red-500" />
            Watch Gym Tour
          </a>

          <button
            onClick={onOpenCoachModal}
            className="px-8 py-4 rounded-full border border-red-500/40 bg-black/30 backdrop-blur-md hover:bg-black/50 text-red-300 font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-300"
          >
            <Zap className="w-5 h-5 text-yellow-400" />
            AI Fitness Coach
          </button>

        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/20 pt-10">

          <div className="flex items-center justify-center gap-2 text-white uppercase font-semibold">
            <Clock className="w-5 h-5 text-red-500" />
            24×7 Open
          </div>

          <div className="flex items-center justify-center gap-2 text-white uppercase font-semibold">
            <ShieldCheck className="w-5 h-5 text-red-500" />
            Matrix Equipment
          </div>

          <div className="flex items-center justify-center gap-2 text-white uppercase font-semibold">
            <Award className="w-5 h-5 text-red-500" />
            Certified Trainers
          </div>

          <div className="flex items-center justify-center gap-2 text-white uppercase font-semibold">
            <Flame className="w-5 h-5 text-red-500" />
            Steam & Recovery
          </div>

        </div>

      </div>
    </section>
  );
};