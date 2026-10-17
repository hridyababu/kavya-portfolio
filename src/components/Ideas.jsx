import SkillIcon from "./_icons";
import { ideas } from "../data/portfolioData";
import { Compass } from "lucide-react";

export default function Ideas() {
  return (
    <section id="ideas" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="absolute top-0 -left-20 w-[420px] h-[420px] rounded-full bg-coral-500/20 blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -right-20 w-[420px] h-[420px] rounded-full bg-sand-400/20 blur-3xl opacity-70"
      />

      <div className="container-wide relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="section-heading-label reveal !text-sand-300/90">
              <Compass size={14} />
              Ideas & Inspiration
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.05] tracking-tight">
              Where my mind goes <br />
              <span className="italic text-sand-300">when I create.</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-white/60 max-w-md leading-relaxed">
            These are not client projects. They&apos;re the kind of concepts, directions and ideas I&apos;m drawn to — a peek into how I think about brands, content and the internet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {ideas.map((idea, i) => (
            <article
              key={idea.title}
              className="reveal group relative p-7 rounded-3xl bg-white/5 backdrop-blur border border-white/10 hover:border-sand-300/30 hover:bg-white/[0.07] transition-all duration-500 overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${idea.gradient} opacity-20 blur-3xl transition-all duration-700 group-hover:opacity-40 group-hover:scale-125`}
              />

              <div className="relative">
                <div
                  className={`inline-flex items-center text-[10px] tracking-widest-2 uppercase font-bold px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10 mb-5`}
                >
                  {idea.tag}
                </div>

                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${idea.gradient} flex items-center justify-center shadow-lg group-hover:-translate-y-1 group-hover:rotate-[-6deg] transition-transform duration-500`}
                  >
                    <SkillIcon name={idea.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-display text-white/15 text-4xl leading-none">
                    0{i + 1}
                  </div>
                </div>

                <h3 className="font-display text-2xl text-white mb-3 leading-snug group-hover:text-sand-200 transition-colors">
                  {idea.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {idea.description}
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-white/40 group-hover:text-sand-300 transition-colors">
                  {/* <span className="italic">Concept</span> */}
                  <span className="w-full h-px bg-white/10 flex-1" />
                  {/* <span className="italic">Not a client deliverable</span */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
