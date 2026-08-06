import React from "react";
import { PhoneCall } from "lucide-react";

const CallButton: React.FC = () => {
  return (
    <a
      href="tel:+916206145456"
      aria-label="Call Now"
      className="fixed bottom-8 left-8 z-50 group"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-2xl animate-breathing animate-blinking"></div>

      {/* Ripple */}
      <div className="absolute inset-0 rounded-full border border-white/30 animate-ripple"></div>

      {/* Button */}
      <div
        className="
          relative
          w-16
          h-16
          rounded-full
          bg-gradient-to-br
          from-blue-600
          to-cyan-500
          flex
          items-center
          justify-center
          backdrop-blur-xl
          border
          border-white/10
          shadow-[0_12px_40px_rgba(6,182,212,.45)]
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-[0_18px_55px_rgba(6,182,212,.65)]
          active:scale-95
        "
      >
        <PhoneCall className="w-7 h-7 text-white" />
      </div>

      {/* Tooltip */}
      <div
        className="
          absolute
          left-full
          ml-5
          top-1/2
          -translate-y-1/2
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          hidden
          sm:block
        "
      >
        <div
          className="
            backdrop-blur-xl
            bg-white/10
            border
            border-white/15
            rounded-xl
            px-5
            py-3
            shadow-xl
            whitespace-nowrap
          "
        >
          <p className="text-white text-sm font-semibold">
            Call Now
          </p>

          <p className="text-cyan-300 text-xs mt-1">
            +91 62061 45456
          </p>
        </div>
      </div>
    </a>
  );
};

export default CallButton;