import { useState, useEffect } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/group-of-runners-in-park.jpg",
    alt: "Group run in Copou Park",
  },
  {
    id: 2,
    src: "/runners-finishing-at-coffee-shop.jpg",
    alt: "Finishing at coffee shop",
  },
  { id: 3, src: "/running-team-celebration.jpg", alt: "Team celebration" },
  { id: 4, src: "/morning-run-sunrise.jpg", alt: "Morning run at sunrise" },
  {
    id: 5,
    src: "/runners-stretching-before-run.jpg",
    alt: "Pre-run stretching",
  },
  { id: 6, src: "/running-through-city-center.jpg", alt: "City center run" },
  { id: 7, src: "/post-run-coffee-group.jpg", alt: "Post-run coffee" },
  { id: 8, src: "/running-event-medal-ceremony.jpg", alt: "Medal ceremony" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  const next = () =>
    setSelected((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setSelected((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const close = () => setSelected(null);

  // Keyboard navigation
  useEffect(() => {
    if (selected === null) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  // Swipe navigation
  useEffect(() => {
    if (selected === null) return;
    let startX = 0;
    const start = (e) => (startX = e.changedTouches[0].screenX);
    const end = (e) => {
      const dist = e.changedTouches[0].screenX - startX;
      if (dist > 50) prev();
      if (dist < -50) next();
    };
    window.addEventListener("touchstart", start);
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("touchstart", start);
      window.removeEventListener("touchend", end);
    };
  }, [selected]);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Moments from our weekly runs, events, and the amazing NUR community.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setSelected(i)}
              className="relative overflow-hidden rounded-2xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium">
                  {img.alt}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="w-full">
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-10 sm:p-16 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight drop-shadow-md">
                Follow Us on Instagram
              </h3>
              <p className="text-lg sm:text-xl opacity-90 mb-8">
                See our latest runs, events, and community highlights. Stay
                connected with{" "}
                <span className="font-semibold">@nur_runclub_iasi</span>.
              </p>
              <a
                href="https://www.instagram.com/nur_runclub_iasi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.6.01 4.9.07 3.2.15 4.8 1.7 4.9 4.9.06 1.3.07 1.6.07 4.9s0 3.6-.07 4.9c-.15 3.2-1.7 4.8-4.9 4.9-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-3.2-.15-4.8-1.7-4.9-4.9C2 15.6 2 15.2 2 12s0-3.6.07-4.9c.15-3.2 1.7-4.8 4.9-4.9C8.4 2.2 8.8 2.2 12 2.2z" />
                </svg>
                @nur_runclub_iasi
              </a>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selected !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={close}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 z-10 text-white bg-black/70 rounded-full p-2 hover:bg-black/90"
              >
                ✕
              </button>

              {/* Prev / Next */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/70 rounded-full p-3 hover:bg-black/90"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/70 rounded-full p-3 hover:bg-black/90"
              >
                ›
              </button>

              {/* Image */}
              <img
                src={galleryImages[selected].src}
                alt={galleryImages[selected].alt}
                className="w-full h-[60vh] sm:h-[70vh] object-contain rounded-lg"
              />
              <p className="mt-4 text-center text-white text-sm sm:text-lg bg-black/70 py-2 px-4 rounded-lg inline-block mx-auto">
                {galleryImages[selected].alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
