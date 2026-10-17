import { education } from "../data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section bg-sand-50/40 border-y border-ink-50">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <div className="section-heading-label reveal">
            <GraduationCap size={14} />
            Education
          </div>
          <h2 className="section-heading-title reveal reveal-delay-1">
            Where I&apos;m <span className="italic text-sand-600">learning.</span>
          </h2>
          {/* <p className="reveal reveal-delay-2 text-ink-500 mt-5 leading-relaxed">
            Edit this section in <code className="bg-white px-1.5 py-0.5 rounded text-xs border border-ink-100">portfolioData.js</code> whenever you add a new course or qualification.
          </p> */}
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="hidden md:block absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-sand-300 via-sand-100 to-transparent"
          />

          <ul className="space-y-8 md:space-y-10">
            {education.map((ed, idx) => {
              const isPlaceholder = /^\[/.test(ed.institution);
              return (
                <li
                  key={idx}
                  className="relative reveal"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="md:pl-16 relative">
                    <div
                      aria-hidden
                      className="hidden md:flex absolute left-0 top-6 w-11 h-11 rounded-2xl bg-white border border-sand-200 items-center justify-center shadow-soft z-10"
                    >
                      <GraduationCap size={18} className="text-sand-700" />
                    </div>

                    <div
                      className={`card p-7 md:p-9 card-hover ${
                        isPlaceholder ? "border-dashed border-sand-300 bg-white/80" : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="font-display text-2xl text-ink-950">
                              {ed.course}
                            </h3>
                            {/* {isPlaceholder && (
                              <span className="chip text-sand-700 bg-sand-50 border-sand-200">
                                Editable placeholder
                              </span>
                            )} */}
                          </div>
                          <div className="text-sand-700 font-semibold text-base">
                            {ed.institution}
                          </div>
                        </div>
                        <span className="chip !bg-ink-950 !text-white !border-ink-950 whitespace-nowrap">
                          {ed.year}
                        </span>
                      </div>

                      <p className="text-ink-500 leading-relaxed">{ed.details}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
