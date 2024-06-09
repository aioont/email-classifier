import React from "react";
import SigninButton from "./SigninButton";
import OpenAIForm from "./OpenAIForm"; // Import the OpenAIForm component

const Appbar = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-blue-400">Email Classifier</h1>
        <OpenAIForm /> {/* Include the OpenAIForm component */}
      </div>
      <SigninButton />
    </header>
  );
};

export default Appbar;
