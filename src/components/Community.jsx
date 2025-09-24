import { useState } from "react";

const Community = () => {
  const testimonials = [
    {
      id: 1,
      name: "Cristina Vasile",
      role: "Beginner Runner",
      image:
        "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
      quote:
        "I never thought I could run 4km, but NUR's supportive community helped me achieve this goal in just 2 months!",
      achievement: "First 4km completed",
    },
    {
      id: 2,
      name: "Mihai Georgescu",
      role: "Marathon Runner",
      image:
        "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
      quote:
        "The energy and motivation from this group is incredible. It's not just about running, it's about friendship.",
      achievement: "3 marathons completed",
    },
    {
      id: 3,
      name: "Ana Popescu",
      role: "Working Mom",
      image:
        "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
      quote:
        "Saturday mornings with NUR are my favorite time of the week. Great exercise and amazing people!",
      achievement: "Regular for 1 year",
    },
    {
      id: 4,
      name: "David Chen",
      role: "Student",
      image:
        "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
      quote:
        "As an international student, NUR helped me make friends and explore Iasi. Best decision ever!",
      achievement: "Community builder",
    },
  ];

  const communityStats = [
    { number: "150+", label: "Active Members", icon: "👥" },
    { number: "2000+", label: "Kilometers Run", icon: "🏃" },
    { number: "50+", label: "Events Organized", icon: "🎯" },
    { number: "15+", label: "Coffee Shops Visited", icon: "☕" },
  ];

  return (
    <section id="community" className="relative py-20 bg-white overflow-hidden">
      {/* Subtle animated diagonal stripes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 rounded-full blur-sm opacity-10 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600"
            style={{
              top: `${i * 20}%`,
              left: "-60%",
              width: "100%",
              animation: `stripeMove ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 1}s`,
              transform: "rotate(-15deg)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-orange-500">Community</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our amazing members about their journey with NUR and how
            running has transformed their lives.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {communityStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-orange-500 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="flex w-max animate-slide group-hover:[animation-play-state:paused]">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`${t.id}-${i}`}
                  className="flex-shrink-0 w-80 md:w-96 px-4"
                >
                  <div className="bg-gray-50 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
                    <div className="flex items-center mb-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-orange-500 mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-black">
                          {t.name}
                        </h4>
                        <p className="text-orange-500 text-sm font-medium">
                          {t.role}
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
                      "{t.quote}"
                    </blockquote>
                    <p className="text-sm text-gray-600 mb-4">
                      {t.achievement}
                    </p>
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="w-full">
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-10 sm:p-16 text-white shadow-2xl">
            <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-12 tracking-tight drop-shadow-md">
                What Makes NUR Special
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Inclusive */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-5xl mb-4">🤝</div>
                  <h4 className="text-xl font-semibold mb-2">Inclusive</h4>
                  <p className="text-sm opacity-90">
                    Everyone is welcome, regardless of pace or experience level.
                  </p>
                </div>

                {/* Supportive */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-5xl mb-4">💪</div>
                  <h4 className="text-xl font-semibold mb-2">Supportive</h4>
                  <p className="text-sm opacity-90">
                    We celebrate every achievement, big or small.
                  </p>
                </div>

                {/* Fun */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="text-xl font-semibold mb-2">Fun</h4>
                  <p className="text-sm opacity-90">
                    Running should be enjoyable, not a chore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx="true">{`
        @keyframes stripeMove {
          0% {
            transform: translateX(-100%) rotate(-15deg);
          }
          100% {
            transform: translateX(200%) rotate(-15deg);
          }
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Community;
