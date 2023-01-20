import React, { useEffect, useState } from "react";
import { optionsData } from "../data.jsx";
import Option from "./Option";

export default function Step3({ timePlan, addOns, setAddOns }) {
  const [options, setOptions] = useState(optionsData);
  function selectOption(e) {
    const newOptions = options.map((option) => {
      return e.target.id === option.id
        ? { ...option, checked: option.checked ? false : true }
        : option;
    });
    setOptions(newOptions);
  }

  useEffect(() => {
    const selectedArr = options.filter((option) => option.checked === true);
    selectedArr.length && setAddOns(selectedArr);
  }, [options]);

  return (
    <div className="absolute  top-24 left-0 right-0 mx-auto md:static md:mx-0 md:w-full py-8 px-6 lg:px-25 lg:pt-10 w-80 bg-white rounded-lg md:col-span-2 ">
      <h1 className="text-marine-blue text-2xl font-bold tracking-wide mb-4 ">
        Pick add-ons
      </h1>
      <p className="text-cool-gray text-md mb-8 ">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-3  ">
        {options.map((option) => (
          <Option
            id={option.id}
            key={option.id}
            header={option.header}
            text={option.text}
            price_mo={option.price_mo}
            price_yr={option.price_yr}
            checked={option.checked}
            selectOption={selectOption}
            timePlan={timePlan}
          />
        ))}
      </div>
    </div>
  );
}
