import React from "react";
import { Link } from "react-router-dom";

const FourNotFour = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-600 mb-4">Page not found!</p>
      <Link
        to="/"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default FourNotFour;
