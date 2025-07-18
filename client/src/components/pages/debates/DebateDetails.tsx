"use client";

import { Button } from "@/components/ui/button";
import {
  Clock,
  MessageSquare,
  ThumbsUp,
  User,
  X,
  Check,
  Plus,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Container from "@/components/shared/Container";

const DebateDetails = () => {
  const [support, setSupport] = useState(false);
  const [oppose, setOppose] = useState(false);

  const [activeTab, setActiveTab] = useState<"support" | "oppose">("support");
  const [argumentText, setArgumentText] = useState("");
  const [argumentsList, setArgumentsList] = useState<
    {
      id: number;
      side: "support" | "oppose";
      text: string;
      author: string;
      votes: number;
      timestamp: string;
    }[]
  >([]);

  const debate = {
    id: 1,
    title: "আর্টিফিশিয়াল ইন্টেলিজেন্স কি মানবতার জন্য হুমকি?",
    description:
      "এই বিতর্কে আমরা আলোচনা করব AI কিভাবে আমাদের সমাজকে প্রভাবিত করছে এবং এটি ভবিষ্যতে আমাদের জন্য হুমকি হতে পারে কিনা।",
    category: "প্রযুক্তি",
    tags: ["AI", "ভবিষ্যৎ", "প্রযুক্তি"],
    image: "/ai-debate.jpg",
    duration: "24h",
    createdAt: "২০২৩-১০-১৫",
    creator: "রিয়াদ হাসান",
    supporters: 124,
    opposers: 98,
  };

  const handleSubmitArgument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!argumentText.trim()) return;

    const newArgument = {
      id: Date.now(),
      side: activeTab,
      text: argumentText,
      author: "আপনি", // Replace with actual user name
      votes: 0,
      timestamp: new Date().toLocaleString("bn-BD"),
    };

    setArgumentsList([...argumentsList, newArgument]);
    setArgumentText("");
    setSupport(false); // Reset the form after submission
    setOppose(false); // Reset the form after submission
  };

  const handleVote = (id: number) => {
    setArgumentsList(
      argumentsList.map((arg) =>
        arg.id === id ? { ...arg, votes: arg.votes + 1 } : arg
      )
    );
  };

  return (
    <Container>
      {" "}
      <div className=" py-8 mt-16">
        {/* Debate Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3">
              <img
                className="h-48 w-full object-cover md:h-full"
                src={
                  "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg"
                }
                alt={debate.title}
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {debate.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {debate.duration} বাকি
                </div>
              </div>

              <h1 className="mt-2 text-2xl font-bold text-gray-900">
                {debate.title}
              </h1>

              <p className="mt-3 text-gray-600">{debate.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {debate.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  তৈরি করেছেন: {debate.creator}
                </div>
                <div className="text-sm text-gray-500">
                  তৈরি তারিখ: {debate.createdAt}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Debate Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Supporters */}
          <div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-green-800 flex items-center">
                  <Check className="h-5 w-5 mr-2" /> সমর্থনকারী
                </h3>
                <span className="text-2xl font-bold text-green-600">
                  {debate.supporters}
                </span>
              </div>
              <Button
                variant="outline"
                className="mt-4 w-full border-green-300 text-green-700 hover:bg-green-100"
                onClick={() => setSupport(!support)}
                // onClick={() => setActiveTab("support")}
              >
                পক্ষ নিন
              </Button>
            </div>

            {support && (
              <form onSubmit={handleSubmitArgument} className="mt-4">
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="আপনি কেনো এটাকে সমর্থন করেন, তার পক্ষে যুক্তি লিখুন..."
                  value={argumentText}
                  onChange={(e) => setArgumentText(e.target.value)}
                  required
                />
                <div className="mt-4 flex justify-end">
                  <Button type="submit" className="flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    যুক্তি পোস্ট করুন
                  </Button>
                </div>
              </form>
            )}

            <div className="space-y-4">
              {argumentsList
                .filter((arg) => arg.side === activeTab)
                .sort((a, b) => b.votes - a.votes)
                .map((argument) => (
                  <div
                    key={argument.id}
                    className="bg-white rounded-lg shadow-sm p-6"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="font-semibold">
                            {argument.author}
                          </span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-sm text-gray-500">
                            {argument.timestamp}
                          </span>
                        </div>
                        <p className="text-gray-700">{argument.text}</p>
                      </div>
                      <button
                        onClick={() => handleVote(argument.id)}
                        className="flex flex-col items-center px-3 py-1 rounded-md bg-gray-50 hover:bg-gray-100"
                      >
                        <ThumbsUp className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium mt-1">
                          {argument.votes}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}

              {argumentsList.filter((arg) => arg.side === activeTab).length ===
                0 && (
                <div className="text-center py-12 text-gray-500">
                  <MessageSquare className="mx-auto h-8 w-8 mb-4" />
                  <p>এখনও কোনো যুক্তি দেওয়া হয়নি। প্রথম যুক্তিদাতা হোন!</p>
                </div>
              )}
            </div>
          </div>

          {/* Opposers */}
          <div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-red-800 flex items-center">
                  <X className="h-5 w-5 mr-2" /> বিরোধিতা কারী
                </h3>
                <span className="text-2xl font-bold text-red-600">
                  {debate.opposers}
                </span>
              </div>
              <Button
                variant="outline"
                className="mt-4 w-full border-red-300 text-red-700 hover:bg-red-100"
                onClick={() => setOppose(!oppose)}
                // onClick={() => setActiveTab("oppose")}
              >
                বিপক্ষ নিন
              </Button>
            </div>

            {oppose && (
              <form onSubmit={handleSubmitArgument} className="mt-4">
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="আপনি কেনো এটাকে অসমর্থন করেন, তার পক্ষে যুক্তি লিখুন..."
                  value={argumentText}
                  onChange={(e) => setArgumentText(e.target.value)}
                  required
                />
                <div className="mt-4 flex justify-end">
                  <Button type="submit" className="flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    যুক্তি পোস্ট করুন
                  </Button>
                </div>
              </form>
            )}

            <div className="space-y-4">
              {argumentsList
                .filter((arg) => arg.side === activeTab)
                .sort((a, b) => b.votes - a.votes)
                .map((argument) => (
                  <div
                    key={argument.id}
                    className="bg-white rounded-lg shadow-sm p-6"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="font-semibold">
                            {argument.author}
                          </span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-sm text-gray-500">
                            {argument.timestamp}
                          </span>
                        </div>
                        <p className="text-gray-700">{argument.text}</p>
                      </div>
                      <button
                        onClick={() => handleVote(argument.id)}
                        className="flex flex-col items-center px-3 py-1 rounded-md bg-gray-50 hover:bg-gray-100"
                      >
                        <ThumbsUp className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium mt-1">
                          {argument.votes}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}

              {argumentsList.filter((arg) => arg.side === activeTab).length ===
                0 && (
                <div className="text-center py-12 text-gray-500">
                  <MessageSquare className="mx-auto h-8 w-8 mb-4" />
                  <p>এখনও কোনো যুক্তি দেওয়া হয়নি। প্রথম যুক্তিদাতা হোন!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back to Debates Link */}
        <div className="mt-8 text-center">
          <Link href="/debates">
            <Button variant="outline">সব বিতর্কে ফিরে যান</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default DebateDetails;
