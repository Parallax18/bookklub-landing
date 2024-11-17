"use client";

import ContinueRentingMobileShot from "@/components/svg/continue-renting-mobile-shot";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContinueRenting = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-neutral-snow rounded-[1rem] relative w-[42rem] h-[41.5rem]">
      <div className="relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0, transformOrigin: "top right" }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <ContinueRentingMobileShot className="absolute right-0 top-0 rounded-tr-[1rem] h-[25.625rem]" />
        </motion.div>
        <motion.svg
          className="absolute right-0 top-[16.6875rem] left-[16.6875rem] animate-spin"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="#FFDDA1" />
        </motion.svg>
      </div>
      <div className=" flex flex-col h-full justify-end">
        <div className="h-[11.1875rem] relative">
          <p className="text-primary-900 pl-[3.216875rem] text-[2.5rem] leading-[3rem] -tracking-[2%] font-[600] font-sans">
            continue renting <br /> continue reading
          </p>

          <motion.svg
            initial={{
              opacity: 0,
              scaleY: 0,
              transformOrigin: "bottom center",
            }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="rounded-b-[1rem] absolute bottom-0 left-0 "
            width="672"
            height="145"
            viewBox="0 0 672 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              d="M-35 141L-1.12175 116.837C20.4208 101.472 47.8259 96.8501 73.2161 104.3L89.9448 109.208C106.579 114.089 124.548 110.509 138.042 99.6272V99.6272C153.382 87.2566 174.326 84.4388 192.39 92.3153L205.253 97.9241C232.002 109.588 263.066 104.916 285.202 85.9006L291.407 80.5702C311.259 63.5155 338.715 58.3761 363.393 67.0954V67.0954C385.449 74.8888 409.904 71.655 429.176 58.3965L435.76 53.8672C456.881 39.3373 483.251 34.6456 508.087 40.9991L516.69 43.1998C540.747 49.3538 566.295 43.5727 585.359 27.6614V27.6614C605.955 10.4707 633.994 5.19245 659.431 13.7174L711 31"
              stroke="#95D7B7"
              strokeWidth="8"
            />
            <motion.path
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              d="M-35 182L-1.12175 157.837C20.4208 142.472 47.8259 137.85 73.2161 145.3L89.9448 150.208C106.579 155.089 124.548 151.509 138.042 140.627V140.627C153.382 128.257 174.326 125.439 192.39 133.315L205.253 138.924C232.002 150.588 263.066 145.916 285.202 126.901L291.407 121.57C311.259 104.515 338.715 99.3761 363.393 108.095V108.095C385.449 115.889 409.904 112.655 429.176 99.3965L435.76 94.8672C456.881 80.3373 483.251 75.6456 508.087 81.9991L516.69 84.1998C540.747 90.3538 566.295 84.5727 585.359 68.6614V68.6614C605.955 51.4707 633.994 46.1925 659.431 54.7174L711 72"
              stroke="#95D7B7"
              strokeWidth="8"
            />
            <motion.path
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              d="M-35 223L-1.12175 198.837C20.4208 183.472 47.8259 178.85 73.2161 186.3L89.9448 191.208C106.579 196.089 124.548 192.509 138.042 181.627V181.627C153.382 169.257 174.326 166.439 192.39 174.315L205.253 179.924C232.002 191.588 263.066 186.916 285.202 167.901L291.407 162.57C311.259 145.515 338.715 140.376 363.393 149.095V149.095C385.449 156.889 409.904 153.655 429.176 140.396L435.76 135.867C456.881 121.337 483.251 116.646 508.087 122.999L516.69 125.2C540.747 131.354 566.295 125.573 585.359 109.661V109.661C605.955 92.4707 633.994 87.1925 659.431 95.7174L711 113"
              stroke="#95D7B7"
              strokeWidth="8"
            />
            <motion.path
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              d="M-35 264L-1.12175 239.837C20.4208 224.472 47.8259 219.85 73.2161 227.3L89.9448 232.208C106.579 237.089 124.548 233.509 138.042 222.627V222.627C153.382 210.257 174.326 207.439 192.39 215.315L205.253 220.924C232.002 232.588 263.066 227.916 285.202 208.901L291.407 203.57C311.259 186.515 338.715 181.376 363.393 190.095V190.095C385.449 197.889 409.904 194.655 429.176 181.396L435.76 176.867C456.881 162.337 483.251 157.646 508.087 163.999L516.69 166.2C540.747 172.354 566.295 166.573 585.359 150.661V150.661C605.955 133.471 633.994 128.192 659.431 136.717L711 154"
              stroke="#95D7B7"
              strokeWidth="8"
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
};

export default ContinueRenting;
