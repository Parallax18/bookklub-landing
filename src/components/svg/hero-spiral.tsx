"use client";

import React, { SVGProps } from "react";

const HeroSpiral = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="44" cy="44" r="10" stroke="#95D7B7" strokeWidth="4" />
      <circle cx="44" cy="44" r="18" stroke="#95D7B7" strokeWidth="4" />
      <circle cx="44" cy="44" r="26" stroke="#95D7B7" strokeWidth="4" />
      <circle cx="44" cy="44" r="34" stroke="#95D7B7" strokeWidth="4" />
      <circle cx="44" cy="44" r="42" stroke="#95D7B7" strokeWidth="4" />
    </svg>
  );
};

export default HeroSpiral;
