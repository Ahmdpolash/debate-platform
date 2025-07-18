"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Users, Trophy } from "lucide-react";
import Container from "../shared/Container";

export function HeroSection() {
  return (
    <Container>
      <div className="text-center min-h-[calc(100vh_-_10px)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <div className="mt-8 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold py-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              কমিউনিটি অফ ডিবেট এরিনা
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              বিতর্ক তৈরি করুন, আপনার যুক্তি দিন, আর কমিউনিটির সাথে মজাদার
              আলোচনায় যোগ দিন। কে কতটা জোরে কথা বলতে পারে তার লড়াই নয়, কে
              কতটা ভালো যুক্তি দিতে পারে সেটাই দেখান!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/debates">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  সকল ডিবেট দেখুন
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-400 ease-in-out"
              >
                <Link href="/debates/create">নতুন বিতর্ক শুরু করুন</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer lg:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center border rounded-lg  border-gray-300 p-4 shadow-md"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                যুক্তি দিন, পক্ষ নিন
              </h3>
              <p className="text-gray-600">
                নতুন বিতর্ক শুরু করুন অথবা থাকা বিতর্কে যোগ দিন পক্ষ বা বিপক্ষে
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center border rounded-lg  border-gray-300 p-4 shadow-md"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">মতামত দিন, ভোট দিন</h3>
              <p className="text-gray-600">
                আপনার যুক্তি শেয়ার করুন আর অন্যের যুক্তিতে ভোট দিন - কে জিতবে
                সেটাই দেখার!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center border rounded-lg  border-gray-300 p-4 shadow-md"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">শীর্ষে উঠুন!</h3>
              <p className="text-gray-600">
                লিডারবোর্ডে নিজের নাম তুলে ধরুন আর হয়ে উঠুন সেরা বিতার্কিক
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
