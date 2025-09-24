import { useState, useEffect } from "react";

const WeeklyRuns = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const routes = [
    {
      id: 1,
      title: "Beginner Route",
      description: "Perfect for newcomers",
      location: "4km through Copou Park",
      time: "~25-30 minutes",
      terrain: "Flat terrain, beginner-friendly",
      highlights: [
        "Start at Copou Park entrance",
        "Beautiful tree-lined paths",
        "Finish at Tucano Coffee",
        "10% discount for runners",
      ],
      badge: "4",
      badgeColor: "bg-orange-500",
    },
    {
      id: 2,
      title: "Challenge Route",
      description: "For experienced runners",
      location: "7km through city center",
      time: "~40-45 minutes",
      terrain: "Mixed terrain with hills",
      highlights: [
        "Historic city center tour",
        "Palace of Culture views",
        "Finish at Beans & Dots",
        "15% discount for runners",
      ],
      badge: "7",
      badgeColor: "bg-black",
    },
  ];

  const openModal = (route) => {
    setSelectedRoute(route);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRoute(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && modalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  return (
    <section id="weekly-runs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Weekly <span className="text-orange-500">Runs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us every Saturday morning for an energizing run through Iasi's
            most beautiful routes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {routes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-200/50 border border-gradient-orange cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`View details for ${route.title}`}
              onClick={() => openModal(route)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(route);
                }
              }}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 ${route.badgeColor} rounded-full flex items-center justify-center mr-4`}
                >
                  <span className="text-white font-bold text-lg">
                    {route.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    {route.title}
                  </h3>
                  <p className="text-gray-600">{route.description}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{route.location}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{route.time}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-gray-700">{route.terrain}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-black mb-2">
                  Route Highlights
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {route.highlights.map((highlight, index) => (
                    <li key={index}>• {highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedRoute && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg mx-4 bg-gradient-to-r from-orange-500 to-orange-600 border border-gradient-orange shadow-xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-12 h-12 ${selectedRoute.badgeColor} rounded-full flex items-center justify-center mr-4`}
                >
                  <span className="text-white font-bold text-lg">
                    {selectedRoute.badge}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-orange-200 transition-all duration-300 hover:shadow-orange-200/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Close route details"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <h3
                id="modal-title"
                className="text-2xl font-bold text-white mb-2"
              >
                {selectedRoute.title}
              </h3>
              <p className="text-white mb-6">{selectedRoute.description}</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-white">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{selectedRoute.location}</span>
                </div>
                <div className="flex items-center text-white">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{selectedRoute.time}</span>
                </div>
                <div className="flex items-center text-white">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span>{selectedRoute.terrain}</span>
                </div>
              </div>

              <div className="bg-orange-600/20 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  Route Highlights
                </h4>
                <ul className="text-sm text-white space-y-1">
                  {selectedRoute.highlights.map((highlight, index) => (
                    <li key={index}>• {highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Schedule Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-lg border border-gradient-orange">
            <h3 className="text-2xl font-bold text-black mb-6">
              Weekly Schedule
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  Saturday
                </div>
                <div className="text-lg text-gray-700">9:00 AM Start</div>
                <div className="text-sm text-gray-600">
                  Meet at Copou Park entrance
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  Free
                </div>
                <div className="text-lg text-gray-700">No membership fees</div>
                <div className="text-sm text-gray-600">
                  Just bring your running shoes!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keyframes and Styling */}
        <style jsx>{`
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.4s ease-out forwards;
          }
          .border-gradient-orange {
            border-image: linear-gradient(to right, #f97316, #ea580c) 1;
          }
        `}</style>
      </div>
    </section>
  );
};

export default WeeklyRuns;
