import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Instagram,
  Facebook,
  Lock,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setMsg("Please fill in Name, Email and Message.");
      return;
    }
    setStatus("loading");
    setMsg("");

    // Lightweight client-side "send": open the user's email client as a fallback
    // since no backend is required per the spec.
    setTimeout(() => {
      const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Hi Kavya,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
      );
      try {
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      } catch {
        /* noop */
      }
      setStatus("success");
      setMsg("Thanks — your email client should now be open. Otherwise, email me directly at the address below.");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    }, 900);
  };

  const linkedinSet = personalInfo.social.linkedin && personalInfo.social.linkedin !== "#";
  const githubSet = personalInfo.social.github && personalInfo.social.github !== "#";

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-sand-50/60 via-white to-white"
      />

      <div className="container-wide relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-heading-label reveal justify-center">
            <Sparkles size={14} />
            Contact
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-medium text-ink-950 leading-[1.05] tracking-tight">
            Let&apos;s <span className="italic text-sand-600">work together.</span>
          </h2>
          <p className="reveal reveal-delay-2 text-ink-500 mt-5 leading-relaxed">
            Got a project, internship opportunity, brand idea or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-5 space-y-4 reveal"> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start"> */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-4 reveal">
            <a
              href={`mailto:${personalInfo.email}`}
              // className="card card-hover p-6 flex items-start gap-4 group block"
              // className="card card-hover p-5 md:p-6 flex items-start gap-4 group block h-full min-w-0"
              className="card card-hover p-6 flex items-start gap-4 group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-coral-50 text-coral-600 flex items-center justify-center group-hover:bg-coral-500 group-hover:text-white transition-colors">
                <Mail size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] uppercase tracking-widest font-bold text-ink-400 mb-1">
                  Email
                </div>
                <div className="font-semibold text-ink-950 break-words group-hover:text-sand-700 transition-colors">
                  {personalInfo.email}
                </div>
                <div className="text-ink-400 text-xs mt-1">Send me an email anytime</div>
              </div>
            </a>

            <div className="card p-6 flex items-start gap-4 group block">
              <div className="w-12 h-12 rounded-2xl bg-sage-50 text-sage-700 flex items-center justify-center group-hover:bg-sage-500 group-hover:text-white transition-colors">
                <Phone size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] uppercase tracking-widest font-bold text-ink-400 mb-1">
                  Phone / WhatsApp
                </div>
                <div className="font-semibold text-ink-950 break-words group-hover:text-sand-700 transition-colors">
                  {personalInfo.phone}
                </div>
                <div className="text-ink-400 text-xs mt-1">Direct contact number</div>
              </div>
            </div>

            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sand-50 text-sand-700 flex items-center justify-center">
                <MapPin size={22} />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-widest font-bold text-ink-400 mb-1">
                  Based in
                </div>
                <div className="font-semibold text-ink-950">{personalInfo.location}</div>
                <div className="text-ink-400 text-xs mt-1">Open to remote work</div>
              </div>
            </div>

            <div className="card p-6">
              <div className="text-[11px] uppercase tracking-widest font-bold text-ink-400 mb-4">
                Socials
              </div>
              <div className="grid grid-cols-4 gap-2">
                <a
                  href={personalInfo.social.linkedin}
                  target={linkedinSet ? "_blank" : undefined}
                  rel="noreferrer"
                  onClick={(e) => {
                    if (!linkedinSet) {
                      e.preventDefault();
                    }
                  }}
                  className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-all ${linkedinSet
                      ? "bg-ink-50 text-ink-800 hover:bg-[#0A66C2] hover:text-white"
                      : "bg-ink-50 text-ink-400 border border-dashed border-ink-200 cursor-help"
                    }`}
                  title={linkedinSet ? "LinkedIn" : "LinkedIn placeholder — edit in portfolioData.js"}
                >
                  {linkedinSet ? (
                    <Linkedin size={20} />
                  ) : (
                    <>
                      <Lock size={16} />
                      <span className="text-[9px] tracking-wider uppercase">Set URL</span>
                    </>
                  )}
                  <span className={linkedinSet ? "text-[10px]" : "sr-only"}>LinkedIn</span>
                </a>

                {/* <a
                  href={personalInfo.social.github}
                  target={githubSet ? "_blank" : undefined}
                  rel="noreferrer"
                  onClick={(e) => {
                    if (!githubSet) e.preventDefault();
                  }}
                  className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-all ${
                    githubSet
                      ? "bg-ink-50 text-ink-800 hover:bg-ink-950 hover:text-white"
                      : "bg-ink-50 text-ink-400 border border-dashed border-ink-200 cursor-help"
                  }`}
                  title={githubSet ? "GitHub" : "GitHub placeholder — edit in portfolioData.js"}
                >
                  {githubSet ? (
                    <Github size={20} />
                  ) : (
                    <>
                      <Lock size={16} />
                      <span className="text-[9px] tracking-wider uppercase">Set URL</span>
                    </>
                  )}
                  <span className={githubSet ? "text-[10px]" : "sr-only"}>GitHub</span>
                </a> */}

                {/* <a
                  href={personalInfo.social.instagram}
                  onClick={(e) => personalInfo.social.instagram === "#" && e.preventDefault()}
                  className="aspect-square rounded-2xl bg-ink-50 text-ink-800 flex flex-col items-center justify-center gap-1 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white transition-all"
                  title="Instagram"
                >
                  <Instagram size={20} />
                  <span className="text-[10px]">Instagram</span>
                </a> */}

                {/* <a
                  href={personalInfo.social.facebook}
                  onClick={(e) => personalInfo.social.facebook === "#" && e.preventDefault()}
                  className="aspect-square rounded-2xl bg-ink-50 text-ink-800 flex flex-col items-center justify-center gap-1 hover:bg-[#1877F2] hover:text-white transition-all"
                  title="Facebook"
                >
                  <Facebook size={20} />
                  <span className="text-[10px]">Facebook</span>
                </a> */}
              </div>

              {/* <p className="text-[11px] text-ink-400 mt-4 leading-relaxed">
                LinkedIn and GitHub URLs are shown as placeholders until you add them in <code className="bg-ink-50 px-1 rounded">portfolioData.js</code> → <code className="bg-ink-50 px-1 rounded">personalInfo.social</code>.
              </p> */}
            </div>
          </div>

          {/* <div className="lg:col-span-7 reveal reveal-delay-2">
            <form onSubmit={handleSubmit} className="card p-7 md:p-9 shadow-soft">
              <div className="flex items-start gap-4 mb-7 pb-6 border-b border-ink-50">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sand-400 to-sand-500 text-white flex items-center justify-center shadow-soft">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-ink-950">Send me a message</h3>
                  <p className="text-ink-500 text-sm mt-1">
                    Fill the form — on submit it will open your email client with a pre-filled message.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-ink-600 mb-2 ml-1">
                    Name <span className="text-coral-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-ink-100 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-sand-400 focus:ring-4 focus:ring-sand-100 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink-600 mb-2 ml-1">
                    Email <span className="text-coral-500">*</span>
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-ink-100 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-sand-400 focus:ring-4 focus:ring-sand-100 transition"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-ink-600 mb-2 ml-1">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="Project inquiry / Internship / Just saying hi"
                  className="w-full rounded-2xl border border-ink-100 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-sand-400 focus:ring-4 focus:ring-sand-100 transition"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-ink-600 mb-2 ml-1">
                  Message <span className="text-coral-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Tell me a little about your project, brand, or what you'd like to work on together..."
                  className="w-full resize-none rounded-2xl border border-ink-100 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-sand-400 focus:ring-4 focus:ring-sand-100 transition leading-relaxed"
                />
              </div>

              {msg && (
                <div
                  className={`mb-5 p-4 rounded-2xl text-sm flex items-start gap-3 ${
                    status === "success"
                      ? "bg-sage-50 text-sage-800 border border-sage-100"
                      : "bg-coral-50 text-coral-800 border border-coral-100"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                  )}
                  <span className="leading-relaxed">{msg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full py-4 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-[11px] text-ink-400 mt-5 text-center leading-relaxed">
                Prefer to email directly? <a href={`mailto:${personalInfo.email}`} className="text-sand-700 font-semibold hover:underline">{personalInfo.email}</a>
              </p>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
