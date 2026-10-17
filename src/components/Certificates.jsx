// import { certificates } from "../data/portfolioData";
// import { Award, ImagePlus, ExternalLink, Lock } from "lucide-react";

// export default function Certificates() {
//   return (
//     <section id="certificates" className="section">
//       <div className="container-wide">
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <div className="section-heading-label reveal justify-center">
//             <Award size={14} />
//             Certificates
//           </div>
//           <h2 className="section-heading-title reveal reveal-delay-1 !text-3xl md:!text-5xl">
//             Badges, courses & <span className="italic text-sand-600">certifications.</span>
//           </h2>
//           <p className="reveal reveal-delay-2 text-ink-500 mt-5 leading-relaxed">
//             This section is easy to update — add certificate image, issuer name, date and verification link in <code className="bg-ink-50 px-1.5 py-0.5 rounded text-xs">portfolioData.js</code>.
//           </p>
//         </div>

//         {certificates.length === 0 ? (
//           <div className="card p-16 text-center text-ink-400">
//             <Lock size={32} className="mx-auto mb-3 text-ink-300" />
//             No certificates yet.
//           </div>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certificates.map((cert, i) => {
//               const isPlaceholder = /^\[/.test(cert.name);
//               return (
//                 <article
//                   key={i}
//                   className="card card-hover overflow-hidden reveal"
//                   style={{ transitionDelay: `${i * 80}ms` }}
//                 >
//                   <div className="aspect-[16/10] relative bg-gradient-to-br from-sand-100 via-white to-coral-50 overflow-hidden">
//                     {cert.image ? (
//                       <img
//                         src={cert.image}
//                         alt={cert.name}
//                         className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                       />
//                     ) : (
//                       <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 relative">
//                         <div
//                           aria-hidden
//                           className="absolute inset-0 grid-pattern opacity-50"
//                         />
//                         <div className="relative">
//                           <div className="w-20 h-20 rounded-3xl mx-auto mb-4 bg-white/90 shadow-soft border border-white flex items-center justify-center">
//                             <ImagePlus size={30} className="text-sand-500" />
//                           </div>
//                           <p className="text-xs text-ink-500 font-medium uppercase tracking-widest">
//                             Certificate image
//                           </p>
//                           <p className="text-[11px] text-ink-400 mt-1">
//                             {`certificates[${i}].image`}
//                           </p>
//                         </div>
//                       </div>
//                     )}

//                     <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur border border-white text-[11px] font-semibold text-ink-800 shadow-soft">
//                       <Award size={12} className="text-sand-600" />
//                       Certificate
//                     </div>
//                   </div>

//                   <div className="p-6 md:p-7">
//                     {isPlaceholder && (
//                       <div className="mb-3 inline-flex items-center gap-1.5 chip !text-sand-700 !bg-sand-50 !border-sand-200">
//                         Placeholder
//                       </div>
//                     )}

//                     <h3 className="font-display text-xl text-ink-950 leading-snug mb-3">
//                       {cert.name}
//                     </h3>

//                     <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-ink-50 mt-4">
//                       <div className="text-sm">
//                         <div className="font-semibold text-ink-800">{cert.issuer}</div>
//                         <div className="text-ink-400 text-xs mt-0.5">{cert.date}</div>
//                       </div>

//                       {cert.link ? (
//                         <a
//                           href={cert.link}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink-950 text-white text-xs font-semibold hover:bg-ink-800 transition"
//                         >
//                           View
//                           <ExternalLink size={13} />
//                         </a>
//                       ) : (
//                         <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink-50 text-ink-500 text-xs font-medium italic">
//                           No link yet
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
