import React, { useEffect, useState } from "react";
import { planData } from "../data";
import Plan from "./Plan";

export default function Step2({
  timePlan,
  setTimePlan,
  selectedPlan,
  setSelectedPlan,
  errorMsg,
}) {
  const [plans, setPlans] = useState(planData);

  useEffect(() => {
    const selectedArr = plans.filter((plan) => plan.selected === true);

    selectedArr.length && setSelectedPlan(selectedArr);
  }, [plans]);

  const changePlan = (e) => {
    e.stopPropagation();
    setTimePlan((pre) => (pre === "monthly" ? "yearly" : "monthly"));
  };

  const choosePlan = (e) => {
    const newPlansData = plans.map((plan) => {
      return e.target.id === plan.id
        ? { ...plan, selected: !plan.selected }
        : { ...plan, selected: false };
    });
    setPlans(newPlansData);
  };

  return (
    <div className="absolute  top-24 left-0 right-0 mx-auto md:static md:mx-0 md:w-full py-5 px-6 lg:px-25 lg:pt-10 w-80 bg-white rounded-lg md:col-span-2">
      <h1 className="text-marine-blue text-2xl font-bold tracking-wide mb-3 ">
        Select your plan
      </h1>
      <p className="text-cool-gray text-md mb-5 ">
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
        <div className="flex gap-5 items-center justify-center bg-alabaster p-2 rounded-md md:col-span-3 md:mt-6">
          <p
            className={`${
              timePlan === "monthly" ? "text-marine-blue" : "text-cool-gray"
            }`}
          >
            Monthly
          </p>
          <div className="relative">
            <input
              type="checkbox"
              id="check"
              className="absolute cursor-pointer opacity-0 toggle"
              onClick={changePlan}
            />
            <label
              htmlFor="check"
              className="flex items-center before:w-8 before:h-4 before:bg-marine-blue before:rounded-full after:absolute after:bg-white after:w-3.5 after:h-3.5 after:rounded-full after:left-0.5 "
            ></label>
          </div>
          <p
            className={`${
              timePlan === "yearly" ? "text-marine-blue" : "text-cool-gray"
            }`}
          >
            Yearly
          </p>
        </div>
        {errorMsg && selectedPlan === "" && (
          <div className="col-span-3 text-center mt-5 text-strawberry-red">
            <p>Please select your plan!</p>
          </div>
        )}
      </div>
    </div>
  );
}
