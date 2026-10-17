import { useMemo, useState } from "react";
import { works, workCategories } from "../data/portfolioData";
import { Briefcase, ImagePlus, ExternalLink, Tag } from "lucide-react";

export default function Works({ onViewGallery, onViewMetaGallery, onViewReelGallery }) {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? works
        : works.filter((w) => w.category === filter),
    [filter]
  );

  return (
    <section id="works" className="section">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <div className="section-heading-label reveal">
              <Briefcase size={14} />
              My Works
            </div>
            <h2 className="section-heading-title reveal reveal-delay-1">
              Selected <span className="italic text-sand-600">work.</span>
            </h2>
            <p className="reveal reveal-delay-2 text-ink-500 mt-5 leading-relaxed">
              Practice pieces, experiments, and portfolio-ready projects. Add your own projects inside <code className="bg-ink-50 px-1.5 py-0.5 rounded text-xs">portfolioData.js</code> whenever you create something new.
            </p>
          </div>

          <div className="reveal reveal-delay-3 flex flex-wrap gap-2">
            {workCategories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active
                      ? "bg-ink-950 text-white shadow-soft"
                      : "bg-white text-ink-600 border border-ink-100 hover:border-ink-300 hover:text-ink-900"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="card p-16 text-center text-ink-400">
            No projects in this category yet — this will fill up as you add them.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((work, i) => (
              <article
                key={work.title + i}
                className="card card-hover overflow-hidden reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-sand-50 via-sand-100 to-coral-50 relative">
                  {work.image ? (
                    <img
                      src={work.image}
                      alt={work.title}
                      className={`w-full h-full ${work.title.includes("Kachaa")
                          ? "object-contain p-4 bg-white"
                          : "object-cover"
                        } transition-transform duration-700`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 relative">
                      <div
                        aria-hidden
                        className="absolute inset-0 grid-pattern opacity-50"
                      />
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl mx-auto mb-4 bg-white/80 shadow-soft border border-white flex items-center justify-center">
                          <ImagePlus size={26} className="text-sand-500" />
                        </div>
                        <p className="text-xs text-ink-500 font-medium uppercase tracking-widest">
                          Add project image
                        </p>
                        <p className="text-[11px] text-ink-400 mt-1 max-w-[220px]">
                          portfolioData.js → <code>works[{i}].image</code>
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur border border-white text-[11px] font-semibold text-ink-800 shadow-soft">
                    <Tag size={12} />
                    {work.category}
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="font-display text-xl text-ink-950 mb-2 leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-ink-500 text-sm leading-relaxed mb-5 min-h-[60px]">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {work.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-ink-50 text-ink-600 text-[11px] font-medium"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-ink-50 flex items-center justify-between">
                    <span className="text-xs text-ink-400 font-medium">
                      Portfolio item
                    </span>
                    {work.link ? (
                      work.link === "/posters" ? (
                        <button
                          onClick={onViewGallery}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 hover:text-sand-700 transition"
                        >
                          View Project
                          <ExternalLink size={15} />
                        </button>
                      ) : work.link === "/meta-ads" ? (
                        <button
                          onClick={onViewMetaGallery}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 hover:text-sand-700 transition"
                        >
                          View Project
                          <ExternalLink size={15} />
                        </button>
                      ) : work.link === "/reel-edits" ? (
                        <button
                          onClick={onViewReelGallery}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 hover:text-sand-700 transition"
                        >
                          View Project
                          <ExternalLink size={15} />
                        </button>
                      ) : (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 hover:text-sand-700 transition"
                        >
                          View Project
                          <ExternalLink size={15} />
                        </a>
                      )
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-400 italic">
                        Visual only
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
