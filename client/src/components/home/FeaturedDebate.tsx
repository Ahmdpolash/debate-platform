// components/FeaturedDebates.jsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Users, MessageSquare } from "lucide-react"; // Importing relevant icons
import Container from "../shared/Container";
import DebateCard from "./DebateCard";

// This would typically come from an API call
export const featuredDebates = [
  {
    id: "debate-1",
    title: "কৃত্রিম বুদ্ধিমত্তা: আশীর্বাদ নাকি অভিশাপ?",
    description:
      "কৃত্রিম বুদ্ধিমত্তার দ্রুত অগ্রগতি কি মানবজাতির জন্য এক নতুন দিগন্ত উন্মোচন করবে, নাকি এটি এক অশনি সংকেত?",
    category: "প্রযুক্তি",
    tags: ["AI", "ভবিষ্যৎ", "সমাজ"],
    status: "সক্রিয়",
    participants: 125,
    arguments: 340,
    timeRemaining: "২ ঘন্টা বাকি",
    winner: null,
  },
  {
    id: "debate-2",
    title: "রিমোট ওয়ার্ক: অফিসের ভবিষ্যৎ?",
    description:
      "কোভিড-১৯ পরবর্তী বিশ্বে রিমোট ওয়ার্ক কি স্থায়ী সমাধান, নাকি অফিসে ফিরে যাওয়াই উত্তম?",
    category: "কর্মজীবন",
    tags: ["চাকরি", "সংস্কৃতি"],
    status: "সক্রিয়",
    participants: 80,
    arguments: 210,
    timeRemaining: "১০ ঘন্টা বাকি",
    winner: null,
  },
  {
    id: "debate-3",
    title: "জলবায়ু পরিবর্তন: ব্যক্তিগত দায়িত্ব নাকি রাষ্ট্রীয় নীতি?",
    description:
      "জলবায়ু পরিবর্তন মোকাবিলায় ব্যক্তিবিশেষের উদ্যোগ কতটা কার্যকর, নাকি কেবল সরকারের শক্তিশালী নীতিই পারে পরিবর্তন আনতে?",
    category: "পরিবেশ",
    tags: ["পরিবেশ", "নীতি"],
    status: "শেষ হয়েছে",
    participants: 200,
    arguments: 500,
    timeRemaining: "সময় শেষ",
    winner: "সমর্থনকারী পক্ষ বিজয়ী!",
  },
];

export function FeaturedDebates() {
  return (
    <Container>
      <div className="py-6 ">
        <div className="container mx-auto px-4">
          <div className="relative mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold text-center  text-gray-800"
            >
              আলোচিত ডিবেটসমূহ
            </motion.h2>
            <div className="mx-auto h-[2px] w-1/6 bg-gray-500 mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 cursor-pointer ">
            {featuredDebates.slice(0, 4)?.map((debate, index) => (
              <DebateCard debate={debate} index={index} key={debate.id} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link href="/debates">সকল ডিবেট দেখুন</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
