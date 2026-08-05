import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, Menu, X, Flame } from 'lucide-react';
import { Branch } from '../types';

interface NavbarProps {
  branches: Branch[];
  activeBranch: Branch;
  onSelectBranch: (branchId: string) => void;
  onOpenPassModal: () => void;
  onOpenCoachModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  branches,
  activeBranch,
  onSelectBranch,
  onOpenPassModal,
  onOpenCoachModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [branchDropdownOpen, setBranchDropdownOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
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
            <a href="#hero" className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition-colors">
              Home
            </a>
            <a href="#videos" className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition-colors">
              Workout Videos
            </a>
            <a href="#services" className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition-colors">
              Services
            </a>
            <a href="#classes" className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition-colors">
              100+ Classes
            </a>
            <a href="#schedule" className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition-colors">
              Schedule
            </a>
            <a href="#trainers" className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition-colors">
              Trainers
            </a>

            {/* Branch Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setBranchDropdownOpen(!branchDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-red-600/40 text-white text-xs font-bold uppercase hover:border-red-500 transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>{activeBranch.name}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${branchDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {branchDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl py-2 z-50">
                  <div className="px-3 py-1 text-[11px] font-bold text-zinc-500 uppercase">Select Branch</div>
                  {branches.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => {
                        onSelectBranch(b.id);
                        setBranchDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between transition-colors ${
                        activeBranch.id === b.id
                          ? 'bg-red-600/20 text-red-500 border-l-2 border-red-600'
                          : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                      }`}
                    >
                      <span>{b.name}</span>
                      <span className="text-[10px] text-zinc-500 font-normal">24x7</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenCoachModal}
              className="px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-red-600/50 text-red-400 font-bold text-xs uppercase flex items-center gap-2 transition-all hover:scale-105"
            >
              <Flame className="w-4 h-4 text-red-500 animate-pulse" />
              <span>AI Coach</span>
            </button>

            <button
              onClick={onOpenPassModal}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all hover:scale-105"
            >
              Free Trial Pass
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenPassModal}
              className="px-3 py-1.5 rounded-full bg-red-600 text-white font-bold text-[11px] uppercase tracking-wider"
            >
              Trial Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col p-6 pt-24 md:hidden">
          <div className="flex flex-col gap-4 text-center">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 py-2 border-b border-zinc-800"
            >
              Home
            </a>
            <a
              href="#videos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 py-2 border-b border-zinc-800"
            >
              Workout Videos
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 py-2 border-b border-zinc-800"
            >
              Our Services
            </a>
            <a
              href="#classes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 py-2 border-b border-zinc-800"
            >
              100+ Group Classes
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 py-2 border-b border-zinc-800"
            >
              Class Schedule
            </a>
            <a
              href="#trainers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-zinc-200 hover:text-red-500 py-2 border-b border-zinc-800"
            >
              Meet Trainers
            </a>

            {/* Mobile Branch Switcher */}
            <div className="mt-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-xs text-zinc-400 uppercase font-bold block mb-2">Switch Branch:</span>
              <div className="flex gap-2 justify-center">
                {branches.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      onSelectBranch(b.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                      activeBranch.id === b.id
                        ? 'bg-red-600 text-white'
                        : 'bg-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCoachModal();
              }}
              className="mt-2 w-full py-3 rounded-xl bg-zinc-800 border border-red-600/40 text-red-400 font-bold uppercase flex items-center justify-center gap-2"
            >
              <Flame className="w-5 h-5 text-red-500" />
              <span>Ask AI Fitness Coach</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPassModal();
              }}
              className="w-full py-3 rounded-xl bg-red-600 text-white font-extrabold uppercase tracking-wider"
            >
              Get Free 1-Day Trial Pass
            </button>
          </div>
        </div>
      )}
    </>
  );
};
