import { personalInfo, navLinks } from "../data/portfolioData";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ArrowUp,
  Sparkles,
  Lock,
} from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const year = new Date().getFullYear();
  const linkedinSet = personalInfo.social.linkedin && personalInfo.social.linkedin !== "#";
  const githubSet = personalInfo.social.github && personalInfo.social.github !== "#";

  return (
    <footer className="bg-ink-950 text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="container-wide relative py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-8 mb-14">
          <div className="lg:col-span-5 max-w-lg">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-11 h-11 rounded-xl bg-sand-400 text-ink-950 flex items-center justify-center font-display text-xl font-semibold shadow-soft">
                K
              </span>
              <div>
                <div className="text-xl font-semibold tracking-tight text-white">
                  {personalInfo.name}
                </div>
                <div className="text-sand-300/80 text-[11px] tracking-widest uppercase font-medium">
                  Personal Portfolio · {year}
                </div>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed text-sm mb-6 max-w-md">
              Digital Marketing | Creativity | Content | Strategy
              <br />
              Always open to new projects, collaborations and learning opportunities.
            </p>

            <div className="flex flex-wrap gap-2">
              {/* <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-sand-400 hover:text-ink-950 hover:border-sand-400 transition-all"
              >
                <Mail size={15} />
                Email
              </a> */}
              {/* <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-sage-500 hover:text-white hover:border-sage-500 transition-all"
              >
                <Phone size={15} />
                Phone
              </a> */}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] tracking-widest-2 uppercase font-bold text-sand-300 mb-5">
              <Sparkles size={12} className="inline -mt-0.5 mr-1" />
              Navigate
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/70 hover:text-sand-300 transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] tracking-widest-2 uppercase font-bold text-sand-300 mb-5">
              Contact
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-sand-300 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white/75 hover:text-sand-300 transition break-all"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-sand-300 mt-0.5 flex-shrink-0" />
                <span className="text-white/75 transition">
                  {personalInfo.phone}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin
                  size={16}
                  className={`mt-0.5 flex-shrink-0 ${
                    linkedinSet ? "text-sand-300" : "text-white/30"
                  }`}
                />
                {linkedinSet ? (
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/75 hover:text-sand-300 transition break-all"
                  >
                    LinkedIn
                  </a>
                ) : (
                  <span className="text-white/45 italic flex items-center gap-2">
                    <Lock size={12} />
                    LinkedIn URL — add in portfolioData.js
                  </span>
                )}
              </li>
              {/* <li className="flex items-start gap-3">
                <Github
                  size={16}
                  className={`mt-0.5 flex-shrink-0 ${
                    githubSet ? "text-sand-300" : "text-white/30"
                  }`}
                />
                {githubSet ? (
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/75 hover:text-sand-300 transition break-all"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="text-white/45 italic flex items-center gap-2">
                    <Lock size={12} />
                    GitHub URL — add in portfolioData.js
                  </span>
                )}
              </li> */}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/50 text-xs">
            © {year} {personalInfo.name}. All rights reserved.
          </p>

          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 hover:bg-sand-400 hover:text-ink-950 hover:border-sand-400 transition-all"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
