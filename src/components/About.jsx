import { User, Sparkles, Heart } from "lucide-react";
import { aboutMe, personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="section-heading-label reveal">
                <User size={14} />
                {aboutMe.heading}
              </div>
              <h2 className="section-heading-title reveal reveal-delay-1">
                A little <span className="italic text-sand-600">about</span> me.
              </h2>
              <p className="reveal reveal-delay-2 text-ink-500 mt-6 leading-relaxed">
                Get to know the person behind the content, ideas, and campaigns.
              </p>

              <div className="reveal reveal-delay-3 mt-10">
                <div className="card p-6 bg-gradient-to-br from-sand-50 via-white to-sage-50">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sand-400 to-sand-500 flex items-center justify-center shadow-soft">
                      <Heart size={22} className="text-white" />
                    </div>
                    <div>
                      <div className="font-display text-xl text-ink-950">What drives me</div>
                      <div className="text-sm text-ink-500">At the core of everything I do</div>
                    </div>
                  </div>
                  <p className="text-ink-600 leading-relaxed text-sm">
                    I believe great marketing starts with understanding people — their questions, their motivations, and the stories they connect with. Every post, campaign and idea is a chance to build something real.
                  </p>
                </div>
              </div>

              <div className="reveal reveal-delay-4 mt-6 grid grid-cols-2 gap-4">
                {/* <div className="card p-5 text-center">
                  <div className="font-display text-4xl text-sand-600 mb-1">5+</div>
                  <div className="text-xs tracking-widest-2 uppercase font-semibold text-ink-400">
                    Creative Areas
                  </div>
                </div> */}
                {/* <div className="card p-5 text-center">
                  <div className="font-display text-4xl text-coral-500 mb-1">∞</div>
                  <div className="text-xs tracking-widest-2 uppercase font-semibold text-ink-400">
                    Ideas & Curiosity
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card p-8 md:p-10 reveal reveal-delay-2">
              <div className="flex items-center gap-2 mb-7">
                <Sparkles size={16} className="text-sand-500" />
                <span className="text-[11px] tracking-widest-2 uppercase font-bold text-sand-700">
                  My Story
                </span>
              </div>

              <div className="space-y-5 text-ink-700 leading-relaxed text-[15px]">
                {aboutMe.paragraph.split("\n\n").map((para, idx) => (
                  <p key={idx} className={idx === 0 ? "text-lg text-ink-800 font-medium leading-relaxed" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-2 mb-6 reveal reveal-delay-3">
                <Sparkles size={14} className="text-coral-500" />
                <span className="text-[11px] tracking-widest-2 uppercase font-bold text-coral-700">
                  Things I love working on
                </span>
              </div>
              <div className="flex flex-wrap gap-3 reveal reveal-delay-4">
                {aboutMe.highlights.map((h, i) => (
                  <span
                    key={h}
                    className="chip px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-5">
              <div className="card p-6 card-hover reveal reveal-delay-3">
                <div className="text-[11px] tracking-widest-2 uppercase font-bold text-ink-400 mb-2">
                  Based in
                </div>
                <div className="font-display text-lg text-ink-950">
                  {personalInfo.location}
                </div>
                {/* <div className="text-sm text-ink-500 mt-1">Open to remote work</div> */}
              </div>

              <div className="card p-6 card-hover reveal reveal-delay-4">
                <div className="text-[11px] tracking-widest-2 uppercase font-bold text-ink-400 mb-2">
                  Email
                </div>
                <div className="font-display text-lg text-ink-950 break-all">
                  {personalInfo.email}
                </div>
                {/* <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1 text-sm text-sand-700 hover:text-sand-900 font-medium mt-1 transition-colors"
                >
                  Say hello →
                </a> */}
              </div>

              <div className="card p-6 card-hover reveal reveal-delay-5">
                <div className="text-[11px] tracking-widest-2 uppercase font-bold text-ink-400 mb-2">
                  Phone
                </div>
                <div className="font-display text-lg text-ink-950">
                  {personalInfo.phone}
                </div>
                {/* <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1 text-sm text-sand-700 hover:text-sand-900 font-medium mt-1 transition-colors"
                >
                  Give a call →
                </a> */}
              </div>
            </div>

            <div className="mt-12 reveal reveal-delay-5">
              <a href="#contact" className="btn-soft w-full sm:w-auto">
                Want to work together? Let&apos;s talk
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
