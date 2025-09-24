import { useState } from "react";

const Team = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Alex Popescu",
      role: "Head Coach & Founder",
      image:
        "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
      bio: "Marathon runner with 10+ years experience. Founded NUR to build Iasi's running community.",
      achievements: [
        "3x Bucharest Marathon Finisher",
        "Certified Running Coach",
        "Community Builder",
      ],
    },
    {
      id: 2,
      name: "Maria Ionescu",
      role: "Training Coordinator",
      image:
        "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
      bio: "Specializes in beginner training programs and injury prevention techniques.",
      achievements: [
        "Sports Science Degree",
        "Beginner Program Developer",
        "5+ Years Coaching",
      ],
    },
    {
      id: 3,
      name: "Andrei Mihai",
      role: "Route Planner",
      image:
        "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
      bio: "Local Iasi expert who designs our scenic and safe running routes through the city.",
      achievements: [
        "Local Route Expert",
        "Safety Coordinator",
        "GPS Mapping Specialist",
      ],
    },
    {
      id: 4,
      name: "Elena Radu",
      role: "Community Manager",
      image:
        "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
      bio: "Manages our social media, events, and keeps our running family connected.",
      achievements: [
        "Social Media Expert",
        "Event Organizer",
        "Community Engagement",
      ],
    },
    // {
    //   id: 5,
    //   name: "Alex Popescu",
    //   role: "Head Coach & Founder",
    //   image: "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
    //   bio: "Marathon runner with 10+ years experience. Founded NUR to build Iasi's running community.",
    //   achievements: [
    //     "3x Bucharest Marathon Finisher",
    //     "Certified Running Coach",
    //     "Community Builder",
    //   ],
    // },
    // {
    //   id: 6,
    //   name: "Maria Ionescu",
    //   role: "Training Coordinator",
    //   image: "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
    //   bio: "Specializes in beginner training programs and injury prevention techniques.",
    //   achievements: [
    //     "Sports Science Degree",
    //     "Beginner Program Developer",
    //     "5+ Years Coaching",
    //   ],
    // },
    // {
    //   id: 7,
    //   name: "Andrei Mihai",
    //   role: "Route Planner",
    //   image: "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
    //   bio: "Local Iasi expert who designs our scenic and safe running routes through the city.",
    //   achievements: [
    //     "Local Route Expert",
    //     "Safety Coordinator",
    //     "GPS Mapping Specialist",
    //   ],
    // },
    // {
    //   id: 8,
    //   name: "Elena Radu",
    //   role: "Community Manager",
    //   image: "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
    //   bio: "Manages our social media, events, and keeps our running family connected.",
    //   achievements: [
    //     "Social Media Expert",
    //     "Event Organizer",
    //     "Community Engagement",
    //   ],
    // },
  ];

  const toggleAchievements = (id) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <section id="team" className="relative py-20 bg-white overflow-hidden">
      {/* Subtle animated background lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 rounded-full blur-sm opacity-10 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600"
            style={{
              top: `${i * 20}%`,
              left: "-60%",
              width: "100%",
              animation: `stripeMove ${8 + i * 1}s linear infinite`,
              animationDelay: `${i * 1}s`,
              transform: "rotate(-15deg)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8">
            Meet Our <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate individuals who make NUR possible and guide our
            running community every step of the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              role="article"
              tabIndex={0}
              onClick={() => toggleAchievements(member.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleAchievements(member.id);
                }
              }}
              className="bg-gray-50 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name}, ${member.role}`}
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-full mx-auto object-cover border-4 border-orange-500 transition-all duration-300 group-hover:border-orange-600 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {member.role}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                {member.name}
              </h3>
              <p className="text-orange-500 font-semibold mb-4 text-sm sm:text-base">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                {member.bio}
              </p>

              <div
                className={`transition-all duration-300 ${
                  expandedMember === member.id ? "max-h-40" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="space-y-2">
                  {member.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg px-3 py-2 text-xs sm:text-sm text-gray-700 shadow-sm"
                    >
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="w-full mt-12">
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-10 sm:p-16 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight drop-shadow-md">
                Want to Join Our Team?
              </h3>
              <p className="text-base sm:text-lg opacity-90 mb-8">
                We're always looking for passionate runners to help grow our
                community. Whether you're interested in coaching, organizing, or
                volunteering, we'd love to hear from you.
              </p>
              <a
                href="mailto:contact@nurrunclub.com"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                aria-label="Contact NUR Run Club to get involved"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for animations */}
      <style jsx="true">{`
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
      `}</style>
    </section>
  );
};

export default Team;
