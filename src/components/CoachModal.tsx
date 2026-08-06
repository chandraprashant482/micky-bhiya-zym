import React from "react";
import { Flame, Send, X } from "lucide-react";

interface CoachForm {
  goal: string;
  fitnessLevel: string;
  userQuery: string;
}

interface CoachModalProps {
  open: boolean;
  loading: boolean;
  response: string | null;
  branchName: string;
  form: CoachForm;

  onClose: () => void;

  onSubmit: (e: React.FormEvent) => void;

  setForm: React.Dispatch<
    React.SetStateAction<CoachForm>
  >;
}

export function CoachModal({
  open,
  loading,
  response,
  branchName,
  form,
  onClose,
  onSubmit,
  setForm,
}: CoachModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">

      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">

          <div className="w-10 h-10 rounded-2xl bg-red-600/20 border border-red-600/40 flex items-center justify-center">

            <Flame className="w-5 h-5 text-red-500" />

          </div>

          <div>

            <h3 className="text-xl font-black text-white uppercase font-serif">
              LAGOON <span className="text-red-600">AI FITNESS COACH</span>
            </h3>

            <p className="text-zinc-400 text-xs">
              Personalized workout recommendations for {branchName}
            </p>

          </div>

        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4"
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>

              <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">
                Primary Goal
              </label>

              <select
                value={form.goal}
                onChange={(e) =>
                  setForm({
                    ...form,
                    goal: e.target.value,
                  })
                }
                className="w-full px-3 py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs"
              >
                <option value="Fat Loss & Muscle Toning">
                  Fat Loss & Muscle Toning
                </option>

                <option value="Hypertrophy & Heavy Lifting">
                  Hypertrophy & Heavy Lifting
                </option>

                <option value="Endurance & High Energy Cardio">
                  Endurance & High Energy Cardio
                </option>

                <option value="Flexibility & Core Stability">
                  Flexibility & Core Stability
                </option>

              </select>

            </div>

            <div>

              <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">
                Fitness Level
              </label>

              <select
                value={form.fitnessLevel}
                onChange={(e) =>
                  setForm({
                    ...form,
                    fitnessLevel: e.target.value,
                  })
                }
                className="w-full px-3 py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs"
              >
                <option value="Beginner">
                  Beginner
                </option>

                <option value="Intermediate">
                  Intermediate
                </option>

                <option value="Advanced Athlete">
                  Advanced Athlete
                </option>

              </select>

            </div>

          </div>

          <div>

            <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">
              Your Question
            </label>

            <input
              type="text"
              value={form.userQuery}
              onChange={(e) =>
                setForm({
                  ...form,
                  userQuery: e.target.value,
                })
              }
              placeholder="Ask anything..."
              className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs"
            />

          </div>
                    <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            {loading ? (
              <span>Generating AI Protocol...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Generate Custom Routine</span>
              </>
            )}
          </button>

        </form>

        {/* AI Response */}

        {response && (
          <div className="mt-6 p-5 rounded-2xl bg-black border border-zinc-800 text-zinc-300 text-xs leading-relaxed whitespace-pre-line">

            <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-[11px] mb-3">

              <Flame className="w-4 h-4" />

              <span>
                Coach Recommendations for {branchName}
              </span>

            </div>

            <div>{response}</div>

          </div>
        )}

      </div>
    </div>
  );
}