import HaveFunPattern from "@/components/svg/have-fun-pattern";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const HaveFun = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className=" bg-secondary-500 rounded-[1rem] relative w-[42rem] h-[41.5rem] flex flex-col justify-between">
      <p className="text-secondary-450  w-max flex flex-col items-end pl-[3.216875rem] pt-[4rem] text-[2.5rem] leading-[3rem] -tracking-[2%] font-[600] font-sans mb-[5.84625rem] ">
        Don&apos;t just rent & read, <br /> have fun while doing it
        <svg
          width="138"
          height="24"
          viewBox="0 0 138 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.58937 20.7477C9.71487 16.4667 22.3996 3.21909 37.7482 8.25599C39.6763 8.88872 44.6351 13.1932 47.013 11.8899C49.8548 10.3323 53.3815 9.12799 56.2837 7.61245C61.0936 5.10072 66.0489 5.33969 71.1499 3.73537C74.2943 2.7464 81.8061 7.72 86.3877 8.15519C105.433 9.96427 119.469 9.97164 134.831 4.88847"
            stroke="#FFDDA1"
            strokeWidth="6"
            stroke-linecap="round"
          />
        </svg>
      </p>

      <div className=" py-[4.125rem]  h-full relative  w-max z-50">
        <AnimatePresence>
          <div className=" h-max absolute bottom-20">
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
                rotate: 0,
                transformOrigin: "right",
              }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotate: -3 }
                  : { opacity: 0, y: -50, rotate: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                mass: 1,
                delay: 0.1,
              }}
              className="bg-secondary-400 py-[0.5rem] px-[0.75rem] rounded-[0.75rem] -rotate-[3deg] w-[24.20625rem] h-[6.0625rem] request-message left-[10.125rem] relative"
            >
              <span className="text-shade-black font-sans font-[400] text-[0.875rem] leading-[1.26875rem] -rotate-[3deg]">
                This book is exactly what I am looking for right now in my life.
                It has consistently highlighted the need to be financially
                literate.
              </span>
              <div className="flex justify-end w-full">
                <span className="text-[0.75rem] leading-[1.0875rem] font-[400] text-secondary-500 font-sans">
                  4:59 PM
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
                rotate: 0,
                transformOrigin: "left",
              }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotate: 3 }
                  : { opacity: 0, y: -50, rotate: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                mass: 1,
                delay: 0.2,
              }}
              className="bg-secondary-900 py-[0.5rem] px-[0.75rem] rounded-[0.75rem] rotate-[3deg] w-[25.52rem] h-[6.0625rem] request-message left-[3.8175rem]  relative "
            >
              <span className="text-shade-white font-sans font-[400] text-[0.875rem] leading-[1.26875rem] rotate-[3deg]">
                I bet you can say that again. I have read that book over 5 times
                and I still don&apos;t think I have exhausted what the author
                penned down.
              </span>
              <div className="flex justify-start w-full">
                <span className="text-[0.75rem] leading-[1.0875rem] font-[400] text-secondary-500 font-sans">
                  4:59 PM
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
                rotate: 0,
                transformOrigin: "right",
              }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotate: -3 }
                  : { opacity: 0, y: -50, rotate: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                mass: 1,
                delay: 0.3,
              }}
              className="bg-secondary-400 py-[0.5rem] px-[0.75rem] rounded-[0.75rem] -rotate-[3deg] w-[24.20625rem] h-[4.75rem] request-message left-[7.6875rem]  relative"
            >
              <span className="text-shade-black font-sans font-[400] text-[0.875rem] leading-[1.26875rem] -rotate-[3deg]">
                A million thanks for renting me this book! <br />
                😍🙏🏾
              </span>
              <div className="flex justify-end w-full">
                <span className="text-[0.75rem] leading-[1.0875rem] font-[400] text-secondary-500 font-sans">
                  4:59 PM
                </span>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{
                opacity: 0,
                y: -50,
                rotate: 0,
                transformOrigin: "left",
              }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotate: 3 }
                  : { opacity: 0, y: -50, rotate: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                mass: 1,
                delay: 0.4,
              }}
              className="bg-secondary-900 py-[0.5rem] px-[0.75rem] rounded-[0.75rem] rotate-[3deg] w-[25.52rem] h-[3.5625rem] request-message left-[4.87375rem] relative"
            >
              <span className="text-shade-white font-sans font-[400] text-[0.875rem] leading-[1.26875rem] rotate-[3deg]">
                You are welcome a million.
              </span>
              <div className="flex justify-start w-full">
                <span className="text-[0.75rem] leading-[1.0875rem] font-[400] text-secondary-500 font-sans">
                  4:59 PM
                </span>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      <HaveFunPattern className="absolute bottom-0 w-full" />
    </div>
  );
};

export default HaveFun;
