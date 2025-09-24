const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-nur-white">
      {/* Orange pulsating diagonal stripes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 rounded-full blur-md opacity-30 bg-gradient-to-r from-nur-orange via-nur-vibrant to-nur-orange"
            style={{
              top: `${i * 12}%`,
              left: i % 2 === 0 ? "-40%" : "-60%",
              width: `${80 + i * 10}%`,
              animation: `stripeMove ${
                6 + i
              }s linear infinite, stripePulse 4s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
              transform: "rotate(-15deg)",
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="max-w-4xl mx-auto text-center mt-10">
            <h2 className="text-4xl md:text-5xl font-bold text-nur-black mb-8">
              About <span className="text-nur-orange">NUR</span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              NUR (Now You Run) is Iasi's premier running community, bringing
              together runners of all levels every Saturday morning. We believe
              running is more than exercise – it's about building connections,
              pushing boundaries, and celebrating every step forward.
            </p>
          </div>
          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 hover-lift border border-nur-gray-dark relative z-10">
              <div className="w-16 h-16 bg-nur-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg
                  className="w-8 h-8 text-nur-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-nur-black mb-4">
                Inclusive Community
              </h3>
              <p className="text-gray-600">
                All levels welcome - from beginners to seasoned marathoners.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 hover-lift border border-nur-gray-dark relative z-10">
              <div className="w-16 h-16 bg-nur-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg
                  className="w-8 h-8 text-nur-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-nur-black mb-4">
                Consistent Schedule
              </h3>
              <p className="text-gray-600">
                Every Saturday at 9 AM, rain or shine. Two routes: 4km & 7km.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 hover-lift border border-nur-gray-dark relative z-10">
              <div className="w-16 h-16 bg-nur-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg
                  className="w-8 h-8 text-nur-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-nur-black mb-4">
                Coffee & Community
              </h3>
              <p className="text-gray-600">
                Finish at partner cafes with special discounts for runners.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-r from-nur-orange to-nur-black rounded-2xl p-8 text-nur-white shadow-xl border border-orange-600 relative z-10">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              To create a supportive, energetic community where every runner can
              achieve their goals, make lasting friendships, and discover the
              joy of running through the beautiful streets of Iasi.
            </p>
          </div>
        </div>
      </div>

      {/* Keyframes for background */}
      <style jsx="true">{`
        @keyframes stripeMove {
          0% {
            transform: translateX(-100%) rotate(-15deg);
          }
          100% {
            transform: translateX(200%) rotate(-15deg);
          }
        }
        @keyframes stripePulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
