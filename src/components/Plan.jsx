import React from "react";
export default function Plan({
  id,
  header,
  img,
  price_mo,
  price_yr,
  selected,
  timePlan,
  choosePlan,
}) {
  return (
    <div
      id={id}
      className={`flex gap-3 h-20  items-center border border-light-gray rounded-md p-3 hover:border-purplish-blue hover:bg-alabaster transition-all md:h-36 md:flex-col md:justify-between md:items-start cursor-pointer active:border-purplish-blue active:bg-magnolia ${
        selected ? "border-purplish-blue bg-magnolia" : ""
      }`}
      onClick={choosePlan}
    >
      <div id={id}>
        <img src={img} id={id} />
      </div>
      <div id={id}>
        <p className="text-marine-blue font-semibold" id={id}>
          {header}
        </p>
        <p className="text-cool-gray tracking-wider " id={id}>
          {timePlan === "monthly" ? price_mo : price_yr}
        </p>
        {timePlan === "yearly" && (
          <p className="text-marine-blue text-sm" id={id}>
            2 months free
          </p>
        )}
      </div>
    </div>
  );
}
