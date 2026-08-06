import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}

interface FooterProps {
  branches: Branch[];
  onOpenPassModal: () => void;
}

export function Footer({
  branches,
  onOpenPassModal,
}: FooterProps) {
  return (
    <footer className="bg-black border-t border-white/10 py-16 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-900">

          {/* Logo */}

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-xl">
                LF
              </div>

              <span className="text-white font-black tracking-wider text-lg uppercase font-serif">
                LAGOON <span className="text-red-600">FITNESS</span>
              </span>
            </div>

            <p className="text-zinc-500 text-xs leading-relaxed">
              India's premier 24x7 luxury gym chain featuring Matrix equipment,
              live studios, spa facilities and personalized training.
            </p>
          </div>

          {/* Branches */}

          {branches.map((branch) => (
            <div key={branch.id}>
              <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-3">
                {branch.name} Branch
              </h4>

              <div className="space-y-2">

                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </p>

                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  <a
                    href={`tel:${branch.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {branch.phone}
                  </a>
                </p>

                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-500" />
                  <a
                    href={`mailto:${branch.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {branch.email}
                  </a>
                </p>

              </div>
            </div>
          ))}

          {/* Hours */}

          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-3">
              Operating Hours
            </h4>

            <p className="text-red-500 font-bold text-sm mb-2">
              24 Hours / 7 Days A Week
            </p>

            <p className="text-zinc-500 text-[11px]">
              Biometric RFID access available for active members.
            </p>

            <button
              onClick={onOpenPassModal}
              className="mt-4 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Claim Free Trial Pass
            </button>
          </div>

        </div>

        {/* Bottom */}

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-zinc-600 text-[11px]">

          <p>
            © {new Date().getFullYear()} Lagoon Fitness Club.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 sm:mt-0">

            <a
              href="#hero"
              className="hover:text-zinc-400"
            >
              Privacy Policy
            </a>

            <a
              href="#hero"
              className="hover:text-zinc-400"
            >
              Terms of Service
            </a>

            <a
              href="#hero"
              className="hover:text-zinc-400"
            >
              Branch Locations
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}