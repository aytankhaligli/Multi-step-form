import React, { useEffect, useState } from "react";
import { planData } from "../data";
import Plan from "./Plan";

export default function Step2({
  timePlan,
  setTimePlan,
  selectedPlan,
  setSelectedPlan,
}) {
  const [plans, setPlans] = useState(planData);
  useEffect(() => {
    const selectedArr = plans.filter((plan) => plan.selected === true);

    selectedArr.length && setSelectedPlan(selectedArr);
  }, [plans]);

  const changePlan = (e) => {
    // console.log(e);
    e.stopPropagation();
    const el = e.target.firstElementChild;
    if (
      (e.pageX > 215 && e.pageX < 230) ||
      (e.pageX > 255 && e.pageX < 275) ||
      (e.pageX > 365 && e.pageX < 385) ||
      (e.pageX > 710 && e.pageX < 730) ||
      (e.pageX > 825 && e.pageX < 840) ||
      e.pageX > 910
    ) {
      if (el) el.style.left = "60%";
      setTimePlan("yearly");
    }
    if (
      (e.pageX > 200 && e.pageX < 215) ||
      (e.pageX > 240 && e.pageX < 255) ||
      (e.pageX > 350 && e.pageX < 365) ||
      (e.pageX > 695 && e.pageX < 710) ||
      (e.pageX > 805 && e.pageX < 825) ||
      (e.pageX > 895 && e.pageX < 910)
    ) {
      if (el) el.style.left = "4px";
      setTimePlan("monthly");
    }
  };

  const choosePlan = (e) => {
    const newPlansData = plans.map((plan) => {
      return e.target.id === plan.id
        ? { ...plan, selected: true }
        : { ...plan, selected: false };
    });
    setPlans(newPlansData);
  };

  return (
    <div className="absolute  top-24 left-0 right-0 mx-auto md:static md:mx-0 md:w-full py-8 px-6 lg:px-25 lg:pt-10 w-80 bg-white rounded-lg md:col-span-2 ">
      <h1 className="text-marine-blue text-2xl font-bold tracking-wide mb-4 ">
        Select your plan
      </h1>
      <p className="text-cool-gray text-md mb-8 ">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-3 md:grid md:grid-cols-3 ">
        {plans.map((plan) => (
          <Plan
            key={plan.id}
            id={plan.id}
            header={plan.header}
            img={plan.img}
            price_mo={plan.price_mo}
            price_yr={plan.price_yr}
            selected={plan.selected}
            choosePlan={choosePlan}
            timePlan={timePlan}
          />
        ))}
        <div className="flex gap-5 items-center justify-center bg-alabaster p-3 rounded-md md:col-span-3 md:mt-6">
          <p
            className={`${
              timePlan === "monthly" ? "text-marine-blue" : "text-cool-gray"
            }`}
          >
            Monthly
          </p>
          <div
            className="relative flex items-center w-10 h-5 rounded-full bg-marine-blue cursor-pointer"
            onClick={(e) => changePlan(e)}
          >
            <div
              className={`absolute w-3 h-3  rounded-full bg-white ${
                timePlan === "monthly" ? "left-1" : "right-1"
              }`}
            ></div>
          </div>
          <p
            className={`${
              timePlan === "yearly" ? "text-marine-blue" : "text-cool-gray"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
    </div>
  );
}
