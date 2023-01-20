import React, { useState } from "react";

export default function Step1({ goNextStep }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [viewError, setViewError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || number === "") setViewError(true);
    if (name !== "" && email !== "" && number !== "") goNextStep();
  };

  return (
    <form
      className="absolute  top-24 left-0 right-0 mx-auto md:static md:mx-0 md:w-full py-8 px-6 lg:px-25 lg:pt-10 w-80 bg-white rounded-lg md:col-span-2 md:shadow-none shadow-md"
      onSubmit={(e) => submitForm(e)}
    >
      <h1 className="text-marine-blue text-3xl font-bold tracking-wide mb-4 ">
        Personal info
      </h1>
      <p className="text-cool-gray text-md mb-4">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex justify-between items-center">
            <label className="text-marine-blue">Name</label>
            {name === "" && viewError && (
              <p className="text-sm text-strawberry-red ">
                This field is required
              </p>
            )}
          </div>
          <input
            type="text"
            value={name}
            placeholder="e.g. Stephen King"
            className={`w-full border border-light-gray p-2 mt-1 rounded-md focus:outline-none focus:border-purplish-blue focus:ring-0 focus:ring-purplish-blue   `}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <label className="text-marine-blue">Email Address</label>
            {email === "" && viewError && (
              <p className="text-sm text-strawberry-red ">
                This field is required
              </p>
            )}
          </div>
          <input
            type="email"
            value={email}
            placeholder="e.g. stephenking@lorem.com"
            className={`peer w-full border border-light-gray p-2 mt-1 rounded-md focus:outline-none focus:border-purplish-blue focus:ring-0 focus:ring-purplish-blue
            invalid:border-strawberry-red invalid:text-strawberry-red
            invalid:focus:border-strawberry-red  `}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <label className="text-marine-blue">Phone Number</label>
            {number === "" && viewError && (
              <p className="text-sm text-strawberry-red ">
                This field is required
              </p>
            )}
          </div>
          <input
            type="tel"
            value={number}
            placeholder="e.g. +994 55 555 55 55"
            className={`w-full border border-light-gray p-2 mt-1 rounded-md focus:outline-none focus:border-purplish-blue focus:ring-0 focus:ring-purplish-blue required
 invalid:border-strawberry-red invalid:text-strawberry-red
            invalid:focus:border-strawberry-red
            `}
            pattern="[+][0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-marine-blue py-3 px-6 rounded-md  font-semibold mr-4  fixed  bottom-0 -translate-y-1/4 right-4 md:absolute md:-translate-y-0 md:bottom-12 md:right-24"
      >
        Next Step
      </button>
    </form>
  );
}
