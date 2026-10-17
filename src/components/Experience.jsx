import { Briefcase, CheckCircle2 } from "lucide-react";
import { experiences, experiencePlaceholder } from "../data/portfolioData";

export default function Experience() {
  const items = experiences.length > 0 ? experiences : [experiencePlaceholder];
  const isPlaceholder = experiences.length === 0;

  return (
    <section id="experience" className="section bg-sand-50/40 border-y border-ink-50">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <div className="section-heading-label reveal">
            <Briefcase size={14} />
            Experience
          </div>
          <h2 className="section-heading-title reveal reveal-delay-1">
            My <span className="italic text-sand-600">journey</span> so far.
          </h2>
          {/* <p className="reveal reveal-delay-2 text-ink-500 mt-5 leading-relaxed">
            {isPlaceholder
              ? "This section is ready for your first experience or internship — update it whenever you're ready."
              : "Roles, teams and projects I've contributed to as I grow in digital marketing."}
          </p> */}
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="hidden md:block absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-sand-300 via-sand-100 to-transparent"
          />

          <ul className="space-y-10 md:space-y-14">
            {items.map((exp, idx) => (
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
                    <Briefcase size={18} className="text-sand-700" />
                  </div>

                  <div
                    className={`card p-7 md:p-9 card-hover ${
                      isPlaceholder
                        ? "border-dashed border-sand-300 bg-white/80"
                        : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-display text-2xl text-ink-950">
                            {exp.role}
                          </h3>
                          {/* {isPlaceholder && (
                            <span className="chip text-sand-700 bg-sand-50 border-sand-200">
                              Placeholder
                            </span>
                          )} */}
                        </div>
                        <div className="text-sand-700 font-semibold text-base">
                          {exp.company}
                        </div>
                      </div>
                      {/* <span className="chip !bg-ink-950 !text-white !border-ink-950 whitespace-nowrap">
                        {exp.duration}
                      </span> */}
                    </div>

                    <p className="text-ink-600 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.responsibilities.map((r, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-sm text-ink-700 group"
                        >
                          {/* <span className="mt-0.5 text-sand-600">
                            <CheckCircle2 size={17} />
                          </span> */}
                          <span className="leading-relaxed group-hover:text-ink-900 transition-colors">
                            {r}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
