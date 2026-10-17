import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Ideas from "./components/Ideas.jsx";
import Works from "./components/Works.jsx";
import Education from "./components/Education.jsx";
// import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import PosterGallery from "./components/PosterGallery";
import MetaAdsGallery from "./components/MetaAdsGallery";
import ReelGallery from "./components/ReelGallery";

export default function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [showMetaGallery, setShowMetaGallery] = useState(false);
  const [showReelGallery, setShowReelGallery] = useState(false);

  // Scroll reveal: add `.visible` class when sections enter viewport
  useEffect(() => {
    if (showGallery || showMetaGallery || showReelGallery) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showGallery, showMetaGallery, showReelGallery]);

  if (showGallery) {
    return <PosterGallery onBack={() => setShowGallery(false)} />;
  }

  if (showMetaGallery) {
    return <MetaAdsGallery onBack={() => setShowMetaGallery(false)} />;
  }

  if (showReelGallery) {
    return <ReelGallery onBack={() => setShowReelGallery(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-ink-800 selection:bg-sand-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Ideas />
        <Works
          onViewGallery={() => setShowGallery(true)}
          onViewMetaGallery={() => setShowMetaGallery(true)}
          onViewReelGallery={() => setShowReelGallery(true)}
        />
        <Education />
        {/* <Certificates /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
