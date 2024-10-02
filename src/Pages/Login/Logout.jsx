import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

   
    navigate("/login", { replace: true });

   
    toast.success("Logged out successfully");
  };

  return (
    <>
      <div className="mx-auto w-full min-h-screen container justify-center items-center flex">
        <div className="m-10 p-10 ">
          <div className="bg-blue-900 rounded justify-center items-center flex-col p-10">
            <h2 className="text-white mb-3 text-2xl font-bold">Sign out</h2>
            <div className="justify-center items-center flex">
              <button
                className="bg-blue-800 text-white p-2 rounded-lg w-full"
                onClick={handleLogout} 
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Logout;
