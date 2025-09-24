"use client";

import { useState } from "react";

const RunningRoutes = () => {
  const [selectedRoute, setSelectedRoute] = useState(0);

  const routes = [
    {
      name: "City Center Loop",
      distance: "5.2 km",
      difficulty: "Easy",
      duration: "25-30 min",
      elevation: "+45m",
      description:
        "Perfect for beginners! A scenic route through Iasi's historic center.",
      highlights: ["Palace of Culture", "Union Square", "Stefan cel Mare Park"],
      surface: "Asphalt & Cobblestone",
      color: "from-orange-400 via-orange-300 to-orange-500",
    },
    {
      name: "Copou Hill Challenge",
      distance: "8.7 km",
      difficulty: "Hard",
      duration: "40-50 min",
      elevation: "+180m",
      description:
        "For experienced runners seeking a challenge with amazing city views.",
      highlights: ["Copou Park", "Eminescu's Linden Tree", "Botanical Garden"],
      surface: "Mixed Terrain",
      color: "from-orange-600 via-orange-700 to-orange-800",
    },
    {
      name: "Bahlui River Trail",
      distance: "6.8 km",
      difficulty: "Medium",
      duration: "30-35 min",
      elevation: "+25m",
      description:
        "Peaceful riverside running with nature views and fresh air.",
      highlights: ["Bahlui River", "Green Spaces", "Wildlife Spotting"],
      surface: "Trail & Gravel",
      color: "from-orange-500 via-orange-400 to-orange-300",
    },
    // Duplicate routes for demo scrolling
    {
      name: "City Center Loop",
      distance: "5.2 km",
      difficulty: "Easy",
      duration: "25-30 min",
      elevation: "+45m",
      description:
        "Perfect for beginners! A scenic route through Iasi's historic center.",
      highlights: ["Palace of Culture", "Union Square", "Stefan cel Mare Park"],
      surface: "Asphalt & Cobblestone",
      color: "from-orange-400 via-orange-300 to-orange-500",
    },
    {
      name: "Copou Hill Challenge",
      distance: "8.7 km",
      difficulty: "Hard",
      duration: "40-50 min",
      elevation: "+180m",
      description:
        "For experienced runners seeking a challenge with amazing city views.",
      highlights: ["Copou Park", "Eminescu's Linden Tree", "Botanical Garden"],
      surface: "Mixed Terrain",
      color: "from-orange-600 via-orange-700 to-orange-800",
    },
    {
      name: "Bahlui River Trail",
      distance: "6.8 km",
      difficulty: "Medium",
      duration: "30-35 min",
      elevation: "+25m",
      description:
        "Peaceful riverside running with nature views and fresh air.",
      highlights: ["Bahlui River", "Green Spaces", "Wildlife Spotting"],
      surface: "Trail & Gravel",
      color: "from-orange-500 via-orange-400 to-orange-300",
    },
  ];

  return (
    <section
      id="routes"
      className="py-20 bg-gradient-to-br from-gray-100 to-white"
    >
      {/* Title */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Our Running Routes
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
            Discover Iasi through our carefully curated running routes. From
            beginner-friendly paths to challenging hill climbs.
          </p>
        </div>
      </div>

      {/* Full-width horizontal slider */}
      <div className="w-full overflow-x-auto scrollbar-hide py-16">
        <div className="flex gap-6 px-6 sm:px-12 min-w-max">
          {routes.map((route, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedRoute(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedRoute(index);
                }
              }}
              className={`flex-shrink-0 w-80 cursor-pointer p-6 rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                selectedRoute === index
                  ? `bg-gradient-to-br ${route.color} text-white shadow-2xl`
                  : "bg-white hover:shadow-xl border-2 border-gray-300 hover:border-orange-500"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{route.name}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    selectedRoute === index
                      ? "bg-white/20"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {route.difficulty}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm opacity-80">Distance</p>
                  <p className="font-bold text-lg">{route.distance}</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Duration</p>
                  <p className="font-bold text-lg">{route.duration}</p>
                </div>
              </div>
              <p
                className={`text-sm ${
                  selectedRoute === index ? "text-white/90" : "text-gray-800"
                }`}
              >
                {route.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Selected Route Details */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border-2 border-orange-500">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {routes[selectedRoute].name}
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">Distance</p>
                  <p className="text-xl sm:text-2xl font-bold text-orange-500">
                    {routes[selectedRoute].distance}
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">Elevation</p>
                  <p className="text-xl sm:text-2xl font-bold text-orange-600">
                    {routes[selectedRoute].elevation}
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-lg sm:text-xl mb-3 text-gray-800">
                  Route Highlights
                </h4>
                <ul className="space-y-2">
                  {routes[selectedRoute].highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-800">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <span className="text-sm text-gray-700 mb-4 sm:mb-0">
                  Surface: {routes[selectedRoute].surface}
                </span>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                  View on Map
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 sm:h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-8 sm:w-10 h-8 sm:h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
                  </div>
                  <p className="text-gray-800 font-semibold text-base sm:text-lg">
                    Interactive Route Map
                  </p>
                  <p className="text-sm text-gray-600">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningRoutes;
