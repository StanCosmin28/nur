const RunningStats = () => {
  const stats = [
    {
      number: "72",
      label: "Active Runners",
      icon: "👥",
      color: "from-orange-600 to-orange-500",
      bgColor: "bg-orange-100",
    },
    {
      number: "14",
      label: "Events This Year",
      icon: "🏆",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
    },
    {
      number: "157",
      label: "Total KM Run",
      icon: "🏃‍♂️",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      number: "14",
      label: "Coffee Shops Visited",
      icon: "☕️",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-orange-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Amazing
            </span>{" "}
            Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every step counts, every kilometer matters. Here's what we've
            achieved together!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl border-2 border-white group cursor-pointer`}
            >
              <div className="text-4xl mb-3 group-hover:animate-bounce">
                {stat.icon}
              </div>
              <div
                className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.number}
              </div>
              <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="mt-3 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-xl border-2 border-orange-500 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <span className="text-2xl group-hover:animate-spin">🏃‍♂️</span>
            <span className="font-bold text-gray-800">
              Be part of these amazing numbers!
            </span>
            <span className="text-2xl group-hover:animate-spin">🏃‍♀️</span>
          </div>
        </div>
      </div>
      {/* <div className="max-w-4xl mx-auto text-center mt-10">
        <h2 className="text-4xl md:text-5xl font-bold text-nur-black mb-8">
          About <span className="text-nur-orange">NUR</span>
        </h2>

        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          NUR (Now You Run) is Iasi's premier running community, bringing
          together runners of all levels every Saturday morning. We believe
          running is more than exercise – it's about building connections,
          pushing boundaries, and celebrating every step forward.
        </p>
      </div> */}
    </section>
  );
};

export default RunningStats;
