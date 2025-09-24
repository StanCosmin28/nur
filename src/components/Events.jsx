import { useState, useEffect } from "react";

const Events = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "NUR Spring Marathon Prep",
      date: "2024-03-15",
      time: "9:00 AM",
      location: "Copou Park",
      description: "Special 15km training run for marathon preparation",
      type: "Training",
      icon: "🏃‍♂️",
    },
    {
      id: 2,
      title: "Coffee Shop Tour Run",
      date: "2024-03-22",
      time: "9:00 AM",
      location: "City Center",
      description: "Visit 3 partner coffee shops in one epic 10km run",
      type: "Social",
      icon: "☕",
    },
    {
      id: 3,
      title: "NUR Night Run",
      date: "2024-03-29",
      time: "7:00 PM",
      location: "Palas Area",
      description: "Special evening run with LED lights and music",
      type: "Special",
      icon: "🌙",
    },
    {
      id: 4,
      title: "Charity Run for Local Shelter",
      date: "2024-04-05",
      time: "9:00 AM",
      location: "Central Park",
      description: "Fundraising run to support local animal shelter",
      type: "Charity",
      icon: "❤️",
    },
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case "Training":
        return "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border-orange-300";
      case "Social":
        return "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border-orange-300";
      case "Special":
        return "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border-orange-300";
      case "Charity":
        return "bg-gradient-to-r from-orange-100 to-orange-200 text-red-800 border-orange-300";
      default:
        return "bg-orange-100 text-orange-800 border-orange-300";
    }
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
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
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-500 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-400 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-orange-300 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent animate-gradient-shift">
              Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond our weekly Saturday runs, we organize special events,
            training sessions, and community activities that will blow your
            mind!
          </p>
          <div className="mt-6 h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl p-8 shadow-xl hover-lift-orange animate-bounce-in pulse-border-orange border-2 border-orange-200 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-orange-200/50"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => openModal(event)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${event.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(event);
                }
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${getEventTypeColor(
                    event.type
                  )} group-hover:scale-110 transition-transform duration-300`}
                >
                  {event.type}
                </span>
                <div className="text-right">
                  <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="text-sm font-semibold text-gray-600">
                    {event.time}
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4 group-hover:animate-bounce">
                  {event.icon}
                </span>
                <h3 className="text-2xl font-black text-black group-hover:text-orange-600 transition-colors duration-300">
                  {event.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="flex items-center text-sm text-gray-500 mb-6 bg-orange-50 rounded-full px-4 py-2">
                <svg
                  className="w-5 h-5 mr-2 text-orange-500"
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
                <span className="font-semibold">{event.location}</span>
              </div>

              <button className="cursor-pointer w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-full font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-orange-600 relative overflow-hidden group">
                <span className="relative z-10">🏁 Join Event</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedEvent && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg mx-4 bg-gradient-to-r from-orange-500 to-orange-600  shadow-2xl animate-modal-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${getEventTypeColor(
                    selectedEvent.type
                  )}`}
                >
                  {selectedEvent.type}
                </span>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-orange-200 transition-all duration-300 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Close event details"
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

              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{selectedEvent.icon}</span>
                <h3 id="modal-title" className="text-2xl font-black text-white">
                  {selectedEvent.title}
                </h3>
              </div>

              <div className="text-white mb-6">
                <div className="text-lg font-semibold">
                  {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="text-base">{selectedEvent.time}</div>
              </div>

              <div className="flex items-center text-base text-white mb-6 bg-orange-600/20 rounded-full px-4 py-2">
                <svg
                  className="w-5 h-5 mr-2 text-white"
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
                <span className="font-semibold">{selectedEvent.location}</span>
              </div>

              <p className="text-white mb-6 leading-relaxed">
                {selectedEvent.description}
              </p>

              <button className="cursor-pointer w-full bg-white text-black py-4 rounded-full font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-orange-600 relative overflow-hidden group">
                <span className="relative z-10">🏁 Join Event</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        )}

        {/* Enhanced Event Registration CTA */}
        <div className="text-center">
          <div
            className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl border-2 border-orange-200"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="text-6xl mb-6 animate-bounce">📱</div>
            <h3 className="text-3xl font-black text-black mb-4">
              Stay{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Connected
              </span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our WhatsApp group to get notified about new events, schedule
              changes, and special announcements. Be the first to know!
            </p>
            <a
              href="#join"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-green-600 relative overflow-hidden group"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span className="relative z-10">Join WhatsApp</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>

        {/* Keyframes and Styling */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          @keyframes bounce-in {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
          @keyframes modal-in {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 5s ease-in-out infinite;
          }
          .animate-bounce {
            animation: bounce 4s ease-in-out infinite;
          }
          .animate-bounce-in {
            animation: bounce-in 0.6s ease-out forwards;
          }
          .animate-gradient-shift {
            background-size: 200% 200%;
            animation: gradient-shift 8s ease-in-out infinite;
          }
          .animate-modal-in {
            animation: modal-in 0.4s ease-out forwards;
          }
          .pulse-border-orange {
            animation: pulse-border 2s infinite;
          }
          @keyframes pulse-border {
            0%,
            100% {
              border-color: rgba(249, 115, 22, 0.5);
            }
            50% {
              border-color: rgba(249, 115, 22, 1);
            }
          }
          .hover-lift-orange:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3);
          }
          .border-gradient-orange {
            border-image: linear-gradient(to right, #f97316, #ea580c) 1;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Events;
