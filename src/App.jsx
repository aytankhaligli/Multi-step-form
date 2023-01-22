import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

function App() {
  const [step, setStep] = useState(1);
  const [timePlan, setTimePlan] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [addOns, setAddOns] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const goNextStep = () => {
    if (step !== 2) setStep((preStep) => preStep + 1);
    if (step === 2) selectedPlan !== "" && setStep((preStep) => preStep + 1);
    // if (step === 3) addOns !== "" && setStep((preStep) => preStep + 1);
    if (selectedPlan === "") setErrorMsg(true);
  };
  const goPrevStep = () => {
    step === 3 && setTimePlan("monthly");
    step === 3 && setSelectedPlan("");
    setAddOns("");
    setStep((preStep) => preStep - 1);
  };

  return (
    <div className="relative flex flex-col items-center justify-between container  md:grid md:grid-cols-3 md:p-4 md:mt-24  h-screen md:bg-white md:h-128 w-screen md:w-4/5 mx-auto my-0 rounded-lg">
      <Sidebar step={step} />
      {step === 1 && <Step1 goNextStep={goNextStep} />}
      {step === 2 && (
        <Step2
          timePlan={timePlan}
          setTimePlan={setTimePlan}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          errorMsg={errorMsg}
        />
      )}
      {step === 3 && (
        <Step3 timePlan={timePlan} addOns={addOns} setAddOns={setAddOns} />
      )}
      {step === 4 && (
        <Step4
          timePlan={timePlan}
          selectedPlan={selectedPlan}
          addOns={addOns}
          setStep={setStep}
        />
      )}
      {step === 5 && <Step5 />}
      <div
        className={`h-20 w-screen  bg-white flex ${
          step === 1 ? "justify-end" : "justify-between"
        } items-center md:col-start-2 md:col-end-4 md:row-start-3  md:w-full md:pr-25 lg:pl-25 shadow-md md:shadow-none`}
      >
        {step !== 1 && step !== 5 && (
          <button className="ml-4 text-cool-gray md:ml-0" onClick={goPrevStep}>
            Go Back
          </button>
        )}
        {(step === 2 || step === 3) && (
          <button
            className="text-white bg-marine-blue py-3 px-6 rounded-md  font-semibold mr-4 md:m-0  "
            onClick={goNextStep}
          >
            Next Step
          </button>
        )}
        {step === 4 && (
          <button
            type="submit"
            className="text-white bg-purplish-blue py-3 px-6 rounded-md  font-semibold mr-4 md:m-0  "
            onClick={goNextStep}
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
