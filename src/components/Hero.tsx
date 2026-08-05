import React from 'react';
import { Play, ShieldCheck, Clock, Award, Flame, ArrowRight, Zap } from 'lucide-react';
import { Branch } from '../types';

interface HeroProps {
  activeBranch: Branch;
  onOpenPassModal: () => void;
  onOpenCoachModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  activeBranch,
  onOpenPassModal,
  onOpenCoachModal,
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black py-16">
      {/* Background Video Simulation with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105 filter contrast-125"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-man-runs-on-treadmill-in-gym-42631-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Red Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-black" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-white/10 shadow-2xl animate-bounce duration-[3000ms]">
        <div className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center text-red-500 font-bold">
          24/7
        </div>
        <div>
          <p className="text-white text-xs font-bold uppercase">Always Open</p>
          <p className="text-zinc-400 text-[10px]">Biometric RFID Entry</p>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-10 hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-white/10 shadow-2xl">
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">
          100+
        </div>
        <div>
          <p className="text-white text-xs font-bold uppercase">Weekly Group Classes</p>
          <p className="text-zinc-400 text-[10px]">Zumba, Yoga, Bhangra & MMA</p>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Branch Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/60 border border-red-600/50 text-red-400 text-xs font-extrabold uppercase tracking-widest mb-6 shadow-inner">
          <Flame className="w-4 h-4 text-red-500 animate-pulse" />
          <span>{activeBranch.tagline}</span>
        </div>

        {/* Main Display Typography */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.9] font-serif">
          MOST <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-amber-500">PREMIUM</span>
          <br />
          <span className="italic font-light text-zinc-200">BIGGEST CLUB</span>
          <br />
          OF <span className="text-red-600 underline decoration-red-600/40">{activeBranch.name.toUpperCase()}</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
          Elevate your fitness journey with bi-mechanically engineered Matrix machines, high-energy live group fitness, luxury steam baths, and 24x7 unrestricted access.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenPassModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-extrabold text-sm uppercase tracking-widest shadow-2xl shadow-red-600/50 flex items-center justify-center gap-3 group transition-all hover:scale-105"
          >
            <span>Claim Free 1-Day Trial Pass</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#videos"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-white font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:border-red-500/50"
          >
            <Play className="w-4 h-4 text-red-500 fill-red-500" />
            <span>Watch Club Tour Videos</span>
          </a>

          <button
            onClick={onOpenCoachModal}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-red-600/40 text-red-400 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Ask AI Coach</span>
          </button>
        </div>

        {/* Key USPs Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10">
          <div className="flex items-center justify-center gap-2 text-zinc-300 text-xs font-bold uppercase">
            <Clock className="w-4 h-4 text-red-500" />
            <span>24x7 Always Open</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-zinc-300 text-xs font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>Matrix Equipments</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-zinc-300 text-xs font-bold uppercase">
            <Award className="w-4 h-4 text-red-500" />
            <span>Certified PT Masters</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-zinc-300 text-xs font-bold uppercase">
            <Flame className="w-4 h-4 text-red-500" />
            <span>Eucalyptus Steam Spa</span>
          </div>
        </div>

      </div>
    </section>
  );
};
