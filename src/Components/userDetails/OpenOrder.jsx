import React, { useState } from "react";
import {
  MdVisibility,
  MdOutlineCloudDownload,
  MdVisibilityOff,
} from "react-icons/md";

import { BsCalendarDate } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
function OpenOrder({ TradehistoryData }) {
  //searching
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    //data(query);
    setQuery(query);
  };

  //FilteredOption
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    //data(e.target.value);
  };

  //Datepicker
  const [startDate, setStartDate] = useState(null);
  const handleDateChange = (date) => {
    setStartDate(date);
    // data(date);
    startDate(date);
  };

  return (
    <div className="mx-auto container text-[16px]">
      <div className="justify-center bg-slate-50 p-4">
        <div className="justify-between flex">
          <h2 className=" font-bold text-blue-700 text-xl mb-2 mt-2">
            Open History
          </h2>
          <button className="p-2 bg-blue-200 flex text-center items-center gap-2 rounded-md">
            Download
            <MdOutlineCloudDownload />
          </button>
        </div>
        <div className="gap-2 flex justify-between mt-3 mb-3">
          <div className="flex items-center text-slate-400">
            <select
              value={selectedValue}
              onChange={handleChange}
              className="border p-2 rounded-lg border-blue-200"
            >
              <option value="">All</option>
              <option value="Flat">Flat</option>
              <option value="Crypto">Crypto</option>
            </select>
          </div>
          <div className="flex items-center  text-slate-400">
            <select className="border p-2 rounded-lg border-blue-200">
              <option value="">All</option>
            </select>
          </div>
          <div className="flex items-center  text-slate-400">
            <select className="border p-2 rounded-lg border-blue-200">
              <option value="">All</option>
            </select>
          </div>
          <div className="flex items-center text-slate-400">
            <select className="border p-2 rounded-lg border-blue-200">
              <option value="">All</option>
            </select>
          </div>

          <div
            onClick={handleSearch}
            className="flex items-center
      border p-2 rounded-lg mr-2 border-blue-200  bg-white"
          >
            <input
              type="text"
              placeholder="search..."
              className="focus:outline-none w-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <FcSearch size={30} />
          </div>
        </div>
        <table className="bg-white  w-full h-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="py-2">Date</th>
              <th className="py-2">Pair</th>
              <th className="py-2">Type/Side</th>
              <th className="py-2">Price</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Fillter</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {TradehistoryData &&
            TradehistoryData?.data &&
            TradehistoryData.data.length > 0 ? (
              TradehistoryData.data.map((e, i) => (
                <tr key={i || e.id} className="border-2 border-slate-50">
                  <td className="py-2">{e.date || "N/A"}</td>
                  <td className="py-2">{e.pair || "N/A"}</td>
                  <td className="py-2">
                    {e.type || "N/A"}/{e.side || "N/A"}
                  </td>
                  <td className="py-2">{e.price || "N/A"}</td>
                  <td className="py-2">{e.amount || "N/A"}</td>
                  <td className="py-2">{e.filled || "N/A"}</td>
                  <td className="py-2">{e.status || "N/A"}</td>

                  <td className="py-2">
                    <button
                      className={`${
                        e.status === "filled"
                          ? "bg-blue-300 p-2 rounded w-20 h-8"
                          : "bg-red-500 w-20 h-8 p-2 rounded"
                      }`}
                    >
                      {e.status}
                    </button>
                  </td>
                  <td className="py-2">
                    {e.status === "filled" ? (
                      <MdVisibility style={{ color: "green"  }} size={25}/>
                    ) : (
                      <MdVisibilityOff style={{ color: "red" }} size={25}/>
                    )}
                     {/* <MdVisibilityOff /> */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-2">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OpenOrder;
