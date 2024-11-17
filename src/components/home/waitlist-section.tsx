import React from "react";
import WaitlistSectionRing from "../svg/waitlist-section-ring";

const WaitlistSection = () => {
  return (
    <section>
      <div>
        <span className="font-sans text-[3.5rem] leading-[4.2rem] tracking-tight font-[500] ">
          Books and...
        </span>
        <span className="font-cursive text-primary-500 text-[5rem] tracking-tight leading-[5rem] font-[400] block">
          more
        </span>
      </div>
      <div className="bg-neutral-snow rounded-[1rem] px-[3.375rem] py-[3.375rem] mt-[1.5rem] ">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="font-sans font-[600] tracking-tight leading-[3.6rem] text-[3rem]">
              You are not just on our list{" "}
              <span className="font-cursive text-primary-500 text-[4.5rem] leading-[5.4rem] font-[400]">
                waiting
              </span>
              {"  "}
              but, <br />
              we have also been{" "}
              <span className="font-cursive text-secondary-500 text-[4.5rem] leading-[5.4rem] font-[400]">
                waiting
              </span>{" "}
              for you
            </p>
          </div>
          <WaitlistSectionRing />
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
