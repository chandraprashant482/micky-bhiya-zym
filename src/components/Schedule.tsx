import React, { useState } from "react";

interface ScheduleItem {
  id: string;
  day: string;
  time: string;
  className: string;
  trainer: string;
  room: string;
}

interface ScheduleProps {
  schedule: ScheduleItem[];
  branchName: string;
  onJoinClass: () => void;
}

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export function Schedule({
  schedule,
  branchName,
  onJoinClass,
}: ScheduleProps) {
  const [selectedDay, setSelectedDay] =
    useState<(typeof DAYS)[number]>("Monday");

  return (
    <section
      id="schedule"
      className="py-20 bg-zinc-950 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-black tracking-widest text-red-500 uppercase">
            WEEKLY LIVE TIMETABLE
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-serif">
            STUDIO <span className="text-red-600">CLASS SCHEDULE</span>
          </h2>

          <p className="text-zinc-400 text-sm mt-3">
            Daily live sessions hosted at {branchName} Studio. Book early to
            secure your spot!
          </p>
        </div>

        {/* Tabs */}

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                selectedDay === day
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/40"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Cards */}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule
            .filter((item) => item.day === selectedDay)
            .map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between hover:border-red-600/40 transition-colors"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-red-500 uppercase block mb-1">
                    {item.time}
                  </span>

                  <h4 className="text-lg font-black text-white uppercase font-serif">
                    {item.className}
                  </h4>

                  <div className="flex gap-3 text-xs text-zinc-400 mt-1">
                    <span>
                      Coach:
                      <strong className="text-zinc-200">
                        {" "}
                        {item.trainer}
                      </strong>
                    </span>

                    <span>•</span>

                    <span>{item.room}</span>
                  </div>
                </div>

                <button
                  onClick={onJoinClass}
                  className="px-3 py-2 rounded-xl bg-red-600/20 text-red-400 border border-red-600/40 text-xs font-bold uppercase hover:bg-red-600 hover:text-white transition-all"
                >
                  Join
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}