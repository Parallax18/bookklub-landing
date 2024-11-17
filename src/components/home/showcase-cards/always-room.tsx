"use client";

import AlwaysRoomDotPattern from "@/components/svg/always-room-dot-pattern";
import AlwaysRoomMobileShot from "@/components/svg/always-room-mobile-shot";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AlwaysRoom = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-secondary-400 rounded-[1rem] relative w-[42rem] h-[41.5rem] flex flex-col justify-between">
      <p className="text-primary-900 pl-[3.216875rem] pt-[4rem] text-[2.5rem] leading-[3rem] -tracking-[2%] font-[600] font-sans mb-[5.84625rem] ">
        There is always <br /> room to list a book
      </p>

      <div ref={ref} className="flex justify-between items-end">
        <AlwaysRoomDotPattern className="rounded-bl-[1rem]" />
        <motion.div
          initial={{ opacity: 0, scale: 0, transformOrigin: "bottom right" }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <AlwaysRoomMobileShot className="bottom-0 rounded-br-[1rem] h-[25.625rem]" />
        </motion.div>
      </div>
    </div>
  );
};

export default AlwaysRoom;
