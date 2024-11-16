"use client";

import React from "react";
import BookklubLogo from "@/components/svg/bookklub.logo";
import HeroMobile from "@/components/svg/hero-mobile";
import { Button } from "@/components/ui/button";
import HeroSpiral from "../svg/hero-spiral";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-neutral-snow  rounded-[1rem] px-[2rem] pt-[2rem] flex flex-col items-center">
      <main className="flex flex-col w-full gap-2 mb-[5rem]">
        <div className="flex items-center justify-between ">
          <BookklubLogo className="w-[11.25rem] h-[3.5rem]" />
          <Button className="font-[700] text-[1.125rem] leading-[1.63125rem] font-sans h-[3.5rem] w-[11.75rem] ">
            Join the waitlist
          </Button>
        </div>
        <div className="flex flex-col items-center mt-[5.1875rem] ">
          <motion.span
            initial={{ opacity: 0, scale: 0, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-primary-900 border border-primary-450 font-sans  bg-primary-300 rounded-[2.5rem] px-[1rem] py-[0.625rem] font-[500] leading-[1rem] text-[1rem] -tracking-[2%] text-center "
          >
            Rent a book next door
          </motion.span>
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            className="font-sans text-center flex flex-col items-center"
          >
            <span className="text-[5.25rem] tracking-tight text-primary-900 font-[500] leading-[6.3rem]">
              The best place to
            </span>
            <span className="flex items-center">
              <span className="font-cursive text-primary-500  flex flex-col justify-center items-center">
                <span className="leading-[6.25rem] text-[8.25rem] text-center  w-[13.8125rem] font-[400]">
                  read
                </span>
                <svg
                  width="158"
                  height="21"
                  viewBox="0 0 158 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.15547 17.8311C4.75485 15.9764 11.3586 3.49551 18.2587 3.03796C20.4496 2.89267 25.6134 10.8461 25.8929 11.192C27.5673 13.2639 28.9938 18.6745 32.1062 17.2709C35.5338 15.7253 37.5689 13.0136 39.4747 11.0671C40.8676 9.64429 43.56 4.61851 47.694 4.13869C48.5146 4.04344 52.8181 7.94399 53.2715 8.24282C62.6486 14.4225 67.0723 14.4038 76.5896 9.79926C78.9725 8.64641 87.2097 2.53494 91.738 5.49814C94.1573 7.08127 104.955 16.9103 110.353 15.2063C114.536 13.8857 117.273 10.4713 119.436 8.49773C120.569 7.46325 121.915 3.87196 124.265 3.18565C129.633 1.6183 150.067 10.7167 154.302 12.2195"
                    stroke="#95D7B7"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-[5.25rem] tracking-tight w-[11.375rem] text-primary-900  text-center font-[500] leading-[6.3rem] ">
                and
              </span>
              <span className="font-cursive text-secondary-500  flex flex-col justify-center items-right ">
                <span className="leading-[6.25rem] text-[8.25rem] text-left   w-[13.8125rem] font-[400]">
                  rent
                </span>
                <svg
                  className="ml-3"
                  width="142"
                  height="24"
                  viewBox="0 0 142 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.6584 20.9082C9.96632 16.4996 23.0288 2.85755 38.8345 8.04444C40.82 8.69601 45.9265 13.1287 48.3752 11.7866C51.3017 10.1826 54.9334 8.94241 57.922 7.38174C62.8751 4.79521 67.978 5.04129 73.2309 3.3892C76.4689 2.37078 84.2044 7.49249 88.9225 7.94065C108.535 9.80359 122.989 9.81119 138.808 4.57664"
                    stroke="#FFDDA1"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
            <span className="text-[5.25rem] tracking-tight text-primary-900 font-[500] leading-[6.3rem]">
              a book
            </span>
          </motion.header>
        </div>
        <svg
          className="absolute top-[19.625rem] left-[10.125rem]"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="#FFDDA1" />
        </svg>

        <HeroSpiral className="absolute top-[24.75rem] left-[70.9375rem]" />
      </main>
      <HeroMobile />
    </div>
  );
};

export default Hero;
