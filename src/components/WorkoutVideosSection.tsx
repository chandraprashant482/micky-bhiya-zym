import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { VideoItem } from "../types";

interface WorkoutVideosSectionProps {
  videos: VideoItem[];
}

export const WorkoutVideosSection: React.FC<WorkoutVideosSectionProps> = ({
  videos,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(
    null
  );

  const filteredVideos = videos.filter(
    (video) =>
      selectedCategory === "all" || video.category === selectedCategory
  );

  const categories = [
    { id: "all", label: "All Videos" },
    { id: "walkthrough", label: "Gym Tour" },
    { id: "workout", label: "Workouts" },
    { id: "zumba", label: "Zumba" },
    { id: "strength", label: "Strength" },
  ];

  return (
    <section
      id="videos"
      className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block text-xs font-black tracking-[0.35em] uppercase text-red-500">
            PREMIUM FITNESS EXPERIENCE
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight">
            EXPLORE OUR
            <br />
            <span className="text-red-600">
              WORKOUT VIDEOS
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-8">
            Discover Lagoon Fitness through exclusive gym walkthroughs,
            transformation stories, strength training sessions, Zumba classes,
            functional workouts, and real member experiences from Patna's most
            premium fitness destination.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm uppercase font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-red-500 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}

        </div>

        {/* Videos */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(220,38,38,0.18)]"
            >

              <div className="relative aspect-video overflow-hidden">

                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {video.duration && (
                  <span className="absolute bottom-4 right-4 px-3 py-1 rounded bg-black/80 text-white text-xs font-bold">
                    {video.duration}
                  </span>
                )}

              </div>

              <div className="p-6">

                <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 border border-red-600/30 text-red-400 text-xs uppercase font-bold">
                  {video.category}
                </span>

                <h3 className="mt-4 text-xl font-black text-white group-hover:text-red-500 transition">
                  {video.title}
                </h3>

                <button
                  onClick={() => setActiveVideoModal(video)}
                  className="mt-6 flex items-center gap-2 text-red-500 font-bold uppercase text-sm hover:text-red-400"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Watch Full Video
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Video Modal */}
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-6">

            <div className="w-full max-w-5xl rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">

              <div className="flex items-center justify-between p-5 border-b border-zinc-800">

                <h3 className="text-white font-bold text-lg">
                  {activeVideoModal.title}
                </h3>

                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="text-zinc-400 hover:text-white"
                >
                  <X size={28} />
                </button>

              </div>

              <div className="aspect-video">

                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoModal.youtubeId}?autoplay=1`}
                  title={activeVideoModal.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};