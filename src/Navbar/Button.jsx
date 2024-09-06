import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/login"><button className="bg-blue-700 text-white  px-6 py-2 rounded-full">
      Login
    </button></Link>
  );
};

export default Button;
