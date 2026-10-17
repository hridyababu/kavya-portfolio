
import { useState, useEffect } from "react";

const posters = [
  {
    src: "/images/posters/identity.jpeg",
    title: "Identity — Digital Marketing Strategist",
  },
  {
    src: "/images/posters/fashion-desighning.jpeg",
    title: "Fashion Designing Course",
  },
  {
    src: "/images/posters/new-year-2025.jpeg",
    title: "New Year 2025",
  },
  {
    src: "/images/posters/mep-course.jpeg",
    title: "MEP Course Promotion",
  },
  {
    src: "/images/posters/adifa.jpeg",
    title: "Adifa Course Promotion",
  },
  {
    src: "/images/posters/bim.jpeg",
    title: "BIM Course Highlights",
  },
  {
    src: "/images/posters/cma.jpeg",
    title: "CMA Professional Course",
  },
  {
    src: "/images/posters/digital.jpeg",
    title: "Digital Marketing Course",
  },
  {
    src: "/images/posters/fashion.jpeg",
    title: "Fashion Design Series",
  },
  {
    src: "/images/posters/interior.jpeg",
    title: "Interior Design Course",
  },
  {
    src: "/images/posters/summer-fashion.jpeg",
    title: "Summer Fashion Campaign",
  },
  {
    src: "/images/posters/btech.jpeg",
    title: "B.Tech Tuition & Coaching",
  },
  {
    src: "/images/posters/kerala.jpeg",
    title: "Kerala Piravi Special",
  },
  {
    src: "/images/posters/republic.jpeg",
    title: "Republic Day Greetings",
  },
];

export default function PosterGallery({ onBack }) {
  const [selectedPoster, setSelectedPoster] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-white px-5 py-12 md:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Back to portfolio */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
        >
          ← Back to Portfolio
        </button>

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
            My Creative Work
          </p>

          <h1 className="font-display text-3xl font-medium text-gray-900 md:text-5xl">
            Instagram Posters
          </h1>

          <p className="mt-4 max-w-2xl leading-relaxed text-gray-500">
            A collection of promotional social media posters created for
            Westberg International, showcasing creative layouts, typography,
            colors, and brand communication.
          </p>
        </div>

        {/* Poster grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posters.map((poster) => (
            <button
              key={poster.src}
              type="button"
              onClick={() => setSelectedPoster(poster)}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden bg-gray-50">
                <img
                  src={poster.src}
                  alt={poster.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-5">
                <h2 className="font-medium text-gray-900">
                  {poster.title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Click to view full poster
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Full-size poster preview */}
        {selectedPoster && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedPoster(null)}
          >
            <button
              type="button"
              aria-label="Close poster preview"
              onClick={() => setSelectedPoster(null)}
              className="absolute right-5 top-4 text-4xl text-white"
            >
              ×
            </button>

            <div className="flex max-h-[90vh] max-w-full flex-col items-center">
              <img
                src={selectedPoster.src}
                alt={selectedPoster.title}
                className="max-h-[80vh] max-w-full object-contain"
                onClick={(event) => event.stopPropagation()}
              />

              <p className="mt-3 text-center text-sm text-white">
                {selectedPoster.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
