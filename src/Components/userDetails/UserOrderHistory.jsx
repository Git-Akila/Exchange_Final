import React, { useState } from "react";
import { GiCloudDownload } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { IoFilterCircle } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function UserOrderHistory() {
  const options = ["All", "Past 7 days", "Past 30 days", "Past 60 days"];
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="mx-auto container">
      <div className="justify-center">
        <div className="justify-between flex">
          <h2 className="text-blue-700 font-semibold">Orders History</h2>
          <button className="p-2 rounded-lg flex justify-center items-center text-[14px] gap-2 bg-blue-200">
            <GiCloudDownload size={20} />
            <p className=""> Export</p>
          </button>
        </div>
        <div className="justify-normal flex gap-5 mb-4 mt-4">
          <select className="border text-[15px] p-2 rounded-lg focus:outline-none bg-blue-100">
            <option>All</option>
            {options.map((e, i) => (
              <option key={i} className="bg-white border rounded-lg ">
                {e}
              </option>
            ))}
          </select>
          <select className="border text-[15px] p-2 rounded-lg focus:outline-none bg-blue-100">
            <option>All</option>
            {options.map((e, i) => (
              <option key={i} className="bg-white border rounded-lg ">
                {e}
              </option>
            ))}
          </select>
          /
          <select className="border text-[15px] p-2 rounded-lg focus:outline-none bg-blue-100">
            <option>All</option>{" "}
            {options.map((e, i) => (
              <option key={i} className="bg-white border rounded-lg ">
                {e}
              </option>
            ))}
          </select>
          <select className="border text-[15px] p-2 rounded-lg focus:outline-none bg-blue-100">
            <option>All</option>{" "}
            {options.map((e, i) => (
              <option key={i} className="bg-white border rounded-lg ">
                {e}
              </option>
            ))}
          </select>
          <select className="border text-[15px] p-2 rounded-lg focus:outline-none bg-blue-100">
            <option>All</option>{" "}
            {options.map((e, i) => (
              <option key={i} className="bg-white border rounded-lg ">
                {e}
              </option>
            ))}
          </select>
          <div className="border rounded-lg justify-between flex items-center p-2">
            <input type="text" className="focus:outline-none " />
            <ImSearch />
          </div>
          <div className="items-center flex justify-between">
            <p className="text-[15px]">Hide Cancelled Order</p>
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
          </div>
          <div className="relative text-center flex items-center cursor-pointer">
            <IoFilterCircle size={40} onClick={handleOpen} />
            {open && (
              <div
                className="absolute justify-end  items-end text-[16px] bg-white 
      shadow-md p-4 mt-80 border border-sky-200 rounded-md  left-0 transform -translate-x-full text-center w-[200px]"
              >
                <h2 className="mb-2 border-b border-sky-200">Filter Users</h2>

                <div className="mb-4">
                  <label className="block text-left mb-2 font-bold">
                    Start Date
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="border p-2 rounded-md w-full"
                    placeholderText="Select start date"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left mb-2 font-bold">
                    End Date
                  </label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="border p-2 rounded-md w-full"
                    placeholderText="Select end date"
                  />
                </div>
                <button className="p-2 w-full bg-slate-100 font-bold mb-2 mt-1 rounded-lg">
                  Filter
                </button>
                <button className="p-2 w-full bg-slate-100 font-bold mb-2 mt-1 rounded-lg ">
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>

        <div>
          <table className="text-[16px] bg-slate-50 border w-full mt-6">
            <thead >
              <tr className="border-b">
                <th className="py-2">Date</th>
                <th className="py-2">Pair</th>

                <th className="py-2">Type/Side</th>
                <th className="py-2">Price</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Filled</th>
                <th className="py-2">Pair Fees</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>..</td>
                <td>..</td>
                <td>..</td>
                <td>..</td>
                <td>..</td>
                <td>..</td>
                <td>..</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserOrderHistory;
