import React from "react";

export default function Step4({ selectedPlan, timePlan, addOns, setStep }) {
  const change = () => {
    setStep(2);
  };
  return (
    <div className="absolute  top-24 left-0 right-0 mx-auto md:static md:mx-0 md:w-full py-8 px-6 lg:px-25 lg:pt-10 w-80 bg-white rounded-lg md:col-span-2 shadow-md md:shadow-none">
      <h1 className="text-marine-blue text-2xl font-bold tracking-wide mb-4 ">
        Finishing up
      </h1>
      <p className="text-cool-gray text-md mb-8 ">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-magnolia rounded-md px-4 py-5 flex flex-col text-sm mb-7">
        <div
          className={`flex justify-between items-center  pb-3 ${
            addOns === "" ? "" : "border-b border-light-gray"
          } `}
        >
          <div className="">
            <p className="text-marine-blue font-semibold">
              {selectedPlan[0]?.header} ({timePlan})
            </p>
            <a
              href="#"
              className="text-cool-gray underline decoration-solid hover:text-purplish-blue transition-all "
              onClick={change}
            >
              Change
            </a>
          </div>
          <div className="text-marine-blue font-semibold">
            {timePlan === "monthly"
              ? selectedPlan[0]?.price_mo
              : selectedPlan[0]?.price_yr}
          </div>
        </div>
        {addOns !== "" &&
          addOns?.map((add) => (
            <div
              key={add.id}
              className="flex justify-between items-center pt-3"
            >
              <p className="text-cool-gray">{add.header}</p>
              <p className="text-marine-blue">
                {timePlan === "monthly" ? add.price_mo : add.price_yr}
              </p>
            </div>
          ))}
      </div>
      <div className="flex justify-between items-center pt-3  px-4">
        <p className="text-cool-gray text-sm">
          Total ({timePlan === "monthly" ? "per month" : "per year"})
        </p>
        <p className="text-purplish-blue font-semibold">
          +$
          {addOns === ""
            ? timePlan === "monthly"
              ? (selectedPlan[0]?.price_mo.length === 5
                  ? +selectedPlan[0]?.price_mo.slice(1, 2)
                  : +selectedPlan[0]?.price_mo.slice(1, 3)) + "/mo"
              : (selectedPlan[0]?.price_yr.length === 6
                  ? +selectedPlan[0]?.price_yr.slice(1, 3)
                  : +selectedPlan[0]?.price_yr.slice(1, 4)) + "/yr"
            : timePlan === "monthly"
            ? (selectedPlan[0]?.price_mo.length === 5
                ? +selectedPlan[0]?.price_mo.slice(1, 2)
                : +selectedPlan[0]?.price_mo.slice(1, 3)) +
              addOns?.reduce((acc, add) => +add.price_mo.slice(2, 3) + acc, 0) +
              "/mo"
            : (selectedPlan[0]?.price_yr.length === 6
                ? +selectedPlan[0]?.price_yr.slice(1, 3)
                : +selectedPlan[0]?.price_yr.slice(1, 4)) +
              addOns?.reduce((acc, add) => +add.price_yr.slice(2, 4) + acc, 0) +
              "/yr"}
        </p>
      </div>
    </div>
  );
}
