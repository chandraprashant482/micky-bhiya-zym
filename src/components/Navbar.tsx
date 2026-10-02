import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =========================
          NAVBAR
         ========================= */}

      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group text-left"
          >
            <img
              src="/laggon_gym_logo.png"
              alt="Lagoon Gym Logo"
              className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div className="flex flex-col">
              <span className="text-white font-black tracking-wider text-xl uppercase font-serif">
                LAGOON{" "}
                <span className="text-red-600">
                  FITNESS
                </span>{" "}
                GYM
              </span>

              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-bold">
                24×7 Ultra Luxury GYM
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Home
            </Link>

            <Link
              to="/videos"
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Workout Videos
            </Link>

            <Link
              to="/#services"
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Services
            </Link>

            <Link
              to="/classes"
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              100+ Classes
            </Link>

            <Link
              to="/schedule"
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Schedule
            </Link>

            <a
  href="/#trainers"
  className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
>
  Trainers
</a>

          </nav>

          {/* MOBILE MENU BUTTON */}

          <div className="md:hidden">
            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="text-zinc-300 hover:text-white transition"
              aria-label="Toggle menu"
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

      {/* MOBILE MENU */}

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden">

          <div className="flex flex-col gap-5">

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
            >
              Home
            </Link>

            <Link
              to="/videos"
              onClick={closeMobileMenu}
              className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
            >
              Workout Videos
            </Link>

            <Link
              to="/#services"
              onClick={closeMobileMenu}
              className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
            >
              Services
            </Link>

            <Link
              to="/classes"
              onClick={closeMobileMenu}
              className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
            >
              100+ Classes
            </Link>

            <Link
              to="/schedule"
              onClick={closeMobileMenu}
              className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
            >
              Schedule
            </Link>

            <a
  href="/#trainers"
  onClick={closeMobileMenu}
  className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
>
  Trainers
</a>

          </div>
        </div>
      )}
    </>
  );
};