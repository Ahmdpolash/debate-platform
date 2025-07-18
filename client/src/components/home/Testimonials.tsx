import { motion } from "framer-motion";

import React from "react";

const dummyData = [
  {
    id: 1,
    quote:
      "এই প্ল্যাটফর্মে বিতর্ক করে আমার যুক্তি দেওয়ার দক্ষতা অনেক বেড়েছে!",
    name: "মোহাম্মাদ হাসান",
    role: "কলেজ শিক্ষার্থী",
  },
  {
    id: 2,
    quote:
      "অনেক চমৎকার একটি প্ল্যাটফর্ম। বিভিন্ন বিষয়ে মানুষের চিন্তাভাবনা জানতে পারছি।",
    name: "ঝংকার মাহবু্ব",
    role: "সফটওয়্যার ইঞ্জিনিয়ার",
  },
];

const Testimonials = () => {
  return (
    <div className="py-10 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          আমাদের ব্যবহারকারীদের কথা
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dummyData.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-yellow-400 text-2xl mb-4">"</div>
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
