import React, { useRef, useState } from "react";
import checkmark from "../assets/images/icon-checkmark.svg";

export default function Option({
  timePlan,
  header,
  text,
  price_mo,
  price_yr,
  selectOption,
  id,
  checked,
}) {
  return (
    <div
      className={`flex gap-3 items-center border border-light-gray rounded-md p-4 hover:border-purplish-blue hover:bg-alabaster transition-all  ${
        checked ? "border-purplish-blue bg-alabaster" : ""
      }  `}
    >
      <div
        id={id}
        className={`h-6 w-6 border border-light-gray rounded-md cursor-pointer flex items-center justify-center ${
          checked ? "bg-purplish-blue" : ""
        }`}
        onClick={selectOption}
      >
        {checked && <img src={checkmark} />}
      </div>
      <div>
        <p className="text-marine-blue font-semibold text-sm md:text-base">
          {header}
        </p>
        <p className="text-cool-gray tracking-wide text-xs md:text-sm">
          {text}
        </p>
      </div>
      <p className="text-xs text-purplish-blue ml-auto md:text-sm">
        {timePlan === "monthly" ? price_mo : price_yr}
      </p>
    </div>
  );
}
