import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-10 md:pt-16 pb-20 md:pb-32">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-60" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-sand-200 via-coral-100 to-transparent blur-3xl opacity-60"
      />
      <div
        aria-hidden
        className="absolute -bottom-52 -left-32 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-sage-200 via-sand-100 to-transparent blur-3xl opacity-50"
      />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink-100 shadow-soft text-[11px] tracking-widest-2 uppercase font-semibold text-sand-700 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500" />
              </span>
              Available for new opportunities
            </div>

            <h1 className="reveal reveal-delay-1 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-medium text-ink-950 leading-[1.02] tracking-tight">
              Hi, I&apos;m{" "}
              <span className="italic text-sand-600">{personalInfo.name.split(" ")[0]}</span>
              <span className="block mt-2">
                {personalInfo.title.split(" ").map((word, i) =>
                  i === personalInfo.title.split(" ").length - 1 ? (
                    <span key={i} className="italic text-coral-500">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </span>
            </h1>

            <p className="reveal reveal-delay-2 text-ink-500 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap items-center gap-4 mt-10">
              <a href="#works" className="btn-primary">
                View My Work
                <ArrowDown size={16} className="animate-bounce" />
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            <div className="reveal reveal-delay-4 flex items-center gap-4 mt-12">
              <div className="flex items-center gap-1.5">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl border border-ink-100 flex items-center justify-center text-ink-600 hover:text-ink-950 hover:border-ink-300 hover:bg-ink-50 transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                {/* <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl border border-ink-100 flex items-center justify-center text-ink-600 hover:text-ink-950 hover:border-ink-300 hover:bg-ink-50 transition-all duration-300"
                >
                  <Github size={18} />
                </a> */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="w-11 h-11 rounded-xl border border-ink-100 flex items-center justify-center text-ink-600 hover:text-ink-950 hover:border-ink-300 hover:bg-ink-50 transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
              <div className="h-px w-12 bg-ink-200 hidden sm:block" />
              <div className="text-sm text-ink-500">
                <span className="text-ink-900 font-medium">{personalInfo.location}</span>
                <span className="mx-2 text-ink-300">·</span>
                Kerala, India
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[420px]">
              <div
                aria-hidden
                className="absolute -inset-4 bg-gradient-to-br from-sand-300 via-coral-300 to-sage-300 rounded-[44px] opacity-30 blur-2xl animate-float"
              />

              <div className="relative card rounded-[40px] overflow-hidden aspect-[4/5] shadow-soft-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-white to-sage-50" />

                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                <div
                  className="absolute inset-0 items-center justify-center bg-gradient-to-br from-sand-200 via-sand-100 to-sage-100"
                  style={{ display: "none" }}
                >
                  <div className="text-center">
                    <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-ink-950 to-sand-700 text-sand-200 flex items-center justify-center font-display text-6xl font-semibold shadow-soft-lg">
                      {personalInfo.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/25 to-transparent pointer-events-none"
                />
              </div>

              <div className="absolute -left-4 top-12 card rounded-2xl px-4 py-3 shadow-soft-lg animate-float" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center gap-3">
                  {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-400 to-coral-500 flex items-center justify-center text-white"> */}
                    {/* <span className="font-display text-lg">✨</span> */}
                  {/* </div> */}
                  <div>
                    {/* <div className="text-[10px] tracking-widest-2 uppercase font-bold text-ink-400">Focus</div>
                    <div className="text-sm font-semibold text-ink-900">Creative + Strategy</div> */}
                  </div>
                </div>
              </div>

              {/* <div className="absolute -right-3 bottom-16 card rounded-2xl px-4 py-3 shadow-soft-lg animate-float" style={{ animationDelay: "1.6s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage-400 to-sage-500 flex items-center justify-center text-white">
                    <span className="font-display text-lg">🎯</span>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-widest-2 uppercase font-bold text-ink-400">Currently</div>
                    <div className="text-sm font-semibold text-ink-900">Building Brands</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-5 mt-24 md:mt-32">
          <div className="relative overflow-hidden py-5 border-y border-ink-100">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[...Array(2)].flatMap((_, setIdx) =>
                [
                  "Content Creation",
                  "★",
                  "Social Media Management",
                  "★",
                  "Brand Storytelling",
                  "★",
                  "SEO & Lead Gen",
                  "★",
                  "Canva Design",
                  "★",
                  "WordPress",
                  "★",
                  "Video Editing",
                  "★",
                ].map((item, idx) => (
                  <span
                    key={`${setIdx}-${idx}`}
                    className={`text-2xl md:text-3xl font-display ${
                      item === "★" ? "text-sand-400" : "text-ink-900 italic"
                    }`}
                  >
                    {item}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
