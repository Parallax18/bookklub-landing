import React from "react";
import ManageRentalRequests from "./showcase-cards/manage-rental-requests";
import ContinueRenting from "./showcase-cards/continue-renting";
import AlwaysRoom from "./showcase-cards/always-room";
import HaveFun from "./showcase-cards/have-fun";

const ShowcaseSection = () => {
  return (
    <section className="py-[7.5rem] bg-white z-50">
      <div>
        <p className="font-sans text-primary-900 leading-[4.2rem] tracking-tight text-[3.5rem] font-[500]">
          The all-in-one
        </p>
        <p className="font-cursive text-primary-500 leading-[5rem] text-[5rem] font-[400] ">
          book rental place
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[2rem] mt-[2.125rem]">
        <ManageRentalRequests />
        <ContinueRenting />
        <AlwaysRoom />
        <HaveFun />
      </div>
    </section>
  );
};

export default ShowcaseSection;
