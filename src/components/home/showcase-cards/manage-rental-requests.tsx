import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const ManageRentalRequests = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-primary-900 rounded-[1rem] relative w-[42rem] h-[41.5rem] pl-[3.216875rem] pt-[4rem] pb-[3.216875rem]">
      <div className="flex justify-between">
        <p className="text-primary-400 text-[2.5rem] leading-[3rem] -tracking-[2%] font-[600] font-sans mb-[5.84625rem] ">
          Manage book <br /> rental requests
        </p>

        <svg
          className="absolute right-0 top-0 rounded-tr-[1rem]"
          width="118"
          height="179"
          viewBox="0 0 118 179"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="113"
            cy="66"
            r="25.6"
            stroke="#95D7B7"
            strokeWidth="10.24"
          />
          <circle
            cx="113"
            cy="66"
            r="46.08"
            stroke="#95D7B7"
            strokeWidth="10.24"
          />
          <circle
            cx="113"
            cy="66"
            r="66.56"
            stroke="#95D7B7"
            strokeWidth="10.24"
          />
          <circle
            cx="113"
            cy="66"
            r="87.04"
            stroke="#95D7B7"
            strokeWidth="10.24"
          />
          <circle
            cx="113"
            cy="66"
            r="107.52"
            stroke="#95D7B7"
            strokeWidth="10.24"
          />
        </svg>
      </div>
      <div>
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
              transformOrigin: "right",
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
              delay: 0.1,
            }}
            className="bg-white p-[1rem] rounded-[0.75rem]  w-[27.5rem] h-[4.875rem] relative z-40 request-message"
          >
            <span className="text-primary-900 font-sans font-[400] text-[1rem] leading-[1.5rem] ">
              Your request for <b>Think and Grow Rich</b> has been approved by{" "}
              <b>Marie.</b> You can connect and collect book.
            </span>
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
                ? { opacity: 1, y: 0, rotate: -3 }
                : { opacity: 0, y: -50, rotate: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              mass: 1,
              delay: 0.2,
            }}
            className="bg-white p-[1rem] rounded-[0.75rem]  w-[27.5rem] h-[4.875rem] relative z-10 request-message "
          >
            <span className="text-primary-900 font-sans font-[400] text-[1rem] leading-[1.5rem] ">
              Your request for <b>The Millionaire Next Door</b> has been sent to{" "}
              <b>Anderson.</b>
            </span>
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
                ? { opacity: 1, y: 0, rotate: 3 }
                : { opacity: 0, y: -50, rotate: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              mass: 1,
              delay: 0.3,
            }}
            className="bg-white p-[1rem] rounded-[0.75rem]  w-[27.5rem] h-[4.875rem]  relative z-30 request-message"
          >
            <span className="text-primary-900 font-sans font-[400] text-[1rem] leading-[1.5rem] ">
              You just received a request for <b>There was a country</b> from{" "}
              <b>Yewande.</b>
            </span>
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
                ? { opacity: 1, y: 0, rotate: -3 }
                : { opacity: 0, y: -50, rotate: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              mass: 1,
              delay: 0.4,
            }}
            className="bg-white p-[1rem] rounded-[0.75rem]  w-[27.5rem] h-[4.875rem]  relative z-10 request-message"
          >
            <span className="text-primary-900 font-sans font-[400] text-[1rem] leading-[1.5rem] ">
              Your request for <b>The Richest Man in Babylon</b> has been
              declined by <b>Razaq.</b>
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ManageRentalRequests;
