import React from "react";
import { X, CheckCircle2 } from "lucide-react";

interface PassFormData {
  name: string;
  phone: string;
  classInterest: string;
}

interface PassModalProps {
  open: boolean;
  submitted: boolean;
  formData: PassFormData;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  setFormData: React.Dispatch<
    React.SetStateAction<PassFormData>
  >;
}

export function PassModal({
  open,
  submitted,
  formData,
  onClose,
  onSubmit,
  setFormData,
}: PassModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">

            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />

            <h3 className="text-2xl font-black text-white uppercase font-serif">
              TRIAL PASS CONFIRMED!
            </h3>

            <p className="text-zinc-400 text-xs mt-2">
              Our team will contact you shortly on
              <strong> {formData.phone}</strong>.
            </p>

          </div>
        ) : (
          <>
            <div className="text-center mb-6">

              <span className="px-3 py-1 rounded-full bg-red-950 text-red-400 text-[10px] font-extrabold uppercase tracking-wider">
                COMPLIMENTARY ACCESS
              </span>

              <h3 className="text-2xl font-black text-white uppercase mt-2 font-serif">
                GET 1-DAY <span className="text-red-600">FREE PASS</span>
              </h3>

              <p className="text-zinc-400 text-xs mt-1">
                Experience our premium fitness facilities.
              </p>

            </div>

            <form
              onSubmit={onSubmit}
              className="space-y-4"
            >

              <div>

                <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">
                  Your Name
                </label>

                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-red-600"
                />

              </div>

              <div>

                <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">
                  Mobile Number
                </label>

                <input
                  required
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-red-600"
                />

              </div>

              <div>

                <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">
                  Interested Class
                </label>

                <select
                  value={formData.classInterest}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      classInterest: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-red-600"
                >
                  <option value="Zumba">Zumba Fitness</option>
                  <option value="Bhangra">Bhangra Blast</option>
                  <option value="Yoga">Power Yoga</option>
                  <option value="Pilates">Core Pilates</option>
                  <option value="Gym">Gym & Matrix Turf</option>
                </select>

              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-red-600/40 transition-all hover:scale-[1.02]"
              >
                Confirm My Free Pass
              </button>

            </form>
          </>
        )}
      </div>
    </div>
  );
}