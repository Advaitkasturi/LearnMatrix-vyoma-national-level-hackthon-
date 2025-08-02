import React, { useState, useEffect } from "react";

// Define the list of course topics
const courseTopics = [
  "DataTypes",
  "Functions",
  "Loops",
  "Lists",
  "Dictionaries",
  "Tuples",
  "Sets",
  "Strings",
  "Operators",
  "RecursiveFunctions",
];

const difficultyColors = {
  Easy: "#22c55e",
  Medium: "#facc15",
  Hard: "#ef4444",
};

const TrackProgressPage = () => {
  const [progress, setProgress] = useState({
    Easy: 0,
    Medium: 0,
    Hard: 0,
  });

  const [courseCompletion, setCourseCompletion] = useState(0);

  const getTotalSolved = () =>
    progress.Easy + progress.Medium + progress.Hard;

  const getPercentage = () => {
    const total = getTotalSolved();
    return Math.min((total / 10) * 100, 100);
  };

  const handleIncrement = (type) => {
    if (getTotalSolved() < 10) {
      setProgress((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
      }));
    }
  };

  // Calculate course completion
  const calculateCourseProgress = () => {
    let completedCount = 0;
    courseTopics.forEach((topic) => {
      const isCompleted = localStorage.getItem(`completed_${topic}`);
      if (isCompleted === "true") {
        completedCount++;
      }
    });
    const percent = (completedCount / courseTopics.length) * 100;
    setCourseCompletion(percent);
  };

  useEffect(() => {
    calculateCourseProgress();
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        calculateCourseProgress();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const size = 260;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = getPercentage();
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  const courseDashoffset =
    circumference - (courseCompletion / 100) * circumference;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 py-12 flex flex-col items-center gap-12">
      <h1 className="text-4xl font-bold tracking-tight text-center">
        🚀 LeetCode + Course Tracker
      </h1>

      {/* LeetCode Progress Pie */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">🎯 LeetCode Progress</h2>
        <div className="relative mb-4">
          <svg width={size} height={size} className="transform -rotate-90">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#334155"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#3b82f6"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: "stroke-dashoffset 0.6s ease-out" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-3xl font-semibold">{Math.round(percentage)}%</p>
            <p className="text-sm text-slate-300">
              {getTotalSolved()} / 10 problems
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty Buttons */}
      <div className="flex flex-wrap justify-center gap-6">
        {["Easy", "Medium", "Hard"].map((type) => (
          <div
            key={type}
            className="bg-[#1e293b] border border-slate-600 px-6 py-4 rounded-lg text-center shadow-md"
          >
            <h3 className="text-xl font-bold text-white mb-1">{type}</h3>
            <p
              className="text-lg font-semibold"
              style={{ color: difficultyColors[type] }}
            >
              {progress[type]}
            </p>
            <button
              onClick={() => handleIncrement(type)}
              className="mt-2 px-4 py-1 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-md transition-all"
            >
              +1
            </button>
          </div>
        ))}
      </div>

      {/* Daily Insight */}
      <div className="bg-[#1e293b] mt-6 px-6 py-4 rounded-lg max-w-md w-full border border-slate-600">
        <h2 className="text-xl font-semibold mb-2">📌 Daily Insight</h2>
        <ul className="text-slate-300 space-y-1 text-sm">
          <li>🟢 Easy Solved: {progress.Easy}</li>
          <li>🟡 Medium Solved: {progress.Medium}</li>
          <li>🔴 Hard Solved: {progress.Hard}</li>
          <li>📊 Total Today: {getTotalSolved()} / 10</li>
        </ul>
      </div>

      {/* Course Progress Pie */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">📚 Course Progress</h2>
        <div className="relative mb-4">
          <svg width={size} height={size} className="transform -rotate-90">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#334155"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#22d3ee"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={courseDashoffset}
              style={{ transition: "stroke-dashoffset 0.6s ease-out" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-3xl font-semibold">
              {Math.round(courseCompletion)}%
            </p>
            <p className="text-sm text-slate-300">
              {Math.round((courseCompletion / 100) * courseTopics.length)} / {courseTopics.length} completed
            </p>
          </div>
        </div>
        <button
          onClick={calculateCourseProgress}
          className="px-4 py-2 mt-2 text-sm bg-[#22d3ee] text-black font-semibold rounded hover:bg-[#0ea5e9] transition-all"
        >
          🔁 Refresh Progress
        </button>
      </div>
    </div>
  );
};

export default TrackProgressPage;
