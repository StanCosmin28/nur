import { useState, useEffect } from "react";
import data from "../Model/data";
import SteamAnimation from "./SteamAnimation";

const { logov2 } = { ...data };
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Weekly Runs", href: "#weekly-runs" },
    { name: "Routes", href: "#routes" },
    { name: "Team", href: "#team" },
    { name: "Gallery", href: "#gallery" },
    { name: "Join Us", href: "#join" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b-2 border-orange-500"
          : "bg-white/90 backdrop-blur-sm shadow-lg border-b-2 border-orange-500"
      }`}
    >
      {/* Animated road stripe */}
      <div className="h-[6px] bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
        {/* Moving highlight */}
        <div className="absolute inset-0">
          <div
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
            style={{
              animation: "stripe-move 2s linear infinite",
            }}
          ></div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes stripe-move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>

      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <img className="h-10" src={logov2} alt="" />
          </div>

          {/* Interactive navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-black hover:text-orange-500 transition-all duration-300 font-semibold text-sm group py-2"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                {/* <span className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span> */}
              </a>
            ))}
            <a
              href="#join"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold text-sm border-2 border-orange-600 relative overflow-hidden group"
            >
              <span className="relative z-10">🏁 JOIN NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-black hover:text-orange-500 transition-colors p-2 rounded-full hover:bg-orange-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t-2 border-orange-500 pt-4 bg-gradient-to-b from-orange-50 to-white rounded-b-xl">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-black hover:text-orange-500 hover:bg-orange-100 px-4 rounded-lg transition-all duration-300 font-semibold text-sm border-l-2 border-transparent hover:border-orange-500 mb-1"
                onClick={() => setIsMenuOpen(false)}
              >
                🏃‍♂️ {item.name}
              </a>
            ))}
            <a
              href="#join"
              className="block mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-center hover:shadow-lg transition-all duration-300 font-bold text-sm border-2 border-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              🏁 JOIN NOW
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
