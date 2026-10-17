import SkillIcon from "./_icons";
import { services } from "../data/portfolioData";
import { Sparkles as HandSparkle } from "lucide-react";

const accentMap = {
  sage: {
    grad: "from-sage-400 to-sage-500",
    soft: "bg-sage-50 text-sage-700 border-sage-100",
  },
  coral: {
    grad: "from-coral-400 to-coral-500",
    soft: "bg-coral-50 text-coral-700 border-coral-100",
  },
  sand: {
    grad: "from-sand-400 to-sand-500",
    soft: "bg-sand-50 text-sand-700 border-sand-100",
  },
  ink: {
    grad: "from-ink-600 to-ink-800",
    soft: "bg-ink-50 text-ink-700 border-ink-100",
  },
};

export default function Services() {
  return (
    <section id="services" className="section bg-sand-50/40 border-y border-ink-50">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="section-heading-label reveal justify-center">
            <HandSparkle size={14} />
            What I Can Do
          </div>
          <h2 className="section-heading-title reveal reveal-delay-1 !text-3xl md:!text-5xl">
            Services I can <span className="italic text-sand-600">help with.</span>
          </h2>
          <p className="reveal reveal-delay-2 text-ink-500 mt-5 leading-relaxed">
            Simple, honest offerings — kept realistic for a student starting out. If you&apos;re a small brand, college club, founder or friend with an idea, these are the ways I can help.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const a = accentMap[s.color] || accentMap.ink;
            return (
              <article
                key={s.title}
                className="group card p-7 card-hover reveal flex flex-col"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-gradient-to-br ${a.grad} shadow-soft group-hover:shadow-soft-lg group-hover:-translate-y-1`}
                >
                  <SkillIcon name={s.icon} className="w-6 h-6 text-white" />
                </div>

                <div className={`inline-flex items-center self-start text-[10px] tracking-widest-2 uppercase font-bold px-3 py-1 rounded-full border mb-4 ${a.soft}`}>
                  {`Service · 0${i + 1}`}
                </div>

                <h3 className="font-display text-xl text-ink-950 mb-3 leading-snug">
                  {s.title}
                </h3>

                <p className="text-ink-500 text-sm leading-relaxed flex-1">
                  {s.description}
                </p>

                <div className="mt-6 pt-5 border-t border-ink-50 flex items-center justify-between text-sm">
                  <span className="text-ink-400">Perfect for</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-ink-900 group-hover:text-sand-600 transition-colors">
                    Small brands / starters
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
