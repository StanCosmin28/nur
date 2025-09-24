"use client";

import { useState } from "react";

const TrainingHub = () => {
  const [activeTab, setActiveTab] = useState("plans");

  const trainingPlans = [
    {
      name: "Beginner's Journey",
      duration: "8 weeks",
      goal: "5K completion",
      sessions: "3x per week",
      description: "Perfect for new runners or those returning after a break",
      features: [
        "Walk-run intervals",
        "Gradual progression",
        "Injury prevention",
        "Motivation tips",
      ],
      color: "from-green-400 to-green-600",
    },
    {
      name: "10K Challenger",
      duration: "12 weeks",
      goal: "10K under 50min",
      sessions: "4x per week",
      description: "Build endurance and speed for your first 10K race",
      features: ["Tempo runs", "Long runs", "Speed work", "Recovery sessions"],
      color: "from-nur-vibrant to-nur-orange",
    },
    {
      name: "Half Marathon Hero",
      duration: "16 weeks",
      goal: "21K completion",
      sessions: "5x per week",
      description: "Comprehensive training for half marathon success",
      features: [
        "Progressive long runs",
        "Hill training",
        "Race pace runs",
        "Nutrition guidance",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const workouts = [
    {
      name: "Speed Intervals",
      duration: "45 min",
      intensity: "High",
      description: "400m repeats with recovery jogs",
      benefits: [
        "Improves VO2 max",
        "Builds speed",
        "Enhances running economy",
      ],
    },
    {
      name: "Tempo Run",
      duration: "35 min",
      intensity: "Medium-High",
      description: "Sustained effort at comfortably hard pace",
      benefits: ["Lactate threshold", "Mental toughness", "Race preparation"],
    },
    {
      name: "Long Easy Run",
      duration: "60-90 min",
      intensity: "Low",
      description: "Conversational pace endurance building",
      benefits: ["Aerobic base", "Fat burning", "Mental endurance"],
    },
  ];

  return (
    <section
      id="training"
      className="py-20 bg-gradient-to-br from-nur-black to-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-nur-vibrant to-nur-orange bg-clip-text text-transparent">
              Training Hub
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Structured training plans and workouts designed by experienced
            coaches to help you reach your running goals.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-2 rounded-full">
            <button
              onClick={() => setActiveTab("plans")}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
                activeTab === "plans"
                  ? "bg-gradient-to-r from-nur-vibrant to-nur-orange text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Training Plans
            </button>
            <button
              onClick={() => setActiveTab("workouts")}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
                activeTab === "workouts"
                  ? "bg-gradient-to-r from-nur-vibrant to-nur-orange text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Workout Library
            </button>
          </div>
        </div>

        {/* Training Plans Tab */}
        {activeTab === "plans" && (
          <div className="grid md:grid-cols-3 gap-8">
            {trainingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-3xl p-8 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="font-bold text-nur-vibrant">
                      {plan.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Sessions</p>
                    <p className="font-bold text-nur-orange">{plan.sessions}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-3">What's Included:</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-nur-vibrant rounded-full mr-3"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-nur-vibrant to-nur-orange text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Training
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Workouts Tab */}
        {activeTab === "workouts" && (
          <div className="grid md:grid-cols-3 gap-8">
            {workouts.map((workout, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-3xl p-8 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {workout.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      workout.intensity === "High"
                        ? "bg-red-500"
                        : workout.intensity === "Medium-High"
                        ? "bg-nur-orange"
                        : "bg-green-500"
                    } text-white`}
                  >
                    {workout.intensity}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{workout.description}</p>
                <p className="text-nur-vibrant font-semibold mb-6">
                  Duration: {workout.duration}
                </p>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-3">Benefits:</p>
                  <ul className="space-y-2">
                    {workout.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-nur-vibrant rounded-full mr-3"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-nur-vibrant to-nur-orange text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold">
                  View Workout
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nur-vibrant to-nur-orange p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Level Up Your Running?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join our training programs and run with purpose, structure, and
              community support.
            </p>
            <button className="bg-white text-nur-vibrant px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Personal Training Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHub;
