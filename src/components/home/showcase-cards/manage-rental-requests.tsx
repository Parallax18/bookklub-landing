import { AnimatePresence } from "framer-motion";
import React from "react";

const ManageRentalRequests = () => {
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
      <AnimatePresence>
        <div className="bg-white p-[1rem] rounded-[0.75rem] -rotate-[-3deg] w-[27.5rem] h-[4.875rem] request-message">
          <span className="text-primary-900 font-sans font-[400] text-[1rem] leading-[1.5rem] -rotate-[-3deg]">
            Your request for <b>Think and Grow Rich</b> has been approved by{" "}
            <b>Marie.</b> You can connect and collect book.
          </span>
        </div>
        <div className="bg-white p-[1rem] rounded-[0.75rem] rotate-[-3deg] w-[27.5rem] h-[4.875rem] request-message -z-10">
          <span className="text-primary-900 font-sans font-[400] text-[1rem] leading-[1.5rem] rotate-[-3deg]">
            Your request for <b>The Millionaire Next Door</b> has been sent to{" "}
            <b>Anderson.</b>
          </span>
        </div>
        <div className="bg-white p-[1rem] rounded-[0.75rem] -rotate-[-3deg] w-[27.5rem] h-[4.875rem] request-message">
          <span className="text-primary-900 font-sans font-[400] text-[1rem] leading-[1.5rem] -rotate-[-3deg]">
            You just received a request for <b>There was a country</b> from{" "}
            <b>Yewande.</b>
          </span>
        </div>
        <div className="bg-white p-[1rem] rounded-[0.75rem] rotate-[-3deg] w-[27.5rem] h-[4.875rem] request-message">
          <span className="text-primary-900 font-sans font-[400] text-[1rem] leading-[1.5rem] rotate-[-3deg]">
            Your request for <b>The Richest Man in Babylon</b> has been declined
            by <b>Razaq.</b>
          </span>
        </div>
        {/* <RentalRequestOne />
        <RentalRequestTwo />
        <RentalRequestThree />
        <RentalRequestFour /> */}
      </AnimatePresence>
    </div>
  );
};

export default ManageRentalRequests;
