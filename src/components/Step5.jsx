import React from "react";
import thank from "../assets/images/icon-thank-you.svg";
export default function Step5() {
  return (
    <div className="absolute  top-24 left-0 right-0 mx-auto md:static md:mx-0 md:w-full py-8 px-6 lg:pr-25 lg:pl-16 lg:pt-10 w-80 bg-white rounded-lg md:col-span-2 shadow-md md:shadow-none flex flex-col items-center justify-center text-center">
      <img src={thank} className="w-14 mt-16 md:w-auto md:mt-32" />
      <h1 className="text-marine-blue text-2xl md:text-3xl font-bold tracking-wide mb-4 mt-6">
        Thank you!
      </h1>
      <p className="text-cool-gray text-md mb-8 ">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
