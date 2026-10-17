import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const fromTop = window.scrollY + 120;
      let current = "";
      navLinks.forEach(({ href }) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return;
        if (el.offsetTop <= fromTop) current = href;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-ink-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3 group select-none"
            aria-label="Kavya K R — Home"
          >
            <span className="w-10 h-10 rounded-xl bg-ink-950 text-sand-300 flex items-center justify-center font-display text-xl font-semibold shadow-soft group-hover:bg-sand-500 group-hover:text-ink-950 transition-colors duration-300">
              K
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-ink-950 font-semibold text-[15px] tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-ink-400 text-[11px] mt-0.5 tracking-widest uppercase font-medium">
                Portfolio
              </span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-full transition-colors ${
                    active === link.href
                      ? "text-ink-950"
                      : "text-ink-500 hover:text-ink-950"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {active === link.href && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-sand-500 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="btn-primary">
              Let&apos;s Work Together
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden w-10 h-10 rounded-xl border border-ink-100 text-ink-900 flex items-center justify-center active:scale-95 transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            open ? "max-h-[620px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="pt-4 pb-5 rounded-3xl bg-white border border-ink-100 shadow-soft">
            <ul className="flex flex-col gap-1 px-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition ${
                      active === link.href
                        ? "bg-sand-50 text-ink-950"
                        : "text-ink-600 hover:bg-ink-50"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4 mt-4">
              <a
                href="#contact"
                onClick={closeMenu}
                className="btn-primary w-full"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
