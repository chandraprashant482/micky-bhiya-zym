import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
              LF
            </div>

            <div className="flex flex-col">
              <span className="text-white font-black tracking-wider text-xl uppercase font-serif">
                LAGOON <span className="text-red-600">FITNESS</span>
              </span>

              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-bold">
                24X7 Ultra Luxury Club
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Home
            </a>

            <a
              href="#videos"
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Workout Videos
            </a>

            <a
              href="#services"
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Services
            </a>

            <a
              href="#classes"
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              100+ Classes
            </a>

            <a
              href="#schedule"
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Schedule
            </a>

            <a
              href="#trainers"
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Trainers
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-5">

            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3"
            >
              Home
            </a>

            <a
              href="#videos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3"
            >
              Workout Videos
            </a>

            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3"
            >
              Services
            </a>

            <a
              href="#classes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3"
            >
              100+ Classes
            </a>

            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3"
            >
              Schedule
            </a>

            <a
              href="#trainers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3"
            >
              Trainers
            </a>

          </div>
        </div>
      )}
    </>
  );
};