import { useState, useEffect } from "react";
import SteamAnimation from "./SteamAnimation";

const Hero = () => {
  const [timeToSaturday, setTimeToSaturday] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const nextSaturday = new Date();
      const daysUntilSaturday = (6 - now.getDay()) % 7 || 7;
      nextSaturday.setDate(now.getDate() + daysUntilSaturday);
      nextSaturday.setHours(9, 0, 0, 0); // 9 AM Saturday

      const timeDiff = nextSaturday - now;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeToSaturday(`${days}d ${hours}h ${minutes}m`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 overflow-hidden">
      <div className="absolute inset-0">
        {/* Road lines animation - reduced count on mobile */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 bg-white animate-road-line hidden sm:block"
              style={{
                top: `${15 + i * 15}%`,
                left: "-100px",
                width: "150px",
                animationDelay: `${i * 0.3}s`,
                transform: "rotate(-15deg)",
              }}
            />
          ))}
        </div>

        {/* Floating running elements - smaller sizes on mobile */}
        <div className="absolute top-10 left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-white/10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/10 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8 sm:py-12 xl:mt-10">
        <div className="animate-fade-in">
          {/* Logo with steam animation */}
          <div className="flex justify-center mb-4 sm:mb-6 sm:mt-10 xl:mt-2">
            <SteamAnimation
              customStyles={
                "h-38 sm:h-50 md:h-60 lg:h-60 object-contain drop-shadow-2xl"
              }
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto font-medium drop-shadow-lg">
            👟 safe place-ul alergătorilor din Iași 👟
            <br />
            🧡 alergăm prin Iași în fiecare sâmbătă 🧡
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-10">
            <a
              href="#join"
              className="bg-black text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 sm:border-4 border-white w-full sm:w-auto"
            >
              🏃‍♂️ Join Our WhatsApp Group
            </a>
            <a
              href="#weekly-runs"
              className="bg-white text-orange-500 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 sm:border-4 border-black w-full sm:w-auto"
            >
              📅 View Schedule
            </a>
          </div>

          <div className="bg-black/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl max-w-sm sm:max-w-md mx-auto animate-slide-up border-2 sm:border-4 border-white mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
              🏁 Next Saturday Run
            </h3>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-400 mb-2">
              {timeToSaturday}
            </div>
            <p className="text-sm sm:text-base text-white/80 font-medium">
              🛣️ 4km & 7km routes available
            </p>
          </div>

          {/* Stats cards */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 max-w-md mx-auto">
            <div className="animate-fade-in bg-black/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border-2 border-white flex flex-col justify-center items-center min-h-[3rem] sm:min-h-[4rem] flex-1 max-w-[90px] sm:max-w-[110px]">
              <div className="text-lg sm:text-xl md:text-2xl font-black text-orange-400">
                150+
              </div>
              <div className="text-xs sm:text-sm text-white font-semibold">
                RUNNERS
              </div>
            </div>
            <div className="animate-fade-in bg-black/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border-2 border-white flex flex-col justify-center items-center min-h-[3rem] sm:min-h-[4rem] flex-1 max-w-[90px] sm:max-w-[110px]">
              <div className="text-lg sm:text-xl md:text-2xl font-black text-orange-400">
                2000+
              </div>
              <div className="text-xs sm:text-sm text-white font-semibold">
                KM RUN
              </div>
            </div>
            <div className="animate-fade-in bg-black/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border-2 border-white flex flex-col justify-center items-center min-h-[3rem] sm:min-h-[4rem] flex-1 max-w-[90px] sm:max-w-[110px]">
              <div className="text-lg sm:text-xl md:text-2xl font-black text-orange-400">
                50+
              </div>
              <div className="text-xs sm:text-sm text-white font-semibold">
                EVENTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
