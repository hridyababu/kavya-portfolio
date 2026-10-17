import SkillIcon from "./_icons";
import { skillCategories } from "../data/portfolioData";
import { Layers } from "lucide-react";

const colorMap = {
  coral: {
    chip: "bg-coral-50 text-coral-700 border-coral-100",
    iconBg: "bg-coral-50 text-coral-600 group-hover:bg-coral-500 group-hover:text-white",
    ring: "group-hover:shadow-[0_0_0_4px_rgba(249,93,64,0.08)]",
  },
  sage: {
    chip: "bg-sage-50 text-sage-700 border-sage-100",
    iconBg: "bg-sage-50 text-sage-700 group-hover:bg-sage-500 group-hover:text-white",
    ring: "group-hover:shadow-[0_0_0_4px_rgba(94,134,105,0.08)]",
  },
  sand: {
    chip: "bg-sand-50 text-sand-700 border-sand-100",
    iconBg: "bg-sand-50 text-sand-700 group-hover:bg-sand-500 group-hover:text-white",
    ring: "group-hover:shadow-[0_0_0_4px_rgba(191,142,94,0.08)]",
  },
  ink: {
    chip: "bg-ink-50 text-ink-700 border-ink-100",
    iconBg: "bg-ink-50 text-ink-700 group-hover:bg-ink-900 group-hover:text-white",
    ring: "group-hover:shadow-[0_0_0_4px_rgba(24,24,28,0.08)]",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="section-heading-label reveal">
              <Layers size={14} />
              Skills
            </div>
            <h2 className="section-heading-title reveal reveal-delay-1">
              Tools and things <span className="italic text-sand-600">I work with.</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-ink-500 max-w-md leading-relaxed">
            A growing mix of creative, social, marketing and web skills — organized so it&apos;s easy to see what I can bring to a project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((cat, ci) => {
            const c = colorMap[cat.accent] || colorMap.ink;
            return (
              <div
                key={cat.name}
                className="card p-7 md:p-9 card-hover reveal"
                style={{ transitionDelay: `${ci * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <span className={`inline-block text-[11px] tracking-widest-2 uppercase font-bold px-3 py-1 rounded-full border ${c.chip} mb-3`}>
                      {`0${ci + 1}`}
                    </span>
                    <h3 className="font-display text-2xl text-ink-950">
                      {cat.name}
                    </h3>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group ${c.iconBg} ${c.ring}`}>
                    <SkillIcon name={cat.skills[0].icon} className="w-5 h-5 transition" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {cat.skills.map((s, si) => (
                    <div
                      key={s.name}
                      className={`group flex items-center gap-3.5 p-4 rounded-2xl bg-ink-50/60 border border-transparent hover:bg-white hover:border-ink-100 hover:shadow-soft transition-all duration-300`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${c.iconBg} ${c.ring}`}>
                        <SkillIcon name={s.icon} className="w-[18px] h-[18px]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-ink-900 font-semibold text-sm leading-tight">
                          {s.name}
                        </div>
                        <div className="w-full mt-2 h-1 rounded-full bg-ink-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-sand-400 to-sand-500 transition-all"
                            style={{ width: `${55 + Math.random() * 35}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
