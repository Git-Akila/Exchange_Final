import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { kycUserDetails } from "../Data/fetchUserData";
import { FaCloudArrowDown } from "react-icons/fa6";
import { RiEditFill } from "react-icons/ri";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
import DatePicker from "react-datepicker";
import { BsCalendarDate } from "react-icons/bs";
import { MdVisibilityOff } from "react-icons/md";

import { MdVisibility } from "react-icons/md";
import { MdOutlineCloudDownload } from "react-icons/md";




import "react-datepicker/dist/react-datepicker.css";

const TabButton = ({ label, isActive, onClick }) => (
  <button
    style={{
      paddingLeft: "2px",
      paddingRight: "2px",
      paddingTop: "8px",
      paddingBottom: "8px",
      cursor: "pointer",
      borderBottom: isActive ? "2px solid blue" : "none",
      fontSize: "14px",
      marginRight: "6px",
    }}
    onClick={onClick}
  >
    {label}
  </button>
);

const TabPanel = ({ children, isActive }) => (
  <div style={{ display: isActive ? "block" : "none", padding: "10px" }}>
    {children}
  </div>
);

function KycUserDetails() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  // const currentRows=data.slice(indexOfFirstRow,indexOfLastRow);

  // const totalPages=Math.ceil(data.length/rowsPerPage)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    // if (currentPage < totalPages) {
    //   setCurrentPage(currentPage + 1);
    // }
  };
  //searching
  const [query,setQuery]=useState("");
const handleSearch=()=>{
  //data(query);
  setQuery(query);
}

//FilteredOption
const [selectedValue,setSelectedValue]=useState("");

const handleChange=(e)=>{
  setSelectedValue(e.target.value);
  //data(e.target.value);
}

//Datepicker
const [startDate,setStartDate]=useState(null);
const handleDateChange=(date)=>{
  setStartDate(date);
  // data(date);
  startDate(date);
}

  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.kyclist);

  const [activeTab, setActiveTab] = useState(0);
  console.log(".................data" + JSON.stringify(data, 2, null));

  useEffect(() => {
    dispatch(kycUserDetails());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>There was an error fetching the details...</p>;
  }
  const userData = data?.data || {};
  console.log("userDattaatta" + JSON.stringify(userData, 2, null));
  const kycData = userData.kyc || {};

  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap" }}
        className="bg-slate-100 p-2"
      >
        <TabButton
          label="Personal Info"
          isActive={activeTab === 0}
          onClick={() => setActiveTab(0)}
        />
        <TabButton
          label="Security"
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />

        <TabButton
          label="Assets"
          isActive={activeTab === 2}
          onClick={() => setActiveTab(2)}
        />
        <TabButton
          label="P2P Wallet"
          isActive={activeTab === 3}
          onClick={() => setActiveTab(3)}
        />
        <TabButton
          label="Swap History"
          isActive={activeTab === 4}
          onClick={() => setActiveTab(4)}
        />
        <TabButton
          label="Wallet History"
          isActive={activeTab === 5}
          onClick={() => setActiveTab(5)}
        />
        <TabButton
          label="Open Orders"
          isActive={activeTab === 6}
          onClick={() => setActiveTab(6)}
        />
        <TabButton
          label="Orders History"
          isActive={activeTab === 7}
          onClick={() => setActiveTab(7)}
        />
        <TabButton
          label="User Activity"
          isActive={activeTab === 8}
          onClick={() => setActiveTab(8)}
        />
        <TabButton
          label="Referral"
          isActive={activeTab === 9}
          onClick={() => setActiveTab(9)}
        />
        <TabButton
          label="Tickets"
          isActive={activeTab === 9}
          onClick={() => setActiveTab(9)}
        />
        <TabButton
          label="Airdrop"
          isActive={activeTab == 10}
          onClick={() => setActiveTab(10)}
        />
        <TabButton
          icon={<FaCloudArrowDown />}
          label="Export History"
          isActive={activeTab == 10}
          onClick={() => setActiveTab(10)}
        />
      </div>

      <TabPanel isActive={activeTab === 0}>
        <Typography variant="h6">
          <div className="mx-auto container">
            <div className="justify-center md:flex-row flex-col flex gap-2  px-3 mt-3">
              <div className="md:w-1/2 p-3 bg-blue-50 text-[16px]">
                <h2 className="font-semibold text-blue-700 text-xl mb-2">
                  Personal Information
                </h2>
                <div className="bg-[#fff] p-4">
                  <ul>
                    <li className="flex justify-between">
                      <span>Name: </span>
                      <span>{userData.username}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Email: </span>
                      <span>{userData.email} </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Date of Birth: </span>
                      <span>{userData.dob} </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Age: </span>
                      <span>{userData.age} </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Gender: </span>
                      <span>{userData.gender} </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Phone no: </span>
                      <span>{userData.phone} </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Address: </span>
                      <span>{userData.address} </span>
                    </li>
                    <li className="flex justify-between">
                      <span>City: </span>
                      <span>{userData.city} </span>
                    </li>
                    <li className="flex justify-between">
                      <span>State: </span>
                      <span>{userData.state} </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pincode: </span>
                      <span>{userData.pincode} </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Country: </span>
                      <span>{userData.country} </span>
                    </li>

                    <li className="flex justify-between">
                      <span>Referred By: </span>
                      <span>{userData.referrals}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 p-2 bg-blue-50 text-[14px] ">
                <h2 className="justify-between flex">
                  <span className="font-semibold text-xl text-blue-700 mb-2">
                    KYC Information
                  </span>
                  <span className="flex gap-2 mb-2">
                    <button className="bg-blue-100 p-1 rounded">
                      Verified
                    </button>
                    <button className="text-red-500 p-1 gap-1 items-center flex">
                      Edit
                      <RiEditFill color="red" />
                    </button>
                  </span>
                </h2>
                <div className="bg-[#fff] p-4">
                  <p className="text-[16px] font-bold mb-2">
                    Document Information
                  </p>
                  <ul>
                    {/* <li>Proof Name&nbsp;&nbsp;&nbsp;&nbsp;{kycData.proofname}</li> */}
                    <li className="flex justify-between">
                      <span>Proof Name</span>
                      <span>{kycData.proofname}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Proof Number</span>
                      <span> {kycData.proofnumber} </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Font</span>
                      <span>
                        {" "}
                        <img src={kycData.front} />
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span> Back </span>
                      <span>
                        {" "}
                        <img src={kycData.back} />
                      </span>
                    </li>
                    {/* <li className="flex justify-between">
                      <span>Proof Status</span>
                      <span>{kycData.proofstatus}</span>
                    </li> */}
                    <li className="flex justify-between">
                      <span>Proof Status</span>
                      <span className="flex gap-2">
                        <button className="bg-blue-100 p-1 rounded">
                          Verified
                        </button>
                        <button className="text-red-500 p-1 gap-1 items-center flex">
                          Edit
                        </button>
                        <RiEditFill color="red" />
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span> Proof Verified By </span>
                      <span> {kycData.proofVerifiedBy} </span>
                    </li>
                    <li className="flex justify-between">
                      <span> Selfie </span>
                      <span>
                        {" "}
                        <img src={kycData.selfie} />
                      </span>
                    </li>
                    {/* <li className="flex justify-between">
                      <span> Selfie Status</span>
                      <span> {kycData.selfiestatus} </span>
                    </li> */}
                    <li className="flex justify-between">
                      <span> Selfie VerifiedBy </span>
                      <span> {kycData.selfieVerifiedBy}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pancard</span>
                      <span>
                        <img src={kycData.pan} />
                      </span>
                    </li>
                    {/* <li className="flex justify-between">
                      <span> Pancard status</span>
                      <span> {kycData.panstatus}</span>
                    </li> */}
                    <li className="flex justify-between items-center">
                      <span> Pancard status</span>
                      <span className="flex gap-2">
                        <button className="bg-blue-100 p-1 rounded">
                          Verified
                        </button>
                        <button className="text-red-500 p-1 gap-1 items-center flex">
                          Edit
                          <RiEditFill color="red" />
                        </button>
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span> Date</span>
                      <span> {kycData.Date} </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 1}>
        <Typography variant="h6">
          <div className="mx-auto container w-full">
            <div className="justify-center md:flex-row flex-col flex gap-2  px-3 mt-3">
              <div className="md:w-1/2 w-full p-5 bg-slate-50 text-[16px]">
                <h2 className="text-blue-700 font-bold text-xl">
                  Bank Details
                </h2>
                <ul>
                  <li className="gap-2">
                    <span className="bg-slate-50 p-2 border-2 border-gray-50">
                      Account Holder Name
                    </span>
                    <p
                      type="text"
                      className="p-2 border-2 border-slate-300 mt-2 mb-2 bg-slate-200 rounded w-[500px]"
                    >
                      jjj
                    </p>
                  </li>
                  <li className="gap-2">
                    <span className="bg-slate-50 p-2 border-2 border-gray-50">
                      Bank Name
                    </span>
                    <p
                      type="text"
                      className="p-2 border-2 border-slate-300 mt-2 mb-2 rounded bg-slate-200 w-[500px]"
                    >
                      jjj
                    </p>
                  </li>
                  <li className="gap-2">
                    <span className="bg-slate-50 p-2 border-2 border-gray-50">
                      Branch
                    </span>
                    <p
                      type="text"
                      className="p-2 border-2 border-slate-300 rounded mt-2 mb-2 bg-slate-200 w-[500px]"
                    >
                      jjj
                    </p>
                  </li>
                  <li className="gap-2">
                    <span className="bg-slate-50 p-2 border-2 border-gray-50">
                      IFSC Code
                    </span>
                    <p
                      type="text"
                      className="p-2 border-2 border-slate-300 rounded mt-2 mb-2 bg-slate-200 w-[500px]"
                    >
                      jjj
                    </p>
                  </li>
                  <li className="gap-2">
                    <span className="bg-slate-50 p-2 border-2 border-gray-50">
                      Account Type
                    </span>
                    <p
                      type="text"
                      className="p-2 border-2 border-slate-300 rounded mt-2 mb-2 bg-slate-200 w-[500px]"
                    >
                      jjj
                    </p>
                  </li>
                  <li className="gap-2">
                    <span className="bg-slate-50 p-2 border-2 border-gray-50">
                      UPI Id
                    </span>
                    <p
                      type="text"
                      className="p-2 border-2 rounded border-slate-300 mt-2 mb-2 bg-slate-200 w-[500px]"
                    >
                      jjj
                    </p>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 w-full bg-slate-50 text-[16px] p-5">
                <ul>
                  <li className="gap-2 flex text-center items-center justify-between mb-2 mt-2">
                    <span className="bg-slate-50  border-2 border-gray-50 text-[16px]">
                      Account is Activated/ Tab to block account
                    </span>
                    <span className="mr-10">
                      <label className="switch">
                        <input checked="" type="checkbox" class="toggle" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                      </label>
                    </span>
                  </li>

                  <li className="gap-2 flex text-center  items-center justify-between">
                    <span className="bg-slate-50  border-2 border-gray-50 text-[16px]">
                      TFA
                    </span>
                    <span className="mr-10">
                      <label className="switch">
                        <input checked="" type="checkbox" class="toggle" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                      </label>
                    </span>
                  </li>

                  <li className="gap-2 flex text-center items-center mt-2 mb-2 justify-between">
                    <span className="bg-slate-50  border-2 border-gray-50 text-[16px]">
                      P2P
                    </span>
                    <span className="mr-10">
                      <label className="switch">
                        <input checked="" type="checkbox" class="toggle" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                      </label>
                    </span>
                  </li>

                  <li className="gap-2 flex text-center items-center mt-2 mb-2 justify-between">
                    <span className="bg-slate-50  border-2 border-gray-50 text-[16px]">
                      KYC
                    </span>
                    <span className="mr-10">
                      <label className="switch">
                        <input checked="" type="checkbox" class="toggle" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                      </label>
                    </span>
                  </li>

                  <li className="gap-2 flex text-center items-center justify-between mt-2 mb-2">
                    <span className="bg-slate-50  border-2 border-gray-50 text-[16px]">
                      Funds Passcode is enabled
                    </span>
                    <span className="mr-10">
                      <label className="switch">
                        <input checked="" type="checkbox" class="toggle" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                      </label>
                    </span>
                  </li>

                  <li className="gap-2 flex text-center items-center justify-between">
                    <span className="bg-slate-50 border-2 border-gray-50 text-[16px]">
                      Bank Proof
                    </span>
                    <span className="flex gap-2">
                      <img
                        src="https://example.com/image.jpg"
                        style={{ width: "200px", height: "200px" }}
                        className="p-3"
                      />
                    </span>
                    <span>
                      <button className="bg-red-500 rounded p-2">
                        Download
                      </button>
                    </span>
                  </li>

                  <li className="text-center">
                    <h2 className="text-blue-700 text-xl font-semibold p-2 mt-2 mb-2">
                      User Funds Block Section
                    </h2>
                    <span className="flex justify-between mt-2 mb-2">
                      <p>Delete Account</p>
                      <button className="bg-red-500 p-2 rounded">Delete</button>
                    </span>
                    <span className="flex justify-between mt-2 mb-2">
                      <p>Freeze Account</p>
                      <button className="bg-blue-300 p-2 rounded">
                        Freeze
                      </button>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 2}>
        <Typography variant="h6">
          <div className="mx-auto container text-[16px] ">
            <div className="justify-center">
              <h2 className=" font-semibold text-xl mb-2">Flat</h2>
              <table className="border-2 w-full h-full border-blue-300 bg-gradient-to-r from-blue-500 to-blue-50">
                <thead>
                  <tr className="text-center border-b-2 border-blue-300">
                    <th className="py-2">Coin</th>
                    <th className="py-2">Available</th>
                    <th className="py-2">On hold</th>
                    <th className="py-2">Total</th>
                    <th className="py-2">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2 flex gap-2 justify-center items-center">
                      <button className="bg-[#fff] p-1 rounded font-medium">
                        Deposit
                      </button>
                      <button className="bg-blue-50 p-1 rounded font-medium">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 className="font-semibold text-xl mb-2">Crypto</h2>
              <table className="border-2 w-full h-full border-blue-300 bg-gradient-to-r from-blue-500 to-blue-50">
                <thead>
                  <tr className="text-center border-b-2 border-blue-300 ">
                    <th className="py-2">Coin</th>
                    <th className="py-2">Available</th>
                    <th className="py-2">On hold</th>
                    <th className="py-2">Total</th>
                    <th className="py-2">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">--</td>
                    <td className="py-2 flex gap-2 justify-center items-center">
                      <button className="bg-[#fff] p-1 rounded font-medium">
                        Deposit
                      </button>
                      <button className="bg-blue-50 p-1 rounded font-medium">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 3}>
        <Typography variant="h6">
          <div className="mx-auto container text-[16px]">
            <div className="justify-center">
              <h2 className="font-semibold text-xl mb-2 ">Crypto</h2>
              <table className="from-slate-200 w-full h-full bg-gradient-to-tr to-blue-300 border-2 border-gray-400">
                <thead>
                  <tr className="border-b-2 border-b-black">
                    <th className="py-2">Coin</th>
                    <th className="py-2">Available</th>
                    <th className="py-2">On hold</th>
                    <th className="py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-b-slate-50">
                    <td>;;</td>
                    <td>;;</td>
                    <td>::</td>
                    <td>::</td>
                  </tr>
                  <tr className="border-b-2 border-b-slate-50">
                    <td>;;</td>
                    <td>;;</td>
                    <td>::</td>
                    <td>::</td>
                  </tr>
                  <tr>
                    <td>;;</td>
                    <td>;;</td>
                    <td>::</td>
                    <td>::</td>
                  </tr>
                  <tr className="border-b-2 border-b-slate-50">
                    <td>;;</td>
                    <td>;;</td>
                    <td>::</td>
                    <td>::</td>
                  </tr>
                  <tr className="border-b-2 border-b-slate-50">
                    <td>;;</td>
                    <td>;;</td>
                    <td>::</td>
                    <td>::</td>
                  </tr>
                  <tr className="border-b-2 border-b-slate-50">
                    <td>;;</td>
                    <td>;;</td>
                    <td>::</td>
                    <td>::</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 4}>
        <Typography varient="h6">
          <div className="mx-auto container text-[16px]">
            <div className="justify-center">
              <table className="bg-gradient-to-l to-blue-400 from-slate-200 w-full h-full">
                <thead>
                  <tr className="border-b-2 border-b-slate-300">
                    <th className="py-2">S.No</th>
                    <th className="py-2">Buy Currency</th>
                    <th className="py-2">Spend Amount</th>
                    <th className="py-2">Buy Amount</th>
                    <th className="py-2">Payment ID</th>
                    <th className="py-2">Date And Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-b-slate-300 ">
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                  </tr>
                  <tr className="border-b-2 border-b-slate-300 ">
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                  </tr>
                  <tr className="border-b-2 border-b-slate-300 ">
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                  </tr>
                  <tr className="border-b-2 border-b-slate-300 ">
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                    <td className="py-2">::</td>
                  </tr>
                </tbody>
              </table>
              {/* Pagination Controls */}
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  // className={`px-4 py-2 ${
                  //   currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
                  // }`}
                >
                  <BiSolidSkipPreviousCircle size={20} />
                </button>
                <span>Page{/* Page  {currentPage} of {totalPages} */}</span>
                <button
                  onClick={handleNextPage}
                  // disabled={currentPage === totalPages}
                  // className={`px-4 py-2 ${
                  //   currentPage === totalPages
                  //     ? "bg-gray-300"
                  //     : "bg-blue-500 text-white"
                  // }`}
                >
                  {/* Next */}
                  <BiSolidSkipNextCircle size={20} />
                </button>
              </div>
            </div>
          </div>
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 5}>
        <Typography variant="h6">
          <div className="mx-auto container text-[16px]">
            <div className="justify-center">
           <div className="justify-between flex"> <h2 className=" font-semibold text-lg mb-2 mt-2">Wallet History</h2> 
           <button className="p-2 bg-blue-200 flex text-center items-center gap-2 rounded-md">Download<MdOutlineCloudDownload /></button></div>
            <div className="gap-2 flex justify-between mt-3 mb-3">
              <div className="flex items-center text-slate-400">
                <select value={selectedValue} onChange={handleChange}
                className="border p-2 rounded-lg border-blue-200">
                  <option value="">All</option>
                  <option value="Flat">Flat</option>
                  <option value="Crypto">Crypto</option>
                </select>

              </div>
              <div className="flex items-center text-slate-400">
                <select className="border p-2 rounded-lg border-blue-200">
                  <option value="">All</option>
                </select>

              </div>
              <div className="flex items-center text-slate-400">
                <select className="border p-2 rounded-lg border-blue-200">
                  <option value="" >All</option>
                </select>
              </div>
              {/* npm install react-datepicker
 */}
              <div className="flex items-center border p-2 rounded-lg border-blue-200">
                <DatePicker selected={startDate}
                onChange={handleDateChange}
                placeholderText="Select Date"
                className="focus:outline-none"/>
                <BsCalendarDate size={20} color="#5390D9"/>
              </div>
              
            <div onClick={handleSearch} className="flex items-center
              border p-2 rounded-lg mr-2 border-blue-200 ">
              <input type="text" placeholder="search..." className="focus:outline-none w-full" value={query}
              onChange={(e)=>setQuery(e.target.value)} />
<FcSearch size={30}/>
            </div>
            
            </div>
              <table className="bg-gradient-to-tr from-blue-200 border-2 border-slate-50 to-blue-50 w-full h-full">
               
                <thead>
                  <tr className="border-b-2 border-blue-50">
                    <th className="py-2">Date</th>
                    <th className="py-2">Assets</th>
                    <th className="py-2">Type</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Transaction Fees</th>
                    <th className="py-2">Payment Option</th>
                    <th className="py-2">Transaction ID</th>
                    <th className="py-2">Notes</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-2  border-slate-50">
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2"><button className="bg-blue-300 px-2 rounded-lg">......</button></td>
                    <td className="py-2"><MdVisibility /><MdVisibilityOff /></td>
                  </tr>
                  <tr className="border-2  border-slate-50">
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2"><button className="bg-blue-300 px-2 rounded-lg">......</button></td>
                    <td className="py-2"><MdVisibility /><MdVisibilityOff /></td>
                  </tr>
                  <tr className="border-2  border-slate-50">
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2"><button className="bg-blue-300 px-2 rounded-lg">......</button></td>
                    <td className="py-2"><MdVisibility /><MdVisibilityOff /></td>
                  </tr>
                  <tr className="border-2  border-slate-50">
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2"><button className="bg-blue-300 px-2 rounded-lg">......</button></td>
                    <td className="py-2"><MdVisibility /><MdVisibilityOff /></td>
                  </tr>
                  <tr className="border-2  border-slate-50">
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2"><button className="bg-blue-300 px-2 rounded-lg">......</button></td>
                    <td className="py-2"><MdVisibility /><MdVisibilityOff /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Typography>
      </TabPanel>
    </div>
  );
}

export default KycUserDetails;
