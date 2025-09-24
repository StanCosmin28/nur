const WeeklyRuns = () => {
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

  return (
    <section
      id="weekly-runs"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Animated background stripes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 rounded-full blur-sm opacity-10 bg-gradient-to-r from-orange-500 to-orange-600"
            style={{
              top: `${i * 20}%`,
              left: "-60%",
              width: "100%",
              animation: `stripeMove 6s linear infinite`,
              animationDelay: `${i * 0.5}s`,
              transform: "rotate(-15deg)",
              boxShadow: "0 0 10px rgba(249, 115, 22, 0.3)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Weekly{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
              Runs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us every Saturday morning for an energizing run through Iasi's
            most beautiful routes.
          </p>
          <div className="mt-6 h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {routes.map((route, index) => (
            <div
              key={route.id}
              className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 "
              style={{ animationDelay: `${index * 0.2}s` }}
              role="region"
              aria-labelledby={`route-title-${route.id}`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 ${route.badgeColor} rounded-full flex items-center justify-center mr-4 transition-all duration-300 hover:scale-110 hover:shadow-orange-200/50`}
                >
                  <span className="text-white font-bold text-lg">
                    {route.badge}
                  </span>
                </div>
                <div>
                  <h3
                    id={`route-title-${route.id}`}
                    className="text-2xl font-bold text-black"
                  >
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

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-black mb-2">
                  Route Highlights
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {route.highlights.map((highlight, index) => (
                    <li key={index}>• {highlight}</li>
                  ))}
                </ul>
              </div>

              <button className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-orange-600 relative overflow-hidden group">
                <span className="relative z-10">🏃 Join Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          ))}
        </div>

        {/* Schedule Info */}
        <div className="mt-16 text-center">
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-lg"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">
              Weekly{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                Schedule
              </span>
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
          @keyframes stripeMove {
            0% {
              transform: translateX(-100%) rotate(-15deg);
            }
            100% {
              transform: translateX(200%) rotate(-15deg);
            }
          }
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
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
