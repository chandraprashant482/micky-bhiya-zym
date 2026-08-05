import React, { useState } from 'react';
import { Play, X, ExternalLink, Filter } from 'lucide-react';
import { VideoItem, Branch } from '../types';

interface WorkoutVideosSectionProps {
  videos: VideoItem[];
  activeBranch: Branch;
}

export const WorkoutVideosSection: React.FC<WorkoutVideosSectionProps> = ({ videos, activeBranch }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);

  // Filter videos by branch and category
  const filteredVideos = videos.filter((v) => {
    const branchMatch = v.branch === 'all' || v.branch === activeBranch.id;
    const categoryMatch = selectedCategory === 'all' || v.category === selectedCategory;
    return branchMatch && categoryMatch;
  });

  return (
    <section id="videos" className="py-20 bg-zinc-950 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-black tracking-widest text-red-500 uppercase">
            HIGH QUALITY WORKOUT & CLUB SHOWCASE
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-serif">
            EXPLORE <span className="text-red-600">WORKOUT VIDEOS</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Watch real walkthroughs, explosive Zumba group sessions, heavy powerlifting clips, and MMA conditioning at Component Fitness {activeBranch.name}.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            { id: 'all', label: 'All Videos' },
            { id: 'walkthrough', label: 'Club Walkthrough' },
            { id: 'workout', label: 'Workouts & PT' },
            { id: 'zumba', label: 'Zumba & Dance' },
            { id: 'strength', label: 'Strength & Turf' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                selectedCategory === cat.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              {/* Video Thumbnail Container */}
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?controls=1&modestbranding=1`}
                  title={video.title}
                  className="w-full h-full pointer-events-auto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                {/* Duration Tag */}
                {video.duration && (
                  <span className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/80 text-white text-[10px] font-mono font-bold">
                    {video.duration}
                  </span>
                )}
              </div>

              {/* Card Meta Info */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-800/50 text-red-400 text-[10px] font-bold uppercase">
                      {video.category}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-semibold uppercase">
                      {video.branch === 'all' ? 'All Branches' : `${video.branch} Branch`}
                    </span>
                  </div>
                  <h3 className="text-white font-extrabold text-base line-clamp-2 group-hover:text-red-500 transition-colors">
                    {video.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveVideoModal(video)}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-red-500 hover:text-red-400 uppercase tracking-wider"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Open Full Screen</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Fullscreen Modal */}
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
            <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                <h3 className="text-white font-bold text-sm sm:text-base">
                  {activeVideoModal.title}
                </h3>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
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
