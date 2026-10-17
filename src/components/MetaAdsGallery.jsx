import { useState, useEffect } from "react";

const metaAds = [
  {
    src: "/images/meta/meta1.jpeg",
    title: "Meta Ads Creative — Sample 1",
  },
  {
    src: "/images/meta/meta2.jpeg",
    title: "Meta Ads Creative — Sample 2",
  },
  {
    src: "/images/meta/meta3.jpeg",
    title: "Meta Ads Creative — Sample 3",
  },
];

export default function MetaAdsGallery({ onBack }) {
  const [selectedAd, setSelectedAd] = useState(null);

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
            Advertising & Marketing
          </p>

          <h1 className="font-display text-3xl font-medium text-gray-900 md:text-5xl">
            Meta Ads Creative Samples
          </h1>

          <p className="mt-4 max-w-2xl leading-relaxed text-gray-500">
            A collection of Meta (Facebook & Instagram) ad creatives, exploring
            different hooks, copy variations, and visual styles designed to drive engagement and conversions.
          </p>
        </div>

        {/* Ads grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metaAds.map((ad) => (
            <button
              key={ad.src}
              type="button"
              onClick={() => setSelectedAd(ad)}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden bg-gray-50">
                <img
                  src={ad.src}
                  alt={ad.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-5">
                <h2 className="font-medium text-gray-900">{ad.title}</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Click to view full creative
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Full-size ad preview */}
        {selectedAd && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedAd(null)}
          >
            <button
              type="button"
              aria-label="Close ad preview"
              onClick={() => setSelectedAd(null)}
              className="absolute right-5 top-4 text-4xl text-white"
            >
              ×
            </button>

            <div className="flex max-h-[90vh] max-w-full flex-col items-center">
              <img
                src={selectedAd.src}
                alt={selectedAd.title}
                className="max-h-[80vh] max-w-full object-contain"
                onClick={(event) => event.stopPropagation()}
              />
              <p className="mt-3 text-center text-sm text-white">
                {selectedAd.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
