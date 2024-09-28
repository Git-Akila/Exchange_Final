import React from "react";
import { Link } from "react-router-dom";
import { MdNotificationsActive } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { Point } from "highcharts";

const Button = () => {
  return (
    <>
    {/* Notifications */}
      {/* <Link to="/login"><button className="bg-blue-700 text-white  px-6 py-2 rounded-full">
  Login
  </button></Link> */}
      <div className="flex gap-4  ">
        <MdNotificationsActive
          size={30}
          style={{ cursor: "pointer", color: "black" }}
          onMouseOut={(e) => (e.target.style.color = ["#FDFDFD"])}
          onMouseOver={(e) => (e.target.style.color = "black")}
        />
        <MdNotificationsActive
          size={30}
          style={{ cursor: "pointer", color: "black" }}
          onMouseOver={(e) => (e.target.style.color = "black")}
          onMouseOut={(e) => (e.target.style.color = ["#FDFDFD"])}
        />
        <TiMessages
          size={30}
          style={{ cursor: "pointer", color: "black" }}
          onMouseOver={(e) => (e.target.style.color = "black")}
          onMouseOut={(e) => (e.target.style.color = ["#FDFDFD"])}
        />
      </div>
    </>
  );
};

export default Button;
