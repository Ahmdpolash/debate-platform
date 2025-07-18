"use client";
import React, { useState } from "react";
import logo from "@/logo.png";
// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Cross, CrossIcon, Trophy, XIcon } from "lucide-react";
import { div } from "framer-motion/client";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="">
      <div className="lg:max-w-6xl mx-auto mt-3 absolute top-0 w-full left-[50%] -translate-x-[50%] z-10 lg:px-0 px-4">
        <nav className="flex items-center justify-between w-full relative dark:bg-slate-900 bg-white rounded-full px-[10px] py-[8px] border border-teal-400/50 ">
          {/* logo */}
          <Image
            src={"/logo.png"}
            alt="logo"
            width={70}
            height={70}
            className="w-[80px] cursor-pointer"
          />

          {/* nav links */}
          <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
            <Link
              href={"/debates"}
              className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
            >
              ডিবেটস দেখুন
            </Link>

            <Link
              href="/leaderboard"
              className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize flex items-center gap-1"
            >
              <Trophy className="h-4 w-4" />
              লিডারবোর্ড
            </Link>
          </ul>

          {/*  buttons */}
          <div className="items-center gap-[10px] flex">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="py-[7px] text-[1rem] px-[16px] cursor-pointer rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden"
            >
              লগইন করুন
            </button>

            <CiMenuFries
              className="text-[1.8rem] dark:text-[#abc2d3] mr-1 text-[#424242]c cursor-pointer md:hidden flex"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            />
          </div>

          {/* mobile sidebar */}
          <aside
            className={` ${
              mobileSidebarOpen
                ? "translate-x-0 opacity-100 z-20"
                : "translate-x-[200px] opacity-0 z-[-1]"
            } md:hidden bg-white p-4 text-center absolute top-[65px] dark:bg-slate-700 right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
          >
            <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
              <Link
                href={"/debates"}
                className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
              >
                ডিবেটস দেখুন
              </Link>

              <Link
                href={"/leaderboard"}
                className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
              >
                লিডারবোর্ড
              </Link>
            </ul>
          </aside>
        </nav>
      </div>

      {openModal && (
        <>
          <div  className="fixed h-screen w-full flex justify-center items-center backdrop-blur-sm z-10 cursor-pointer">
            <div className=" bg-gray-300 rounded-lg  h-[200px] w-lg border bg-blend-exclusio relative">
              <div onClick={()=> setOpenModal(false)} className="absolute top-3 right-3">
                <XIcon size={25} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
