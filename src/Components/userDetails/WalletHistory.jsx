import React, { useState } from "react";
import {
  MdVisibility,
  MdOutlineCloudDownload,
  MdVisibilityOff,
} from "react-icons/md";
import DatePicker from "react-datepicker";
import { BsCalendarDate } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
function WalletHistory({ UserTransactionData }) {
  console.log(
    "UserTransactionData11 " + JSON.stringify(UserTransactionData.data)
  );
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
      <div className="bg-slate-50 p-2 rounded">
        <div className="justify-between flex">
          <h2 className=" font-semibold text-xl mb-2 mt-2">Wallet History</h2>
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
          <div className="flex items-center text-slate-400">
            <select className="border p-2 rounded-lg border-blue-200">
              <option value="">All</option>
            </select>
          </div>
          <div className="flex items-center text-slate-400">
            <select className="border p-2 rounded-lg border-blue-200">
              <option value="">All</option>
            </select>
          </div>
          {/* npm install react-datepicker
           */}
          <div className="flex items-center border p-2 bg-white rounded-lg border-blue-200">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              placeholderText="Select Date"
              className="focus:outline-none"
            />
            <BsCalendarDate size={20} color="#5390D9" />
          </div>

          <div
            onClick={handleSearch}
            className="flex items-center
      border p-2 rounded-lg mr-2 border-blue-200 bg-white "
          >
            <input
              type="text"
              placeholder="search..."
              className="focus:outline-none w-full "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <FcSearch size={30} />
          </div>
        </div>
        <table className="bg-slate-50 border-2 border-gray-200 w-full h-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
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
            {UserTransactionData && UserTransactionData.data ? (
              UserTransactionData.data.fiat.map((e) => (
                <tr className="border-2  border-slate-50">
                  <td className="py-2">{e.DateTime || "N/A"}</td>
                  <td className="py-2">{e.currency || "N/A"}</td>
                  <td className="py-2">{e.type || "N/A"}</td>
                  <td className="py-2">{e.total || "N/A"}</td>
                  <td className="py-2">{e.fee || "N/A"}</td>
                  <td className="py-2">{e.method || "N/A"}</td>
                  <td className="py-2">{e.txnid || "N/A"}</td>
                  <td className="py-2">{e.command || "N/A"}</td>

                  <td className="py-2">
                    <button className="bg-blue-300 px-2 rounded-lg">
                      {e.status === 1
                        ? "Approved"
                        : e.status === 2
                        ? "Rejected"
                        : e.status === 0
                        ? "Cancelled"
                        : "N/A"}
                    </button>
                  </td>
                  <td className="py-2">
                    {e.status === 1 ? (
                      <p>
                        <MdVisibility
                          color={e.status === 1 ? "green" : "red"}
                          size={25}
                        />
                      </p>
                    ) : (
                      <MdVisibilityOff color="gray" size={25} />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <div></div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WalletHistory;
