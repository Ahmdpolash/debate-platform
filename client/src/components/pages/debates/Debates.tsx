"use client";
import DebateCard from "@/components/home/DebateCard";
import { featuredDebates } from "@/components/home/FeaturedDebate";
import Container from "@/components/shared/Container";

import React from "react";
import DebateBtn from "./DebateBtn";

const categories = [
  { title: "রাজনীতি" },
  { title: "প্রযুক্তি" },
  { title: "স্বাস্থ" },
  { title: "বিনোদন" },
  { title: "শিক্ষা" },
  { title: " অন্যান্য" },
];

const Debates = () => {
  const [category, setCategory] = React.useState("সব");



  return (
    <Container>
      <div className="py-12  lg:mt-12">
        {/* header */}
        <div className="border-b border-gray-300 pb-8 mb-">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            সকল ডিবেট
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            আমাদের প্ল্যাটফর্মে সকল ডিবেট দেখুন। আপনি যদি অংশগ্রহণ করতে চান,
            তাহলে এখনই ডিবেট তৈরি করুন এবং অংশগ্রহণ করুন!
          </p>
        </div>

        {/* filtering section */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center justify-between pt-8">
              <div className="hidden lg:flex items-center flex-wrap gap-3 ">
                <div
                  className={`h-[35px] ${
                    category === "সব" ? "bg-[crimson]" : "bg-[#50A2FF] ]"
                  } px-3  rounded-[25px] flex items-center text-white justify-center font-Poppins cursor-pointer`}
                  onClick={() => setCategory("সব")}
                >
                  সব
                </div>
                {categories &&
                  categories?.slice(0, 5)?.map((item: any, index: number) => (
                    <div key={index}>
                      <div
                        className={`h-[35px] ${
                          category === item?.title
                            ? "bg-[crimson]"
                            : "bg-[#50A2FF]"
                        } m- px-3 rounded-[30px] text-white flex items-center justify-center font-Poppins cursor-pointer`}
                        onClick={() => setCategory(item?.title)}
                      >
                        {item?.title}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div>
            <DebateBtn />
          </div>
        </div>

        {/* main card */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 cursor-pointer ">
            {featuredDebates.slice(0, 4)?.map((debate, index) => (
              <DebateCard debate={debate} index={index} key={debate.id} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Debates;
