import { useState } from "react";
import InputBox from "./InputBox";

export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const calculateBMI = () => {
    const heightInCm = parseFloat(height);
    const weightInKg = parseFloat(weight);

    if (
      isNaN(heightInCm) ||
      isNaN(weightInKg) ||
      heightInCm <= 0 ||
      weightInKg <= 0
    ) {
      setBmiResult("");
      setErrorMessage("Please enter valid height and weight.");
    } else {
      const heightInMeters = heightInCm / 100;
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      const bmiCategory = getBMICategory(bmi);
      setBmiResult(`Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`);
      setErrorMessage("");
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight 😟";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight 😀";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight 😕";
    } else {
      return "Obese 😨";
    }
  };

  return (
    <div id="bmi">
      <div className="py-16 sm:py-10 lg:max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl py-3 ">
          Calculate BMI
        </h2>
        <InputBox
          title={"Weight (kg) :"}
          value={weight}
          onChange={handleWeightChange}
        />
        <InputBox
          title={"Height (cm) :"}
          value={height}
          onChange={handleHeightChange}
        />
        <div className="mt-10 flex items-center justify-start gap-x-6">
          <button
            onClick={calculateBMI}
            className="rounded-md bg-gray-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-gray-800 border hover:border-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 box-border"
          >
            Calculate
          </button>
        </div>
        <p id="result" className="mt-5 text-lg font-bold">
          {bmiResult}
        </p>
        <p className="mt-5 text-red-900 ">{errorMessage}</p>
      </div>
    </div>
  );
}
