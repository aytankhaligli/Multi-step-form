import React from "react";

export default function Sidebar({ step }) {
  const step_number =
    "w-9 h-9 md:w-8 md:h-8 md:text-sm border  rounded-full flex items-center justify-center   ";
  const active = "bg-light-blue text-black border-none";
  return (
    <div className=" bg-[url('./assets/images/bg-sidebar-mobile.svg')]  md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-no-repeat	bg-cover h-40 w-screen md:h-full md:w-70 md:row-span-3 ">
      <div className="flex md:flex-col gap-7 pt-8 md:pt-16 px-8  text-white justify-center">
        <div className="flex items-center gap-3 ">
          <div className={step_number + (step === 1 ? active : "")}>1</div>
          <div className="uppercase hidden md:block">
            <p className="font-light text-light-gray text-xs">Step 1 </p>
            <p className="font-bold tracking-wider text-sm">Your info</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div className={step_number + (step === 2 ? active : "")}>2</div>
          <div className="uppercase hidden md:block">
            <p className="font-light text-light-gray text-xs">Step 2 </p>
            <p className="font-bold text-sm tracking-wider">Select plan</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div className={step_number + (step === 3 ? active : "")}>3</div>
          <div className="uppercase hidden md:block">
            <p className="font-light text-light-gray text-xs">Step 3</p>
            <p className="font-bold tracking-wider text-sm">add-ons</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div
            className={step_number + (step === 4 || step === 5 ? active : "")}
          >
            4
          </div>
          <div className="uppercase hidden md:block">
            <p className="font-light text-light-gray text-xs">Step 4 </p>
            <p className="font-bold tracking-wider text-sm">Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
}
