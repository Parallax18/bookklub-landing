"use client";
import React, { SVGProps } from "react";
import { motion } from "framer-motion";

const AlwaysRoomDotPattern = (props: SVGProps<SVGSVGElement>) => {
  const circleVariants = {
    animate: {
      y: [0, -3, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        // Randomize the animation timing for each circle
        repeatDelay: Math.random() * 2,
      },
    },
  };
  return (
    <svg
      {...props}
      width="177"
      height="202"
      viewBox="0 0 177 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(72)].map((_, index) => {
        const x = (index % 8) * 24 + 3;
        const y = Math.floor(index / 8) * 24 + 6;

        return (
          <motion.circle
            key={index}
            cx={x}
            cy={y}
            r="6"
            fill="#E08549"
            variants={circleVariants}
            animate="animate"
          />
        );
      })}
    </svg>
  );
};

export default AlwaysRoomDotPattern;
