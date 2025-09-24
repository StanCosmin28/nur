import { useState } from "react";

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const INITIAL_VISIBLE_PARTNERS = 3;

  const partners = [
    {
      id: 1,
      name: "Tucano Coffee",
      type: "Coffee Partner",
      discount: "10% off",
      image: "/modern-coffee-shop-logo.jpg",
      description: "Premium coffee and pastries for our 4km route finishers.",
      location: "Copou Area",
      address: "Strada Copou 12, Iași 700056, Romania",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.123456789!2d27.583333!3d47.166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEwJzAwLjAiTiAyN8KwMzUnMDAuMCJF!5e0!3m2!1sen!2sro!4v1234567890",
      socialUrl: "https://www.instagram.com/tucanocoffeeiasi/",
      reviewUrl:
        "https://search.google.com/local/reviews?placeid=ChIJ123456789",
      rating: 4.7,
      reviewsCount: 456,
    },
    {
      id: 2,
      name: "Beans & Dots",
      type: "Coffee Partner",
      discount: "15% off",
      image: "/artisan-coffee-shop-logo.jpg",
      description: "Artisan coffee and healthy breakfast options.",
      location: "City Center",
      address: "Strada Lăpușneanu 25, Iași 700045, Romania",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.123456789!2d27.583333!3d47.166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEwJzAwLjAiTiAyN8KwMzUnMDAuMCJF!5e0!3m2!1sen!2sro!4v1234567891",
      socialUrl: "https://www.facebook.com/beansanddotsiasi",
      reviewUrl:
        "https://search.google.com/local/reviews?placeid=ChIJ789012345",
      rating: 4.5,
      reviewsCount: 234,
    },
    {
      id: 3,
      name: "SportZone Iasi",
      type: "Equipment Partner",
      discount: "20% off",
      image: "/sports-equipment-store-logo.jpg",
      description: "Running gear, shoes, and accessories for NUR members.",
      location: "Palas Mall",
      address: "Strada Palas 1, Iași 700051, Romania",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.123456789!2d27.583333!3d47.166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEwJzAwLjAiTiAyN8KwMzUnMDAuMCJF!5e0!3m2!1sen!2sro!4v1234567892",
      socialUrl: "https://www.instagram.com/sportzoneiasi/",
      reviewUrl:
        "https://search.google.com/local/reviews?placeid=ChIJ456789012",
      rating: 4.6,
      reviewsCount: 789,
    },
    {
      id: 4,
      name: "FitLife Nutrition",
      type: "Nutrition Partner",
      discount: "15% off",
      image: "/nutrition-supplement-store-logo.jpg",
      description: "Sports nutrition and recovery supplements.",
      location: "Multiple Locations",
      address: "Strada Ștefan cel Mare 10, Iași 700056, Romania",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.123456789!2d27.583333!3d47.166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEwJzAwLjAiTiAyN8KwMzUnMDAuMCJF!5e0!3m2!1sen!2sro!4v1234567893",
      socialUrl: null,
      reviewUrl:
        "https://search.google.com/local/reviews?placeid=ChIJ012345678",
      rating: 4.4,
      reviewsCount: 123,
    },
    {
      id: 5,
      name: "RunTech Store",
      type: "Technology Partner",
      discount: "25% off",
      image: "/running-technology-store-logo.jpg",
      description: "GPS watches, fitness trackers, and running apps.",
      location: "Online & Retail",
      address: "Online Store - Shipping to Iași",
      mapUrl: null,
      socialUrl: "https://www.twitter.com/runtechiasi",
      reviewUrl:
        "https://search.google.com/local/reviews?placeid=ChIJ345678901",
      rating: 4.8,
      reviewsCount: 567,
    },
    {
      id: 6,
      name: "Physio Plus",
      type: "Health Partner",
      discount: "30% off",
      image: "/placeholder.svg?height=200&width=300",
      description: "Sports physiotherapy and injury prevention services.",
      location: "Medical Center",
      address: "Bulevardul Independentei 50, Iași 700100, Romania",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.123456789!2d27.583333!3d47.166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEwJzAwLjAiTiAyN8KwMzUnMDAuMCJF!5e0!3m2!1sen!2sro!4v1234567894",
      socialUrl: "https://www.facebook.com/physioplusiasi",
      reviewUrl:
        "https://search.google.com/local/reviews?placeid=ChIJ901234567",
      rating: 4.9,
      reviewsCount: 89,
    },
  ];

  const getPartnerTypeColor = (type) => {
    switch (type) {
      case "Coffee Partner":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Equipment Partner":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Nutrition Partner":
        return "bg-green-100 text-green-800 border-green-200";
      case "Technology Partner":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Health Partner":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const openModal = (partner) => setSelectedPartner(partner);
  const closeModal = (e) => {
    e.stopPropagation();
    setSelectedPartner(null);
  };

  const toggleShowAll = () => setShowAll(!showAll);

  const visiblePartners = showAll
    ? partners
    : partners.slice(0, INITIAL_VISIBLE_PARTNERS);

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8">
            Our <span className="text-orange-500">Partners</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Amazing local businesses that support our running community with
            exclusive discounts and services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8 transition-all duration-500">
          {visiblePartners.map((partner, index) => (
            <div
              key={partner.id}
              onClick={() => openModal(partner)}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 animate-fade-in border border-gray-200"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(partner);
                }
              }}
            >
              <div className="relative mb-6">
                <img
                  src={partner.image || "/placeholder.svg"}
                  alt={partner.name}
                  className="w-full h-32 object-contain rounded-lg bg-gray-100"
                />
                <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  {partner.discount}
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-black">{partner.name}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium border ${getPartnerTypeColor(
                    partner.type
                  )}`}
                >
                  {partner.type}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {partner.description}
              </p>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg
                  className="w-4 h-4 mr-2 text-gray-400"
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
                {partner.location}
              </div>

              <button className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 text-sm">
                Claim Discount
              </button>
            </div>
          ))}
        </div>

        {partners.length > INITIAL_VISIBLE_PARTNERS && (
          <div className="text-center mb-12">
            <button
              onClick={toggleShowAll}
              className="cursor-pointer bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              aria-expanded={showAll}
              aria-controls="partners-grid"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleShowAll();
                }
              }}
            >
              {showAll
                ? "Show Less"
                : `See all (${
                    partners.length - INITIAL_VISIBLE_PARTNERS
                  } more)`}
            </button>
          </div>
        )}

        {/* Partnership Benefits */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-black text-center mb-6">
            Partnership Benefits
          </h3>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-black mb-2">
                Exclusive Discounts
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Save money on coffee, gear, nutrition, and health services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-black mb-2">
                Community Support
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Local businesses that actively support our running community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-black mb-2">
                Quality Guaranteed
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Carefully selected partners that meet our quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Modal */}
      {selectedPartner && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-labelledby="partner-modal-title"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-styled"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-black rounded-full p-2 hover:bg-gray-100 transition-all duration-200"
              aria-label="Close partner modal"
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

            <div className="p-6">
              <div className="text-center mb-6">
                <img
                  src={selectedPartner.image || "/placeholder.svg"}
                  alt={selectedPartner.name}
                  className="w-24 h-24 object-contain mx-auto rounded-lg mb-4"
                />
                <h2
                  id="partner-modal-title"
                  className="text-2xl font-bold text-black mb-2"
                >
                  {selectedPartner.name}
                </h2>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getPartnerTypeColor(
                    selectedPartner.type
                  )}`}
                >
                  {selectedPartner.type}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {selectedPartner.description}
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    Exclusive NUR Discount
                  </h4>
                  <p className="text-2xl font-bold text-orange-600">
                    {selectedPartner.discount}
                  </p>
                </div>
                {selectedPartner.rating && (
                  <div className="flex items-center justify-center space-x-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2">
                      {selectedPartner.rating} ({selectedPartner.reviewsCount}{" "}
                      reviews)
                    </span>
                  </div>
                )}
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-400"
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
                  <span>{selectedPartner.address}</span>
                </div>
              </div>

              {selectedPartner.mapUrl && (
                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-3">Location</h4>
                  <iframe
                    src={selectedPartner.mapUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                {selectedPartner.reviewUrl && (
                  <a
                    href={selectedPartner.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-yellow-500 text-white py-3 px-6 rounded-full text-center font-semibold hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    Leave a Review
                  </a>
                )}
                {selectedPartner.socialUrl && (
                  <a
                    href={selectedPartner.socialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-full text-center font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12v6a2 2 0 002 2h2a2 2 0 002-2v-6"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 10.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
                      />
                    </svg>
                    Visit Social
                  </a>
                )}
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-full text-center font-semibold hover:bg-gray-600 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes and Scrollbar Styling */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        // .animate-fade-in {
        //   animation: fade-in 0.6s ease-out forwards;
        // }
        .scrollbar-styled::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-styled::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .scrollbar-styled::-webkit-scrollbar-thumb {
          background: #f97316;
          border-radius: 4px;
        }
        .scrollbar-styled::-webkit-scrollbar-thumb:hover {
          background: #ea580c;
        }
      `}</style>
    </section>
  );
};

export default Partners;
