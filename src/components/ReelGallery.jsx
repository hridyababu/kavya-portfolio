import { useState, useEffect } from "react";
import { Instagram, ExternalLink } from "lucide-react";

const reels = [
  {
    url: "https://www.instagram.com/reel/DG54YbcSfZ3/?cplk=aGRkNXhwNXN4dTZn",
    title: "Reel Edit — Sample 1",
    description: "Creative cut exploring transitions and brand pacing.",
  },
  {
    url: "https://www.instagram.com/reel/DGyAF_-grTG/?xtok=aXRsZXdrYnVnZXZj",
    title: "Reel Edit — Sample 2",
    description: "Short-form content focused on storytelling and engagement.",
  },
  {
    url: "https://www.instagram.com/reel/DGTAQjeAzfB/?srtk=MWRxYmE4NXZ1dTY0MQ==",
    title: "Reel Edit — Sample 3",
    description: "Social media video showcasing visual effects and timing.",
  },
  {
    url: "https://www.instagram.com/reel/DdgthoTzpnS/?vrfl=cnkzdTZ1am5uYTNh",
    title: "Reel Edit — Sample 4",
    description: "Practice cut featuring audio-visual synchronization.",
  },
];

export default function ReelGallery({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-white px-5 py-12 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Back to portfolio */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
        >
          ← Back to Portfolio
        </button>

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
            Social Media Content
          </p>

          <h1 className="font-display text-3xl font-medium text-gray-900 md:text-5xl">
            Reel Edits — Practice Cuts
          </h1>

          <p className="mt-4 max-w-2xl leading-relaxed text-gray-500">
            A collection of short-form video edits experimenting with pacing, 
            captions, trending sounds, and call-to-action hooks for Instagram.
          </p>
        </div>

        {/* Reels grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((reel, index) => (
            <a
              key={reel.url}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral-400 to-coral-500 flex items-center justify-center text-white shadow-soft">
                  <Instagram size={24} />
                </div>
                <div className="text-[10px] tracking-widest-2 uppercase font-bold text-gray-400">
                  Reel 0{index + 1}
                </div>
              </div>

              <h2 className="font-display text-xl text-gray-900 mb-2">
                {reel.title}
              </h2>

              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {reel.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-coral-500 transition-colors">
                Watch on Instagram
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
