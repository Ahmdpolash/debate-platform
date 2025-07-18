"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, Filter } from "lucide-react";
import { useState } from "react";

const Leaderboard = () => {
  const [activeFilter, setActiveFilter] = useState("all-time");

  const leaderboardData = {
    "all-time": [
      { rank: 1, name: "রিয়াদ হাসান", points: 2450, debates: 42 },
      { rank: 2, name: "নিশাত তাবাসসুম", points: 2310, debates: 38 },
      { rank: 3, name: "আরমান আহমেদ", points: 1985, debates: 35 },
      { rank: 4, name: "সুমাইয়া ইসলাম", points: 1760, debates: 31 },
      { rank: 5, name: "ফাহিম রহমান", points: 1620, debates: 28 },
    ],
    monthly: [
      { rank: 1, name: "নিশাত তাবাসসুম", points: 680, debates: 12 },
      { rank: 2, name: "ফাহিম রহমান", points: 620, debates: 11 },
      { rank: 3, name: "সুমাইয়া ইসলাম", points: 590, debates: 10 },
      { rank: 4, name: "আরমান আহমেদ", points: 540, debates: 9 },
      { rank: 5, name: "রিয়াদ হাসান", points: 510, debates: 8 },
    ],
    weekly: [
      { rank: 1, name: "ফাহিম রহমান", points: 320, debates: 6 },
      { rank: 2, name: "সুমাইয়া ইসলাম", points: 290, debates: 5 },
      { rank: 3, name: "নিশাত তাবাসসুম", points: 270, debates: 5 },
      { rank: 4, name: "আরমান আহমেদ", points: 240, debates: 4 },
      { rank: 5, name: "রিয়াদ হাসান", points: 210, debates: 4 },
    ],
  };

  const getMedalColor = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-b from-yellow-400 to-yellow-600";
    if (rank === 2) return "bg-gradient-to-b from-gray-300 to-gray-400";
    if (rank === 3) return "bg-gradient-to-b from-amber-600 to-amber-800";
    return "bg-gray-200";
  };

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 lg:mt-12">
      <div className="max-w-4x mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 mb-4">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">লিডারবোর্ড</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমাদের প্ল্যাটফর্মের এর সেরা ডিবেটারদের দেখুন । আপনিও সেরা হতে চাইলে এখনই বিতর্কে অংশগ্রহণ করুন !
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold flex items-center">
              <Calendar className="mr-2 h-6 w-6 text-blue-600" />
              শীর্ষ প্রতিযোগীরা
            </h2>
            <div className="flex space-x-2 mt-4 sm:mt-0">
              {[
                { id: "weekly", label: "সাপ্তাহিক" },
                { id: "monthly", label: "মাসিক" },
                { id: "all-time", label: "সবসময়" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {leaderboardData[activeFilter as keyof typeof leaderboardData].map(
              (user) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: user.rank * 0.1 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div
                      className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold ${getMedalColor(
                        user.rank
                      )}`}
                    >
                      {user.rank}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {user.name}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span className="mr-4">
                          {user.points.toLocaleString()} ভোট
                        </span>
                        <span>{user.debates} টি বিতর্ক</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          user.rank <= 3
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        #{user.rank}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Filter className="mr-2 h-5 w-5 text-blue-600" />
            আপনার র‌্যাঙ্কিং দেখুন
          </h2>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-gray-700 mb-2">
              আপনি এখনও লিডারবোর্ডে নেই। আরও বিতর্কে অংশগ্রহণ করুন!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
              বিতর্ক ব্রাউজ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
