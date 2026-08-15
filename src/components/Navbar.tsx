import React, { useState } from "react";
import { Menu, X } from "lucide-react";

type Page = "home" | "videos" | "classes" | "schedule";

interface NavbarProps {
  onNavigate: (page: Page, section?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = (
    page: Page,
    section?: string
  ) => {
    onNavigate(page, section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =========================
          NAVBAR
         ========================= */}

      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* =========================
              LOGO
             ========================= */}

          <button
            onClick={() => navigate("home")}
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
          </button>

          {/* =========================
              DESKTOP NAVIGATION
             ========================= */}

          <nav className="hidden md:flex items-center gap-8">

            {/* Home */}
            <button
              onClick={() => navigate("home")}
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Home
            </button>

            {/* Workout Videos */}
            <button
              onClick={() => navigate("videos")}
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Workout Videos
            </button>

            {/* Services */}
            <button
              onClick={() =>
                navigate("home", "services")
              }
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Services
            </button>

            {/* 100+ Classes */}
            <button
              onClick={() => navigate("classes")}
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              100+ Classes
            </button>

            {/* Schedule */}
            <button
              onClick={() => navigate("schedule")}
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Schedule
            </button>

            {/* Trainers */}
            <button
              onClick={() =>
                navigate("home", "trainers")
              }
              className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition"
            >
              Trainers
            </button>

          </nav>

          {/* =========================
              MOBILE MENU BUTTON
             ========================= */}

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

      {/* =========================
          MOBILE MENU
         ========================= */}

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden">

          <div className="flex flex-col gap-5">

            {/* Home */}
            <button
              onClick={() => navigate("home")}
              className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
            >
              Home
            </button>

            {/* Workout Videos */}
            <button
              onClick={() => navigate("videos")}
              className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
            >
              Workout Videos
            </button>

            {/* Services */}
            <button
              onClick={() =>
                navigate("home", "services")
              }
              className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
            >
              Services
            </button>

            {/* 100+ Classes */}
            <button
              onClick={() => navigate("classes")}
              className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
            >
              100+ Classes
            </button>

            {/* Schedule */}
            <button
              onClick={() => navigate("schedule")}
              className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
            >
              Schedule
            </button>

            {/* Trainers */}
            <button
              onClick={() =>
                navigate("home", "trainers")
              }
              className="text-left text-lg font-bold text-zinc-200 hover:text-red-500 border-b border-zinc-800 pb-3 transition"
            >
              Trainers
            </button>

          </div>
        </div>
      )}
    </>
  );
};